global using WFRP4e.Translator.Utilities;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Packs;
using System.Reflection;
using DeepL;
using WFRP4e.Translator.Json.Entries;
using System.Text;

namespace WFRP4e.Translator
{
    internal class Program
    {
        private static Random random = new Random();

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        private static void Main(string[] args)
        {
            Console.SetWindowSize(Convert.ToInt32(Console.LargestWindowWidth * 0.9), Convert.ToInt32(Console.LargestWindowHeight * 0.9));

            Config.Configuration = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetParent(AppContext.BaseDirectory).FullName)
                 .AddJsonFile("appsettings.json", false)
                 .Build();

            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", Config.GoogleSigninKeyPath);

            Console.WriteLine(
                        $"Konfiguracja:\nŚcieżka do plików .db: {Config.PacksPath}\nŚcieżka do plików wyjściowych: {Config.TranslationsPath}");
            Console.WriteLine($"Ogarniam mapowanie");
            InitAllMappings();

            ConsoleKeyInfo input;
            do
            {
                Console.WriteLine($"Generuję json dla oryginałów");
                ExtractJsonsToFilesAndCorrectIds(Config.PacksPath);
                Console.WriteLine($"Generuję json dla tłumaczeń");
                ExtractJsonsToFilesAndCorrectIds(Config.TranslationsPath);

                Console.WriteLine(
                    @"
                  Wciśnij 1. aby zmodyfikować pliki .db na podstawie plików json.
                  Wciśnij 2. aby przetłumaczyć journal entries.
                  Wciśnij 3. aby zwalidować i zaktualizować mapowania.
                  "
    );
                input = Console.ReadKey();
                Console.WriteLine();
                if (input.KeyChar == '1')
                {
                    TransformPackagesBasedOnTranslationFile(Config.PacksPath, Config.TranslationsPath);
                }
                else if (input.KeyChar == '2')
                {
                    new JournalAutoTranslator().Parse(Config.SourceJsons + "\\wfrp4e-eis\\journal");
                }
                else if (input.KeyChar == '3')
                {
                    UpdateJsonMappingFiles();
                }
            }
            while (input.KeyChar != 'x');
            Console.WriteLine("Zakończono");
        }

