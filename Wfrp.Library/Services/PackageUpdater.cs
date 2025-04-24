using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;
using Wfrp.Library.Babele;
using Wfrp.Library.Json.Entries;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json.Entries;

namespace Wfrp.Library.Services
{
    public class PackageUpdater
    {
        public static event EventHandler<GenericEventArgs<string>> ProgressUpdated;

        private static void OnProgressUpdated(string message) => ProgressUpdated?.Invoke(typeof(PackageUpdater), new GenericEventArgs<string>(message));

        public static void InitAllMappings(string sourceJsons, Dictionary<string, Dictionary<string, BaseEntry>> typeToMappingDictionary)
        {
            typeToMappingDictionary.Clear();
            var listOfSources = Directory.GetDirectories(sourceJsons);
            foreach (var source in listOfSources)
            {
                var listOfDirectories = Directory.GetDirectories(source);
                foreach (var directory in listOfDirectories)
                {
                    var type = Path.GetFileName(directory);
                    if (!typeToMappingDictionary.ContainsKey(type))
                    {
                        typeToMappingDictionary.Add(type, []);
                    }
                    var dictionary = typeToMappingDictionary[type];
                    var targtetType = GenericReader.GetEntryType(type, typeof(BaseEntry));

                    var listOfJsons = Directory.EnumerateFiles(directory, "*.json", SearchOption.TopDirectoryOnly).ToList();
                    foreach (var json in listOfJsons)
                    {
                        var element = JsonConvert.DeserializeObject(File.ReadAllText(json), targtetType) as BaseEntry;
                        //TODO: hack after compendium split?
                        if (element.OriginFoundryId.Contains(".items.Item."))
                        {
                            element.OriginFoundryId = element.OriginFoundryId.Replace(".items.Item.", ".items.");
                        }
                        dictionary.Add(element.OriginFoundryId, element);
                    }
                }
            }
        }

        public static void ExtractJsonsToFilesAndCorrectIds(string packsPath)
        {
            var dic = new Dictionary<string, Dictionary<string, JObject>>();
            var packs = Directory.EnumerateDirectories(packsPath, "_source", SearchOption.AllDirectories).ToList();

            CleanupJsonAndUpdateSourceId(packsPath, dic, packs);
            UpdateChildItemSourceIds(dic);
            GenertingEntryJsonFiles(packsPath, dic);
        }

        private static void RegenerateCleanDBFile(string packsPath, Dictionary<string, Dictionary<string, JObject>> dic)
        {
            foreach (var dictionaries in dic)
            {
                var itemsToUpdate = dictionaries.Value.Select(x => x.Value).OrderBy(x => x["_id"].ToString()).ToList();

                var content = new StringBuilder();
                foreach (var entry in itemsToUpdate)
                {
                    content.AppendLine(JsonConvert.SerializeObject(entry, Formatting.None));
                }
                var parts = dictionaries.Key.Split(".");
                if (!Directory.Exists(packsPath + "\\" + parts[1] + "\\packs\\jsons\\" + parts[2]))
                {
                    Directory.CreateDirectory(packsPath + "\\" + parts[1] + "\\packs\\jsons\\" + parts[2]);
                }
                var targetPath = packsPath + "\\" + parts[1] + "\\packs\\" + parts[2] + ".db";
                File.Delete(targetPath);
                File.WriteAllText(targetPath, content.ToString());
            }
        }

        private static void GenertingEntryJsonFiles(string packsPath, Dictionary<string, Dictionary<string, JObject>> dic)
        {
            foreach (var dictionaries in dic)
            {
                foreach (var entry in dictionaries.Value)
                {
                    var obj = entry.Value;
                    var fileName = obj["fileName"].ToString();
                    obj.Remove("fileName");

                    var content = JsonConvert.SerializeObject(obj, Formatting.Indented);
                    File.WriteAllText(fileName, content);
                }
            }
        }

