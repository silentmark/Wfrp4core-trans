using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WFRP4e.Translator.Json.Entries;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Packs;
using Newtonsoft.Json.Linq;
using System.Windows.Markup;

namespace Wfrp.Library.Services
{
    public class PackageUpdater
    {
        public static event EventHandler<GenericEventArgs<string>> ProgressUpdated;

        private static void OnProgressUpdated(string message)
        {
            if (ProgressUpdated != null)
            {
                ProgressUpdated.Invoke(typeof(PackageUpdater), new GenericEventArgs<string>(message));
            }
        }

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
                        typeToMappingDictionary.Add(type, new Dictionary<string, BaseEntry>());
                    }
                    var dictionary = typeToMappingDictionary[type];
                    var targtetType = GenericReader.GetEntryType(type, typeof(BaseEntry));

                    var listOfJsons = Directory.EnumerateFiles(directory, "*.json", SearchOption.TopDirectoryOnly).ToList();
                    foreach (var json in listOfJsons)
                    {
                        var element = JsonConvert.DeserializeObject(File.ReadAllText(json), targtetType) as BaseEntry;
                        //TODO: hack after compendium split?
                        //if (!element.OriginFoundryId.Contains("items.Item"))
                        //{
                        //    element.OriginFoundryId = element.OriginFoundryId.Replace(".items.", ".items.Item.");
                        //}
                        dictionary.Add(element.OriginFoundryId, element);
                    }
                }
            }
        }

        public static void TransformPackagesBasedOnTranslationFile(string packsPath, string translationsPath)
        {
            var packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            var translationsPaths = Directory.EnumerateFiles(translationsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var module = Path.GetFileName(Path.GetDirectoryName(Path.GetDirectoryName(pack)));
                OnProgressUpdated($"Przetwarzam {Path.GetFileName(pack)} z modułu {module}");
                var translationPath = translationsPaths.FirstOrDefault(x => Path.GetFileName(Path.GetDirectoryName(Path.GetDirectoryName(x))) == module && Path.GetFileName(x) == Path.GetFileName(pack));
                var existingTranslations = new List<JObject>();
                var newTranslations = new List<JObject>();
                if (translationPath != null)
                {
                    var translationJsons = File.ReadAllLines(translationPath);
                    foreach (var json in translationJsons)
                    {
                        existingTranslations.Add(JObject.Parse(json));
                    }
                }
                translationPath = pack.Replace(packsPath, translationsPath);

                var originalPacks = File.ReadAllLines(pack);
                foreach (var originalPack in originalPacks)
                {
                    var originalObj = JObject.Parse(originalPack);
                    var id = originalObj.GetValue("_id").Value<string>();
                    var originalSourceId = originalObj["flags"]["core"]["sourceId"].ToString();
                    var translatedObj = existingTranslations.FirstOrDefault(x => x.GetValue("_id").Value<string>() == id);

                    var type = GenericReader.GetTypeFromJson(originalObj);
                    if (Mappings.TranslatedTypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TranslatedTypeToMappingDictonary[type];
                        if (dic.ContainsKey(originalSourceId))
                        {
                            var entry = dic[originalSourceId];
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericItemParser));
                            if (readerType != null)
                            {
                                var reader = (GenericItemParser)readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                reader.Parse(originalObj, entry);
                            }
                        }
                    }

                    if (translatedObj != null)
                    {
                        //TODO: Do some comparison between original and translated obj?;
                    }
                    newTranslations.Add(originalObj);
                }

                var content = new StringBuilder();
                foreach (var obj in newTranslations)
                {
                    content.AppendLine(JsonConvert.SerializeObject(obj, Formatting.None));
                }
                File.WriteAllText(translationPath, content.ToString());
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

        private static void UpdateChildItemSourceIds(Dictionary<string, Dictionary<string, JObject>> dic)
        {
            foreach (var dictionaries in dic)
            {
                foreach (var entry in dictionaries.Value.Where(x => x.Value.Value<string>("type") == "creature"
                || x.Value.Value<string>("type") == "npc"
                || x.Value.Value<string>("type") == "character"
                || x.Value.Value<string>("type") == "vehicle"))
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
                            item["flags"]["core"] = new JObject();
                            item["flags"]["core"]["sourceId"] = newSourceId;
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
                var files = Directory.EnumerateFiles(pack, "*.json");
                foreach (var file in files)
                {
                    var module = pack.Replace(packsPath, "").Split("\\", StringSplitOptions.RemoveEmptyEntries)[0];
                    var packName = pack.Replace(packsPath, "").Split("\\", StringSplitOptions.RemoveEmptyEntries)[2];
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
                    if (!dic.ContainsKey(compendiumPrefix))
                    {
                        dic[compendiumPrefix] = new Dictionary<string, JObject>();
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
                    if (obj["flags"]["core"]["sourceId"] == null)
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
                var packName = pack.Replace(Config.PacksPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[2];
                var module = Path.GetFileName(Path.GetDirectoryName(Path.GetDirectoryName(Path.GetDirectoryName(pack))));

                var sources = Directory.EnumerateFiles(pack, "*.json");
                foreach (var originalPack in sources)
                {
                    var babeleFileName = module + "." + packName;

                    var originalObj = JObject.Parse(File.ReadAllText(originalPack));
                    if (originalObj["_key"].ToString().Contains("."))
                    {
                        continue;
                    }
                    if (originalObj["type"]?.ToString() == "Item" ||
                        originalObj["type"]?.ToString() == "Macro" ||
                        originalObj["type"]?.ToString() == "RollTable")
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
                        if (originalObj["type"].ToString() == "ammunition" ||
                            originalObj["type"].ToString() == "armour" ||
                            originalObj["type"].ToString() == "weapon" ||
                            originalObj["type"].ToString() == "container" ||
                            originalObj["type"].ToString() == "money")
                        {
                            babeleFileName = $"{module}.trapping.{module}.{packName}";
                        }
                        else
                        {
                            babeleFileName = $"{module}.{originalObj["type"]}.{module}.{packName}";
                        }
                    }

                    if (!compendiumToEntriesDictionary.ContainsKey(babeleFileName))
                    {
                        compendiumToEntriesDictionary[babeleFileName] = new Dictionary<string, JObject>();
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
                                    ?? new JObject();
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
                        if (!string.IsNullOrEmpty(key))
                        {
                            entry.Remove("originalName");
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
                                entriesjArr[entry["name"].ToString()] = entry;
                            }
                        }
                    }

                    using FileStream fs = File.Open(babeleTranslationPath, FileMode.Create);
                    using StreamWriter sw = new StreamWriter(fs);
                    using JsonTextWriter jw = new JsonTextWriter(sw);

                    jw.Formatting = Formatting.Indented;
                    jw.IndentChar = ' ';
                    jw.Indentation = 4;

                    babeleTranslationObj.WriteTo(jw);
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
            var babeleJsons = Directory.EnumerateFiles(babeleLocationEn, "*.json", SearchOption.AllDirectories).ToList();
            var babeleJsonsPl = Directory.EnumerateFiles(babeleLocationPl, "*.json", SearchOption.AllDirectories).ToList();
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

                    var babeleEntryPl = ((JObject)entriesPl[property.Name]);
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
                using FileStream fs = File.Open(babeleLocationPl + "\\" + babeleName + ".json", FileMode.Create);
                using StreamWriter sw = new StreamWriter(fs);
                using JsonTextWriter jw = new JsonTextWriter(sw);

                jw.Formatting = Formatting.Indented;
                jw.IndentChar = ' ';
                jw.Indentation = 4;

                babelePl.WriteTo(jw);
            }
        }
    }
}