        private static void RemoveDuplicateItemsFromActors()
        {
            var packs = Directory.EnumerateFiles(Config.PacksPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var originalPacks = File.ReadAllLines(pack);
                var content = new StringBuilder();
                foreach (var originalPack in originalPacks)
                {
                    var originalObj = JObject.Parse(originalPack);
                    var id = originalObj.GetValue("_id").Value<string>();
                    if (originalObj["type"] != null)
                    {
                        var type = originalObj.GetValue("type").Value<string>();
                        var originalSourceId = originalObj["flags"]["core"]["sourceId"].ToString();
                        if (type == "npc" || type == "character" || type == "creature")
                        {
                            var originalItems = ((JArray)originalObj["items"]);
                            foreach (var item in ((JArray)originalObj["items"]).ToArray())
                            {
                                var duplicates = originalItems.Where(x => x.Value<string>("name") == item.Value<string>("name") && x != item).ToList();
                                if (duplicates.Count > 1)
                                {
                                    foreach (var duplicate in duplicates)
                                    {
                                        if (duplicate["system"]?["specification"]?["value"]?.ToString() == null
                                            || item["system"]?["specification"]?["value"]?.ToString() == null
                                            || duplicate["system"]?["specification"]?["value"]?.ToString() == item["system"]?["specification"]?["value"]?.ToString())
                                        {
                                            originalItems.Remove(duplicate);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    content.AppendLine(JsonConvert.SerializeObject(originalObj, Formatting.None));
                }
                File.WriteAllText(pack, content.ToString());
            }
        }

        private static void TransformPackagesBasedOnTranslationFile(string packsPath, string translationsPath)
        {
            var packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            var translationsPaths = Directory.EnumerateFiles(translationsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var module = Path.GetFileName(Path.GetDirectoryName(Path.GetDirectoryName(pack)));
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
                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TypeToMappingDictonary[type];
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

        //TODO: REVIEW THIS METHOD AS IT SUCKS.
        private static void UpdateJsonMappingFiles()
        {
            var packs = Directory.EnumerateFiles(Config.TranslationsPath, "*.db", SearchOption.AllDirectories).ToList();

            var newTypeToJsonListDic = new Dictionary<string, List<Entry>>();

            foreach (var pack in packs)
            {
                var jsons = File.ReadAllLines(pack).Select(x => JObject.Parse(x)).Where(x =>
                            x["type"] == null || (
                            x["type"].ToString() != "npc" &&
                            x["type"].ToString() != "creature" &&
                            x["type"].ToString() != "character" &&
                            x["type"].ToString() != "vehicle"))
                    .ToList();

                foreach (var itemJson in jsons)
                {
                    var id = itemJson.GetValue("_id").Value<string>();
                    var type = GenericReader.GetTypeFromJson(itemJson);
                    var targtetType = GenericReader.GetEntryType(type, typeof(Entry));

                    var name = itemJson.GetValue("name").Value<string>();

                    var sourceCompendium = pack.Replace(Config.TranslationsPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[0];
                    var packName = Path.GetFileNameWithoutExtension(pack);
                    var originalSourceId = itemJson["flags"]["core"]["sourceId"].ToString();
                    var correctSourceId = $"Compendium.{sourceCompendium}.{packName}.{id}";
                    if (originalSourceId != correctSourceId)
                    {
                        Console.WriteLine($"SOMETHING IS WRONG: {originalSourceId} VS: {correctSourceId}");
                        continue;
                    }

                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TypeToMappingDictonary[type];
                        if (!dic.ContainsKey(correctSourceId))
                        {
                            //TRY CREATE EMPTY:
                            Console.WriteLine($"Nie odnalazłem wpisu dla: {correctSourceId} - {type} - {name}");
                            var entry = targtetType.GetConstructor(new Type[] { }).Invoke(new object[] { }) as Entry;
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                var method = readerType.GetMethod("UpdateEntry");
                                method.Invoke(reader, new object[] { itemJson, entry });

                                dic.Add(entry.OriginFoundryId, entry);
                                if (!newTypeToJsonListDic.ContainsKey(type))
                                {
                                    newTypeToJsonListDic[type] = new List<Entry>();
                                }
                                newTypeToJsonListDic[type].Add(entry);
                            }
                        }
                        else
                        {
                            //GET AND UPDATE IF NEEDED;
                            var entry = dic[correctSourceId];
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                var method = readerType.GetMethod("UpdateEntry");
                                var updated = (bool)method.Invoke(reader, new object[] { itemJson, entry });
                                if (updated)
                                {
                                    if (!newTypeToJsonListDic.ContainsKey(type))
                                    {
                                        newTypeToJsonListDic[type] = new List<Entry>();
                                    }
                                    newTypeToJsonListDic[type].Add(entry);
                                }
                            }
                        }
                    }
                }
            }

            foreach (var pack in packs)
            {
                var jsons = File.ReadAllLines(pack).Select(x => JObject.Parse(x)).Where(x =>
                            x["type"] != null && (
                            x["type"].ToString() == "npc" ||
                            x["type"].ToString() == "creature" ||
                            x["type"].ToString() == "character" ||
                            x["type"].ToString() == "vehicle"))
                    .ToList();

                foreach (var actorJson in jsons)
                {
                    var id = actorJson.GetValue("_id").Value<string>();
                    var type = GenericReader.GetTypeFromJson(actorJson);
                    var targtetType = GenericReader.GetEntryType(type, typeof(Entry));

                    var name = actorJson.GetValue("name").Value<string>();

                    var sourceCompendium = pack.Replace(Config.TranslationsPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[0];
                    var packName = Path.GetFileNameWithoutExtension(pack);
                    var originalSourceId = actorJson["flags"]["core"]["sourceId"].ToString();
                    var correctSourceId = $"Compendium.{sourceCompendium}.{packName}.{id}";
                    if (originalSourceId != correctSourceId)
                    {
                        Console.WriteLine($"SOMETHING IS WRONG: {originalSourceId} VS: {correctSourceId}");
                        continue;
                    }

                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TypeToMappingDictonary[type];
                        if (!dic.ContainsKey(correctSourceId))
                        {
                            //TRY CREATE EMPTY:
                            Console.WriteLine($"Nie odnalazłem wpisu dla: {correctSourceId} - {type} - {name}");
                            var entry = targtetType.GetConstructor(new Type[] { }).Invoke(new object[] { }) as ActorEntry;
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                var method = readerType.GetMethod("UpdateEntry");
                                method.Invoke(reader, new object[] { actorJson, entry });

                                dic.Add(entry.OriginFoundryId, entry);
                                if (!newTypeToJsonListDic.ContainsKey(type))
                                {
                                    newTypeToJsonListDic[type] = new List<Entry>();
                                }
                                newTypeToJsonListDic[type].Add(entry);
                            }
                        }
                        else
                        {
                            //GET AND UPDATE IF NEEDED;
                            var entry = dic[correctSourceId];
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                var method = readerType.GetMethod("UpdateEntry");
                                var updated = (bool)method.Invoke(reader, new object[] { actorJson, entry });
                                if (updated)
                                {
                                    if (!newTypeToJsonListDic.ContainsKey(type))
                                    {
                                        newTypeToJsonListDic[type] = new List<Entry>();
                                    }
                                    newTypeToJsonListDic[type].Add(entry);
                                }
                            }
                        }
                    }
                }
            }

            foreach (var type in newTypeToJsonListDic.Keys)
            {
                foreach (var newItem in newTypeToJsonListDic[type])
                {
                    var folder = newItem.OriginFoundryId.Split('.')[1];
                    var dictionaryPath = Path.Combine(Config.SourceJsons, folder, type);
                    if (!Directory.Exists(dictionaryPath))
                    {
                        Directory.CreateDirectory(dictionaryPath);
                    }

                    var path = Config.SourceJsons + "\\" + newItem.OriginFoundryId.Split(".")[1] + "\\" + type;
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    var fileName = string.Join("-", newItem.OriginalName.Split(Path.GetInvalidFileNameChars()));
                    var filePath = Path.Combine(path, $"{(fileName.Length > 20 ? fileName.Substring(0, 20) : fileName)}_{newItem.FoundryId}.json");
                    File.WriteAllText(filePath, JsonConvert.SerializeObject(newItem, Formatting.Indented));
                }
            }
        }

        private static void ExtractJsonsToFilesAndCorrectIds(string packsPath)
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
                                Console.WriteLine($"{entryId} - Nie można dopasować sourceId, pasujace itemy: {matchingItems.Count}");
                            }
                            if (success && newSourceId != sourceId)
                            {
                                Console.WriteLine($"{entryId} - Aktualizuję sourceId dla elementu: {item.Value<string>("_id")} na {newSourceId}");
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
                                    Console.WriteLine("Source Id dla elementu: " + item.Value<string>("name") + " nie może być odnalezione " + existingSourceId);
                                    ((JObject)(item["flags"]["core"])).Remove("sourceid");
                                }
                            }
                            else
                            {
                                Console.WriteLine("Source Id dla elementu: " + item.Value<string>("name") + " nie może być odnalezione " + existingSourceId);
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

        private static void InitAllMappings()
        {
            var listOfSources = Directory.GetDirectories(Config.SourceJsons);
            foreach (var source in listOfSources)
            {
                var listOfDirectories = Directory.GetDirectories(source);
                foreach (var directory in listOfDirectories)
                {
                    var type = Path.GetFileName(directory);
                    if (!Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        Mappings.TypeToMappingDictonary.Add(type, new Dictionary<string, Entry>());
                    }
                    var dictionary = Mappings.TypeToMappingDictonary[type];
                    var targtetType = GenericReader.GetEntryType(type, typeof(Entry));

                    var listOfJsons = Directory.EnumerateFiles(directory, "*.json", SearchOption.TopDirectoryOnly).ToList();
                    foreach (var json in listOfJsons)
                    {
                        var element = JsonConvert.DeserializeObject(File.ReadAllText(json), targtetType) as Entry;
                        dictionary.Add(element.OriginFoundryId, element);
                    }
                }
            }
        }

        #region Various

        private static string GetTypeFromJsonPath(string json)
        {
            var type = Path.GetDirectoryName(json).Replace(Config.SourceJsons, "").Trim('\\');
            return type;
        }

        private static void CreateDeeplGlossary()
        {
            var translator = DeepLTranslator.Client;

            var entriesDictionary = new Dictionary<string, string>();
            var props = typeof(Mappings).GetFields(BindingFlags.Public | BindingFlags.Static).ToList();
            foreach (var prop in props)
            {
                var dic = prop.GetValue(null) as Dictionary<string, Entry>;
                if (dic != null)
                {
                    foreach (var value in dic.Keys)
                    {
                        entriesDictionary[value] = dic[value].Name;
                    }
                }
            }

            entriesDictionary.Add("roll", "rzut");
            entriesDictionary.Add("Foundry", "Foundry");

            var glossaries = translator.ListGlossariesAsync().Result;
            foreach (var glossary in glossaries)
            {
                translator.DeleteGlossaryAsync(glossary).Wait();
            }
            var glossaryEnToDe = translator.CreateGlossaryAsync("Wfrp Glossary", "EN", "PL", new GlossaryEntries(entriesDictionary)).Result;
        }

        private static void ExportAllEffects()
        {
            var packs = Directory.EnumerateFiles(Config.TranslationsPath, "*.db", SearchOption.AllDirectories).ToList();
            var packsOriginal = Directory.EnumerateFiles(Config.PacksPath, "*.db", SearchOption.AllDirectories).ToList();
            var effectsObjects = new List<Entry>();
            foreach (var pack in packsOriginal)
            {
                var fileName = Path.GetFileName(pack);
                if (packs.Select(x => Path.GetFileName(x)).All(x => x != fileName))
                {
                    packs.Add(pack);
                }
            }

            foreach (var pack in packs)
            {
                var lines = File.ReadAllLines(pack);
                foreach (var line in lines)
                {
                    try
                    {
                        var packObject = JObject.Parse(line);
                        var type = GenericReader.GetTypeFromJson(packObject);
                        var name = packObject["name"].Value<string>();
                        var id = packObject["_id"].Value<string>();
                        var effects = packObject["effects"]?.ToArray();
                        if (effects != null)
                        {
                            foreach (var effect in effects)
                            {
                                var label = effect["label"].Value<string>();
                                Console.WriteLine($"Found {label} - {effect["_id"].Value<string>()}");
                                if (!string.IsNullOrEmpty(effect["flags"]?["wfrp4e"]?["script"]?.ToString()))
                                {
                                    var effectId = effect["_id"].Value<string>();
                                    effectsObjects.Add(new Entry
                                    {
                                        FoundryId = $"{id}.{type}.{effectId}",
                                        Name = $"{name} - {label}",
                                        OriginalName = $"{name} - {label}",
                                        Description = effect["flags"]?["wfrp4e"]?["script"]?.ToString()
                                    });
                                }
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(line);
                        Console.WriteLine(e);
                    }
                }
            }
            File.WriteAllText(Config.TranslationsPath + "\\wfrp4e-jsons\\effects.json", JsonConvert.SerializeObject(effectsObjects, Formatting.Indented));
        }

        private static void ValidatingCareerTranslatiosn()
        {
            var careers = JArray.Parse(File.ReadAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.career.desc.json"));
            var skills = JArray.Parse(File.ReadAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.skill.desc.json"));
            foreach (JObject career in careers)
            {
                var skillsText = ((JArray)career["Skills"]).Select(x => x.Value<string>()).ToList();
                foreach (var skillText in skillsText)
                {
                    var skill = skills.FirstOrDefault(x => skillText == x.Value<string>("Name"));
                    if (skill == null)
                    {
                        var trimmedSkillText = skillText;
                        if (skillText.IndexOf("(") > 0)
                        {
                            trimmedSkillText = skillText.Substring(0, skillText.IndexOf("(") - 1).Trim();
                        }

                        skill = skills.FirstOrDefault(x => x.Value<string>("Name").StartsWith(trimmedSkillText));
                        if (skill == null)
                        {
                            Console.WriteLine("NIE ODNALEZIONO UMIEJĘTNOŚCI: " + skillText + " DLA: " + career.Value<string>("Name"));
                        }
                        else
                        {
                            var randomtext = RandomString(16);
                            var newSkill = skill.DeepClone();
                            newSkill["Name"] = skillText;
                            newSkill["OriginalName"] = skill.Value<string>("OriginalName").Split("(")[0].Trim() + " (" + randomtext + ")";
                            newSkill["FoundryId"] = randomtext;
                            newSkill["OriginFoundryId"] = "Compendium.wfrp4e-core.skills." + randomtext;
                            skills.Add(newSkill);
                        }
                    }
                }
            }
            File.WriteAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.skill.desc.json", JsonConvert.SerializeObject(skills, Formatting.Indented));
        }

        private static void FixStyling()
        {
            foreach (var file in Directory.GetFiles("Final"))
            {
                if (file.Contains("wfrp4e") && file.Contains("json"))
                {
                    var list = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(file));

                    foreach (var entry in list)
                    {
                        if (entry.Description != null && !entry.Description.StartsWith("<p>"))
                        {
                            entry.Description = "<p>" + entry.Description + "</p>";
                        }
                    }

                    var text = JsonConvert.SerializeObject(list, Formatting.Indented);
                    File.WriteAllText(file, text);
                }
            }
        }

        private static void FixCriticals()
        {
            var critArm = JObject.Parse(File.ReadAllText("Tables\\critarm.json"));
            var critBody = JObject.Parse(File.ReadAllText("Tables\\critbody.json"));
            var critHead = JObject.Parse(File.ReadAllText("Tables\\crithead.json"));
            var critLeg = JObject.Parse(File.ReadAllText("Tables\\critleg.json"));
            var list = new List<JObject> { critArm, critBody, critHead, critLeg };

            var entries = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText("Final\\wfrp4e.critical.desc.json"));
            foreach (var entry in entries)
            {
                JObject row = null;
                foreach (var jObj in list)
                {
                    if (row == null)
                    {
                        row = (JObject)((JArray)jObj["rows"]).FirstOrDefault(x =>
                          x["name"].Value<string>() == entry.Name);
                    }
                }

                if (row == null)
                {
                    Console.WriteLine("NIE ODNALEZIOJNO: " + entry);
                }
                else
                {
                    entry.Description = row["description"].Value<string>();
                    if (!entry.Description.StartsWith("<p>"))
                    {
                        entry.Description = "<p>" + entry.Description + "</p>";
                    }
                }
            }

            foreach (var jObj in list)
            {
                foreach (JObject row in ((JArray)jObj["rows"]))
                {
                    var name = row["name"].Value<string>();
                    var entry = entries.SingleOrDefault(x => x.Name == name);
                    if (entry == null)
                    {
                        Console.WriteLine("NIE ODNALEZIONO WPISU: " + name);
                    }
                }
            }
            var text = JsonConvert.SerializeObject(entries, Formatting.Indented);
            File.WriteAllText("Final\\wfrp4e.critical.desc.json", text);
        }

        private static void SomeTransformationsOverTables()
        {
            var entries = JArray.Parse(File.ReadAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.table.desc.json"));
            var critcs = File.ReadAllLines("C:\\Code\\wfrp4e-core\\wfrp4e-core\\packs\\tables.db").Select(x => JObject.Parse(x)).ToList();
            critcs.AddRange(File.ReadAllLines("C:\\Code\\wfrp4e-core\\wfrp4e-eis\\packs\\tables.db").Select(x => JObject.Parse(x)));
            foreach (JObject entry in entries)
            {
                foreach (JObject result in (JArray)(entry["TableResults"]))
                {
                    if (result.Value<string>("Name") == null)
                    {
                        result["Name"] = result["OriginalName"];
                        var entryId = entry.Value<string>("FoundryId");
                        var resultId = result.Value<string>("FoundryId");

                        var table = critcs.FirstOrDefault(x => x.Value<string>("_id") == entryId);
                        if (table != null)
                        {
                            var resultDb = ((JArray)table["results"]).FirstOrDefault(x => x.Value<string>("_id") == resultId);
                            if (resultDb != null)
                            {
                                var text = resultDb.Value<string>("text");
                                result["OriginalName"] = text;
                                if (text.StartsWith("@UUID[Compendium."))
                                {
                                    text = text.Substring(0, text.IndexOf("{")) + "{" + result["Name"] + "}";
                                    result["Name"] = text;
                                }
                            }
                            else
                            {
                                Console.WriteLine("NIE ODNALEZIONO RESULTATU: " + result["Name"] + " Z TABELI: " + entry["Name"]);
                            }
                        }
                        else
                        {
                            Console.WriteLine("NIE ODNALEZIONO TABELI: " + entry["Name"]);
                            break;
                        }
                    }
                }
            }

            File.WriteAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.table.desc.json", JsonConvert.SerializeObject(entries, Formatting.Indented));
            // File.WriteAllText(targetPath, JsonConvert.SerializeObject(arr, Formatting.Indented));
        }

        #endregion Various
    }
}