        //TODO: - move this to later phase, to process all modules and packs - right now we are scoped to single pack. 
        private static void UpdateChildItemSourceIds(Dictionary<string, Dictionary<string, JObject>> dic)
        {
            foreach (var dictionaries in dic)
            {
                foreach (var entry in dictionaries.Value.Where(x => x.Value.Value<string>("type") is "creature"
                or "npc"
                or "character"
                or "vehicle"))
                {
                    var items = entry.Value.Value<JArray>("items");
                    var entryId = entry.Value["flags"]["core"]["sourceId"].Value<string>();
                    foreach (JObject item in items)
                    {
                        //var item = dictionaries.Value[itemId.Value.ToString()];
                        var type = item.Value<string>("type");
                        var name = item.Value<string>("name");
                        var sourceId = item["flags"]?["core"]?["sourceId"]?.Value<string>();
                        var newSourceId = string.Empty;

                        var success = false;
                        var matchingItems = dic.Values.SelectMany(x => x.Values).ToList().Where(x => x.Value<string>("type") == type && x.Value<string>("name") == name && !x.Value<string>("_key").ToString().Contains(".")).ToList();
                        if (matchingItems.Count == 1)
                        {
                            success = true;
                            newSourceId = matchingItems[0]["flags"]["core"]["sourceId"].ToString();
                        }
                        if (matchingItems.Count > 1 && matchingItems.All(x => x["flags"]["core"]["sourceId"].ToString() != newSourceId))
                        {
                            OnProgressUpdated($"{entryId} - Nie można dopasować sourceId, pasujace elementy: {matchingItems.Count}");
                        }
                        if (success && newSourceId != sourceId)
                        {
                            OnProgressUpdated($"{entryId} - Aktualizuję sourceId dla elementu: {item.Value<string>("_id")} na {newSourceId}");
                            item["flags"]["core"] = new JObject
                            {
                                ["sourceId"] = newSourceId
                            };
                        }

                        /*
                        var existingSourceId = item["flags"]["core"]["sourceId"].Value<string>();
                        var dicKey = string.Join(".", existingSourceId.Split(".").Take(3));
                        if (dic.ContainsKey(dicKey))
                        {
                            var itemDictionary = dic[dicKey];
                            var existingItemId = existingSourceId.Split(".")[3];
                            var sourceItem = itemDictionary.Values.FirstOrDefault(x => x.Value<string>("type") == type && x.Value<string>("_id") == existingItemId);
                            if (sourceItem == null)
                            {
                                OnProgressUpdated("Nie odnaleziono elementu źródłowego dla: " + item.Value<string>("name") + " o sourceId: " + existingSourceId);
                                ((JObject)(item["flags"]["core"])).Remove("sourceid");
                            }
                        }
                        else
                        {
                            OnProgressUpdated("Source Id dla elementu: " + item.Value<string>("name") + " nie może być odnalezione " + existingSourceId);
                            ((JObject)(item["flags"]["core"])).Remove("sourceid");
                        }
                        */
                    }
                }
            }
        }

        private static void CleanupJsonAndUpdateSourceId(string packsPath, Dictionary<string, Dictionary<string, JObject>> dic, List<string> packs)
        {
            foreach (var pack in packs)
            {
                var files = Directory.EnumerateFiles(pack, "*.json").ToList();
                foreach (var file in files)
                {
                    var module = pack.Split("\\", StringSplitOptions.RemoveEmptyEntries).Reverse().ToList()[3];
                    var packName = pack.Replace(packsPath, "").Split("\\", StringSplitOptions.RemoveEmptyEntries)[1];
                    var compendiumPrefix = "Compendium." + module + "." + packName;

                    var obj = JObject.Parse(File.ReadAllText(file));
                    var id = obj.GetValue("_id").Value<string>();
                    obj.Remove("_stats");
                    obj.Remove("ownership");
                    if (obj.ContainsKey("items"))
                    {
                        var items = obj["items"];
                        foreach (JObject item in items)
                        {
                            item.Remove("_stats");
                            item.Remove("ownership");

                            if (item.ContainsKey("effects"))
                            {
                                var items2 = item["effects"];
                                foreach (JObject item2 in items2)
                                {
                                    item2.Remove("_stats");
                                    item2.Remove("ownership");
                                }
                            }
                        }
                    }
                    if (obj.ContainsKey("pages"))
                    {
                        var items = obj["pages"];
                        foreach (JObject item in items)
                        {
                            item.Remove("_stats");
                            item.Remove("ownership");
                        }
                    }
                    if (obj.ContainsKey("effects"))
                    {
                        var items2 = obj["effects"];
                        foreach (JObject item2 in items2)
                        {
                            item2.Remove("_stats");
                            item2.Remove("ownership");
                        }
                    }
                    if (!dic.ContainsKey(compendiumPrefix))
                    {
                        dic[compendiumPrefix] = [];
                    }
                    dic[compendiumPrefix][id] = obj;
                    if (obj["flags"] == null)
                    {
                        obj["flags"] = new JObject();
                    }
                    if (obj["flags"]["core"] == null)
                    {
                        obj["flags"]["core"] = new JObject();
                    }
                    // TODO: zmienic - inny format source id jest teraz...
                    if (obj["flags"]["core"]["sourceId"] == null || !obj["flags"]["core"]["sourceId"].ToString().StartsWith(compendiumPrefix + "." + id))
                    {
                        obj["flags"]["core"]["sourceId"] = compendiumPrefix + "." + id;
                    }


                    /*
                    {
                        if (obj["flags"]["core"]["sourceId"] == null || !obj["_key"].ToString().Contains("!"))
                        {
                            obj["flags"]["core"]["sourceId"] = compendiumPrefix + "." + id;
                        }
                        else
                        {
                            Console.WriteLine($"Skipping item {obj["_key"]} with {obj["flags"]["core"]["sourceId"]} - proposed sourceId: {compendiumPrefix + "." + id}");
                        }
                    }
                    */
                    obj["fileName"] = file;
                }
            }
        }

