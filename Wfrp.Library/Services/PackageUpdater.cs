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
            var packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();

            CleanupJsonAndUpdateSourceId(packsPath, dic, packs);
            UpdateChildItemSourceIds(dic);
            GenertingEntryJsonFiles(packsPath, dic);
            RegenerateCleanDBFile(packsPath, dic);
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
                    var id = obj.GetValue("_id").Value<string>();
                    obj.Remove("_stats");
                    var parts = dictionaries.Key.Split(".");
                    if (!Directory.Exists(packsPath + "\\" + parts[1] + "\\packs\\jsons\\" + parts[2]))
                    {
                        Directory.CreateDirectory(packsPath + "\\" + parts[1] + "\\packs\\jsons\\" + parts[2]);
                    }
                    var targetPath = packsPath + "\\" + parts[1] + "\\packs\\jsons\\" + parts[2] + "\\" + id + ".json";
                    File.WriteAllText(targetPath, JsonConvert.SerializeObject(obj, Formatting.Indented));
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
                    foreach (var item in items)
                    {
                        var type = item.Value<string>("type");
                        var name = item.Value<string>("name");
                        var sourceId = item["flags"]?["core"]?["sourceId"]?.Value<string>();
                        var newSourceId = string.Empty;
                        if (string.IsNullOrEmpty(sourceId) || sourceId.Split(".").Length != 4)
                        {
                            var success = false;
                            var matchingItems = dic.Values.SelectMany(x => x.Values).ToList().Where(x => x.Value<string>("type") == type && x.Value<string>("name") == name).ToList();
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
                        }
                        else
                        {
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
                        }
                    }
                }
            }
        }

        private static void CleanupJsonAndUpdateSourceId(string packsPath, Dictionary<string, Dictionary<string, JObject>> dic, List<string> packs)
        {
            foreach (var pack in packs)
            {
                var module = pack.Replace(packsPath, "").Split("\\", StringSplitOptions.RemoveEmptyEntries)[0];
                var packName = Path.GetFileNameWithoutExtension(pack);
                var compendiumPrefix = "Compendium." + module + "." + packName;
                if (!dic.ContainsKey(compendiumPrefix))
                {
                    dic[compendiumPrefix] = new Dictionary<string, JObject>();
                }
                var jsons = File.ReadAllLines(pack);
                foreach (var jsonString in jsons)
                {
                    var obj = JObject.Parse(jsonString);
                    var id = obj.GetValue("_id").Value<string>();
                    obj.Remove("_stats");
                    obj.Remove("ownership");
                    dic[compendiumPrefix][id] = obj;
                    if (obj["flags"] == null)
                    {
                        obj["flags"] = new JObject();
                    }
                    if (obj["flags"]["core"] == null)
                    {
                        obj["flags"]["core"] = new JObject();
                    }
                    obj["flags"]["core"]["sourceId"] = compendiumPrefix + "." + id;
                }
            }
        }

        public static void GenerateBabeleJsonFiles(string originalPacksPath, string sourceJsonsPl, string babeleTargetLocation)
        {
            var compendiumToEntriesDictionary = new Dictionary<string, Dictionary<string, JObject>>();
            var packs = Directory.EnumerateFiles(originalPacksPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var packName = Path.GetFileNameWithoutExtension(pack);
                var module = Path.GetFileName(Path.GetDirectoryName(Path.GetDirectoryName(pack)));
                compendiumToEntriesDictionary[module + "." + packName] = new Dictionary<string, JObject>();
                OnProgressUpdated($"Przetwarzam {Path.GetFileName(pack)} z modułu {module}");

                var originalPacks = File.ReadAllLines(pack);
                foreach (var originalPack in originalPacks)
                {
                    var originalObj = JObject.Parse(originalPack);
                    var id = originalObj.GetValue("_id").Value<string>();
                    var originalSourceId = originalObj["flags"]["core"]["sourceId"].ToString();
                    var type = GenericReader.GetTypeFromJson(originalObj);

                    if (Mappings.TranslatedTypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TranslatedTypeToMappingDictonary[type];
                        if (dic.ContainsKey(originalSourceId))
                        {
                            var newBabeleEntry = new JObject();
                            var entry = dic[originalSourceId];
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericItemBabeleGenerator));
                            if (readerType != null)
                            {
                                var reader = (GenericItemBabeleGenerator)readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                reader.Parse(newBabeleEntry, originalObj, entry);
                                compendiumToEntriesDictionary[module + "." + packName][entry.FoundryId] = newBabeleEntry;
                            }
                        }
                    }
                }
                var babeleTranslationPath = babeleTargetLocation + "\\" + module + "." + packName + ".json";
                var babeleTranslationObj = JObject.Parse(File.ReadAllText(babeleTranslationPath));

                var entries = compendiumToEntriesDictionary[module + "." + packName].Values.ToArray();
                var entriesjArr = new JArray();
                foreach (var entry in entries)
                {
                    entriesjArr.Add(entry);
                }
                babeleTranslationObj["entries"] = entriesjArr;
                File.WriteAllText(babeleTranslationPath, JsonConvert.SerializeObject(babeleTranslationObj, Formatting.Indented));
            }
        }
    }
}