        public static void GenerateBabeleJsonFiles(string packsPath, string babeleTargetLocation, Dictionary<string, Dictionary<string, BaseEntry>> typeToMappingDictionary)
        {
            var compendiumToEntriesDictionary = new Dictionary<string, Dictionary<string, JObject>>();

            var packs = Directory.EnumerateDirectories(packsPath, "_source", SearchOption.AllDirectories).ToList();

            //packs = packs.Where(x => !x.Contains("armoury")).ToList();
            //packs = packs.Where(x => !x.Contains("actor")).ToList();
            //var packs = Directory.EnumerateFiles(packsPath, "bestiary.db", SearchOption.AllDirectories).ToList();

            //var pathToBabele = "C:\\source-code\\WFRP\\wfrp4e-core-pl-source\\locales\\pl\\wfrp4e-core.bestiary.json";
            //var originalBabele = JObject.Parse(File.ReadAllText(pathToBabele));
            foreach (var pack in packs)
            {
                var packName = pack.Split('\\', StringSplitOptions.RemoveEmptyEntries).Reverse().ToList()[1];
                var module = Path.GetFileName(Path.GetDirectoryName(Path.GetDirectoryName(Path.GetDirectoryName(pack))));

                var sources = Directory.EnumerateFiles(pack, "*.json").ToList();
                foreach (var originalPack in sources)
                {
                    var babeleFileName = module + "." + packName;

                    var originalObj = JObject.Parse(File.ReadAllText(originalPack));
                    if (originalObj["_key"].ToString().Contains("."))
                    {
                        continue;
                    }
                    if (originalObj["type"]?.ToString() is "Item" or
                        "Macro" or
                        "RollTable")
                    {
                        continue;
                    }

                    if (originalObj["type"] != null &&
                        originalObj["type"].ToString() != "npc" &&
                        originalObj["type"].ToString() != "creature" &&
                        originalObj["type"].ToString() != "character" &&
                        originalObj["type"].ToString() != "script" &&
                        originalObj["type"].ToString() != "vehicle")
                    {
                        babeleFileName = originalObj["type"].ToString() is "ammunition" or
                            "armour" or
                            "weapon" or
                            "container" or
                            "money"
                            ? $"{module}.trapping.{module}.{packName}"
                            : $"{module}.{originalObj["type"]}.{module}.{packName}";
                    }

                    if (!compendiumToEntriesDictionary.ContainsKey(babeleFileName))
                    {
                        compendiumToEntriesDictionary[babeleFileName] = [];
                    }
                    var babeleFile = babeleTargetLocation + "\\" + babeleFileName + ".json";

                    JObject originalBabele = null;
                    if (File.Exists(babeleFile))
                    {
                        originalBabele = JObject.Parse(File.ReadAllText(babeleFile));
                    }
                    var id = originalObj.GetValue("_id").Value<string>();
                    var originalSourceId = originalObj["flags"]["core"]["sourceId"].ToString();
                    var type = GenericReader.GetTypeFromJson(originalObj);
                    if (typeToMappingDictionary.ContainsKey(type))
                    {
                        var dic = typeToMappingDictionary[type];
                        if (dic.ContainsKey(originalSourceId))
                        {
                            var newBabeleEntry = new JObject();
                            if (originalBabele != null)
                            {
                                newBabeleEntry = (JObject)originalBabele["entries"][originalObj["name"].ToString()]
                                    ?? (JObject)originalBabele["entries"][originalObj["_id"].ToString()]
                                    ?? [];
                            }
                            var entry = dic[originalSourceId];
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericItemBabeleGenerator));
                            if (readerType != null)
                            {
                                var reader = (GenericItemBabeleGenerator)readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                reader.Parse(newBabeleEntry, originalObj, entry);
                                compendiumToEntriesDictionary[babeleFileName][entry.FoundryId] = newBabeleEntry;
                            }
                        }
                    }
                }
            }
            foreach (var babeleFile in compendiumToEntriesDictionary)
            {
                var babeleTranslationPath = babeleTargetLocation + "\\" + babeleFile.Key + ".json";
                if (File.Exists(babeleTranslationPath))
                {
                    var babeleTranslationObj = JObject.Parse(File.ReadAllText(babeleTranslationPath));

                    var entries = babeleFile.Value.Values.ToArray();
                    var entriesjArr = babeleTranslationObj["entries"];
                    foreach (var entry in entries)
                    {
                        var key = entry["originalName"]?.ToString();
                        if (entries.Count(x => x["originalName"]?.ToString() == key) > 1)
                        {
                            key = entry["id"].ToString();
                        }

                        if (entriesjArr[entry["id"].ToString()] != null)
                        {
                            entriesjArr[entry["id"].ToString()] = entry;
                        }
                        else
                        {
                            if (!string.IsNullOrEmpty(key))
                            {
                                entriesjArr[key] = entry;
                            }
                            else
                            {
                                key = entry["name"]?.ToString();
                                if (entries.Count(x => x["name"]?.ToString() == key) > 1)
                                {
                                    key = entry["id"].ToString();
                                }
                                entriesjArr[key] = entry;
                            }
                        }
                    }
                    foreach (var property in entriesjArr.OfType<JProperty>().ToList())
                    {
                        var key = entriesjArr[property.Name]["originalName"]?.ToString();
                        if (!string.IsNullOrEmpty(key))
                        {
                            (entriesjArr[property.Name] as JObject)?.Remove("originalName");
                        }
                    }

                    using (var fs = File.Open(babeleTranslationPath, FileMode.Create))
                    {
                        using var sw = new StreamWriter(fs);
                        using var jw = new JsonTextWriter(sw);

                        jw.Formatting = Formatting.Indented;
                        jw.IndentChar = ' ';
                        jw.Indentation = 4;
                        babeleTranslationObj.WriteTo(jw);
                    }
                    File.AppendAllText(babeleTranslationPath, Environment.NewLine);
                }
            }
        }

        public static void GenerateJsonFilesFromBabele(string sourceJsons, string babeleLocation, Dictionary<string, Dictionary<string, BaseEntry>> typeToMappingDictonary)
        {
            var babeleJsons = Directory.EnumerateFiles(babeleLocation, "*.json", SearchOption.AllDirectories).ToList();
            foreach (var babelePath in babeleJsons)
            {
                var babeleName = Path.GetFileNameWithoutExtension(babelePath);
                var module = babeleName.Split('.')[0];
                var packName = babeleName.Split('.')[1];
                OnProgressUpdated($"Przetwarzam {Path.GetFileName(packName)} z modułu {module}");

                var babele = JObject.Parse(File.ReadAllText(babelePath));
                var entries = (JObject)babele["entries"];
                foreach (var property in entries.Properties())
                {
                    var sourceId = ((JObject)property.Value).Value<string>("sourceId");
                    var babeleEntry = (JObject)property.Value;
                    if (!string.IsNullOrEmpty(sourceId))
                    {
                        var dictionary = typeToMappingDictonary.Values.FirstOrDefault(x => x.ContainsKey(sourceId));
                        if (dictionary != null)
                        {
                            var baseObject = dictionary[sourceId];
                            var readerType = GenericReader.GetEntryType(baseObject.Type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = (GenericReader)readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                var method = readerType.GetMethod("UpdateEntryFromBabele");
                                method.Invoke(reader, new object[] { babeleEntry, baseObject });
                            }
                        }
                    }
                    else
                    {
                        var id = ((JObject)property.Value).Value<string>("id");
                        sourceId = $"Compendium.{module}.{packName}.{id}";
                        var dictionary = typeToMappingDictonary.Values.FirstOrDefault(x => x.ContainsKey(sourceId));
                        if (dictionary != null)
                        {
                            var baseObject = dictionary[sourceId];
                            var readerType = GenericReader.GetEntryType(baseObject.Type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = (GenericReader)readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                // var method = readerType.GetMethod("UpdateEntryFromBabele");
                                //  method.Invoke(reader, new object[] { babeleEntry, baseObject });
                            }
                        }
                    }
                }
            }
            foreach (var type in typeToMappingDictonary.Keys)
            {
                foreach (var newItem in typeToMappingDictonary[type])
                {
                    var folder = newItem.Value.OriginFoundryId.Split('.')[1];
                    var dictionaryPath = Path.Combine(sourceJsons, folder, type);
                    if (!Directory.Exists(dictionaryPath))
                    {
                        Directory.CreateDirectory(dictionaryPath);
                    }

                    var path = sourceJsons + "\\" + newItem.Value.OriginFoundryId.Split(".")[1] + "\\" + type;
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    var fileName = string.Join("-", newItem.Value.Name.Split(Path.GetInvalidFileNameChars()));
                    var filePath = Path.Combine(path, $"{newItem.Value.FoundryId}.json");
                    File.WriteAllText(filePath, JsonConvert.SerializeObject(newItem.Value, Formatting.Indented));
                }
            }
        }

        public static void CompareBabeleJsonFiles(string babeleLocationEn, string babeleLocationPl)
        {
            var babeleJsons = Directory.EnumerateFiles(babeleLocationEn, "*.json", SearchOption.AllDirectories).Where(x=>!x.EndsWith("en.json")).ToList();
            var babeleJsonsPl = Directory.EnumerateFiles(babeleLocationPl, "*.json", SearchOption.AllDirectories).Where(x=> !x.EndsWith("en.json")).ToList();
            babeleJsons.Reverse();
            foreach (var babelePath in babeleJsons)
            {
                var babeleName = Path.GetFileNameWithoutExtension(babelePath);
                var module = babeleName.Split('.')[0];
                var packName = babeleName.Split('.')[1];
                OnProgressUpdated($"Przetwarzam {Path.GetFileName(packName)} z modułu {module}");

                var babele = JObject.Parse(File.ReadAllText(babelePath));
                var entries = (JObject)babele["entries"];

                var babelePl = JObject.Parse(File.ReadAllText(babeleJsonsPl.First(x => x.Contains(babeleName))));
                var entriesPl = (JObject)babelePl["entries"];

                foreach (var property in entries.Properties())
                {
                    var babeleEntry = (JObject)property.Value;

                    var babeleEntryPl = (JObject)entriesPl[property.Name];
                    if (babeleEntryPl != null)
                    {
                        foreach (var propertyPl in babeleEntryPl.Properties().ToList())
                        {
                            if (babeleEntry[propertyPl.Name] == null)
                            {
                                OnProgressUpdated($"Nie znaleziono tłumaczenia dla {property.Name}");
                                babeleEntryPl.Remove(property.Name);
                            }
                            if ((babeleEntry[propertyPl.Name] as JObject) != null)
                            {
                                var subItems = babeleEntry[propertyPl.Name].Value<JObject>();
                                var subItemsPl = babeleEntryPl[propertyPl.Name].Value<JObject>();
                                foreach (var subPropertyPl in subItemsPl.Properties().ToList())
                                {
                                    if (subItems[subPropertyPl.Name] == null)
                                    {
                                        OnProgressUpdated($"Nie znaleziono tłumaczenia dla {subPropertyPl.Name}");
                                        subItemsPl.Remove(subPropertyPl.Name);
                                    }

                                    if ((subItems[subPropertyPl.Name] as JObject) != null)
                                    {
                                        var subSubItems = subItems[subPropertyPl.Name].Value<JObject>();
                                        var subSubItemsPl = subItemsPl[subPropertyPl.Name].Value<JObject>();
                                        foreach (var subSubPropertyPl in subSubItemsPl.Properties().ToList())
                                        {
                                            if (subSubItems[subSubPropertyPl.Name] == null)
                                            {
                                                OnProgressUpdated($"Nie znaleziono tłumaczenia dla {subSubPropertyPl.Name}");
                                                subSubItemsPl.Remove(subSubPropertyPl.Name);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                using (var fs = File.Open(babeleLocationPl + "\\" + babeleName + ".json", FileMode.Create))
                {
                    using var sw = new StreamWriter(fs);
                    using var jw = new JsonTextWriter(sw);

                    jw.Formatting = Formatting.Indented;
                    jw.IndentChar = ' ';
                    jw.Indentation = 4;
                    babelePl.WriteTo(jw);
                }
                File.AppendAllText(babeleLocationPl + "\\" + babeleName + ".json", Environment.NewLine);
            }
        }

        public static void ExtractScripts(string systemLocation, Dictionary<string, Dictionary<string, BaseEntry>> translatedTypeToMappingDictonary)
        {
            if (string.IsNullOrEmpty(systemLocation))
            {
                systemLocation = "C:\\Source-Code\\WFRP\\WFRP4e-FoundryVTT";
            }

            var scripts = Directory.EnumerateFiles(systemLocation + "\\scripts", "*.js", SearchOption.AllDirectories).ToList();
            foreach (var key in translatedTypeToMappingDictonary.Keys)
            {
                var dic = translatedTypeToMappingDictonary[key];
                foreach (var entry in dic)
                {
                    var baseEntry = entry.Value;
                    switch (baseEntry)
                    {
                        case ActorEntry actor:
                            {
                                foreach (var subItem in actor.Items.OfType<ItemEntry>())
                                {
                                    foreach (var effect in subItem.Effects.Where(x => x.ScriptData != null))
                                    {
                                        foreach (var script in effect.ScriptData)
                                        {
                                            if (!string.IsNullOrEmpty(script.Script) && script.Script.StartsWith("[Script."))
                                            {
                                                SaveScript(systemLocation, scripts, actor, subItem, script.Script);
                                            }
                                            if (!string.IsNullOrEmpty(script.SubmissionScript) && script.SubmissionScript.StartsWith("[Script."))
                                            {
                                                SaveScript(systemLocation, scripts, actor, subItem, script.SubmissionScript);
                                            }
                                            if (!string.IsNullOrEmpty(script.HideScript) && script.HideScript.StartsWith("[Script."))
                                            {
                                                SaveScript(systemLocation, scripts, actor, subItem, script.HideScript);
                                            }
                                            if (!string.IsNullOrEmpty(script.ActivationScript) && script.ActivationScript.StartsWith("[Script."))
                                            {
                                                SaveScript(systemLocation, scripts, actor, subItem, script.ActivationScript);
                                            }
                                        }
                                    }
                                }
                                break;
                            }
                        case ItemEntry item:
                            {
                                if (item.Effects != null)
                                {
                                    foreach (var effect in item.Effects.Where(x => x.ScriptData != null))
                                    {
                                        foreach (var script in effect.ScriptData)
                                        {
                                            if (!string.IsNullOrEmpty(script.Script) && script.Script.StartsWith("[Script."))
                                            {
                                                SaveScript(systemLocation, scripts, null, item, script.Script);
                                            }
                                            if (!string.IsNullOrEmpty(script.SubmissionScript) && script.SubmissionScript.StartsWith("[Script."))
                                            {
                                                SaveScript(systemLocation, scripts, null, item, script.SubmissionScript);
                                            }
                                            if (!string.IsNullOrEmpty(script.HideScript) && script.HideScript.StartsWith("[Script."))
                                            {
                                                SaveScript(systemLocation, scripts, null, item, script.HideScript);
                                            }
                                            if (!string.IsNullOrEmpty(script.ActivationScript) && script.ActivationScript.StartsWith("[Script."))
                                            {
                                                SaveScript(systemLocation, scripts, null, item, script.ActivationScript);
                                            }
                                        }
                                    }
                                }
                                break;
                            }
                        default:
                            {
                                break;
                            }
                    }
                }


            }

        }

        private static void SaveScript(string systemLocation, List<string> scripts, ActorEntry? actor, ItemEntry subItem, string script)
        {
            var scriptFile = scripts.FirstOrDefault(x => x.Contains(script.Replace("[Script.", "").Replace("]", "") + ".js"));
            if (!string.IsNullOrEmpty(scriptFile))
            {
                var newFilePath = systemLocation + $"\\scripts-pl\\{scriptFile.Split("\\").Last()}";
                File.Copy(scriptFile, newFilePath, true);
                var fileContent = File.ReadAllText(newFilePath);
                if (!fileContent.StartsWith("//*** "))
                {
                    fileContent = "//*** " + subItem.Name + (actor != null ? " - " + actor.Name : "") + Environment.NewLine + fileContent;
                    File.WriteAllText(newFilePath, fileContent);
                }
            }
        }
    }
}