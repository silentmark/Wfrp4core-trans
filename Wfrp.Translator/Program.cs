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
using Wfrp.Library.Services;
using Config = WFRP4e.Translator.Utilities.Config;

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
            PackageUpdater.ProgressUpdated += (sender, message) => Console.WriteLine(message.EventData);
            PackageUpdater.InitAllMappings(Config.SourceJsonsEn, Mappings.OriginalTypeToMappingDictonary);
            PackageUpdater.InitAllMappings(Config.SourceJsonsPl, Mappings.TranslatedTypeToMappingDictonary);

            ConsoleKeyInfo input;
            do
            {
                Console.WriteLine($"Generuję json dla oryginałów");
                PackageUpdater.ExtractJsonsToFilesAndCorrectIds(Config.PacksPath);
                Console.WriteLine($"Generuję json dla tłumaczeń");
                PackageUpdater.ExtractJsonsToFilesAndCorrectIds(Config.TranslationsPath);

                Console.WriteLine(
                    @"
                  Wciśnij 1. aby zmodyfikować pliki .db na podstawie plików json.
                  Wciśnij 2. aby wygenerować pliki .json do tłumaczenia babele.
                  Wciśnij 3. aby zwalidować i zaktualizować pliki źródłowe EN.
                  Wciśnij 4. aby zwalidować i zaktualizować mapowania PL.
                  "
    );
                input = Console.ReadKey();
                Console.WriteLine();
                if (input.KeyChar == '1')
                {
                    PackageUpdater.TransformPackagesBasedOnTranslationFile(Config.PacksPath, Config.TranslationsPath);
                }
                else if (input.KeyChar == '2')
                {
                    PackageUpdater.GenerateBabeleJsonFiles(Config.PacksPath, Config.SourceJsonsPl, Config.BabeleLocation);
                }
                else if (input.KeyChar == '3')
                {
                    UpdateJsonMappingFiles(Config.PacksPath, Config.SourceJsonsEn, Mappings.OriginalTypeToMappingDictonary);
                }
                else if (input.KeyChar == '4')
                {
                    UpdateJsonMappingFiles(Config.TranslationsPath, Config.SourceJsonsPl, Mappings.TranslatedTypeToMappingDictonary);
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

        private static void UpdateJsonMappingFiles(string dbPath, string jsonPath, Dictionary<string, Dictionary<string, BaseEntry>> typeToMappingDirectory)
        {
            var packs = Directory.EnumerateFiles(dbPath, "*.db", SearchOption.AllDirectories).ToList();

            var newTypeToJsonListDic = new Dictionary<string, List<BaseEntry>>();

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
                    var targtetType = GenericReader.GetEntryType(type, typeof(BaseEntry));

                    var name = itemJson.GetValue("name").Value<string>();

                    var sourceCompendium = pack.Replace(dbPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[0];
                    var packName = Path.GetFileNameWithoutExtension(pack);
                    var originalSourceId = itemJson["flags"]["core"]["sourceId"].ToString();
                    var correctSourceId = $"Compendium.{sourceCompendium}.{packName}.{id}";
                    if (originalSourceId != correctSourceId)
                    {
                        Console.WriteLine($"SOMETHING IS WRONG: {originalSourceId} VS: {correctSourceId}");
                        continue;
                    }

                    if (!typeToMappingDirectory.ContainsKey(type))
                    {
                        typeToMappingDirectory[type] = new Dictionary<string, BaseEntry>();
                    }
                    var dic = typeToMappingDirectory[type];
                    if (!dic.ContainsKey(correctSourceId))
                    {
                        //TRY CREATE EMPTY:
                        Console.WriteLine($"Nie odnalazłem wpisu dla: {correctSourceId} - {type} - {name}");
                        var entry = targtetType.GetConstructor(new Type[] { }).Invoke(new object[] { }) as BaseEntry;
                        var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                        if (readerType != null)
                        {
                            var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                            var method = readerType.GetMethod("UpdateEntry");
                            method.Invoke(reader, new object[] { itemJson, entry });

                            dic.Add(entry.OriginFoundryId, entry);
                            if (!newTypeToJsonListDic.ContainsKey(type))
                            {
                                newTypeToJsonListDic[type] = new List<BaseEntry>();
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
                            method.Invoke(reader, new object[] { itemJson, entry });
                            if (!newTypeToJsonListDic.ContainsKey(type))
                            {
                                newTypeToJsonListDic[type] = new List<BaseEntry>();
                            }
                            newTypeToJsonListDic[type].Add(entry);
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
                    var targtetType = GenericReader.GetEntryType(type, typeof(BaseEntry));

                    var name = actorJson.GetValue("name").Value<string>();

                    var sourceCompendium = pack.Replace(dbPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[0];
                    var packName = Path.GetFileNameWithoutExtension(pack);
                    var originalSourceId = actorJson["flags"]["core"]["sourceId"].ToString();
                    var correctSourceId = $"Compendium.{sourceCompendium}.{packName}.{id}";
                    if (originalSourceId != correctSourceId)
                    {
                        Console.WriteLine($"SOMETHING IS WRONG: {originalSourceId} VS: {correctSourceId}");
                        continue;
                    }

                    if (!typeToMappingDirectory.ContainsKey(type))
                    {
                        typeToMappingDirectory[type] = new Dictionary<string, BaseEntry>();
                    }
                    var dic = typeToMappingDirectory[type];
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
                                newTypeToJsonListDic[type] = new List<BaseEntry>();
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
                            method.Invoke(reader, new object[] { actorJson, entry });
                            if (!newTypeToJsonListDic.ContainsKey(type))
                            {
                                newTypeToJsonListDic[type] = new List<BaseEntry>();
                            }
                            newTypeToJsonListDic[type].Add(entry);
                        }
                    }
                }
            }

            foreach (var type in newTypeToJsonListDic.Keys)
            {
                foreach (var newItem in newTypeToJsonListDic[type])
                {
                    var folder = newItem.OriginFoundryId.Split('.')[1];
                    var dictionaryPath = Path.Combine(jsonPath, folder, type);
                    if (!Directory.Exists(dictionaryPath))
                    {
                        Directory.CreateDirectory(dictionaryPath);
                    }

                    var path = jsonPath + "\\" + newItem.OriginFoundryId.Split(".")[1] + "\\" + type;
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    var fileName = string.Join("-", newItem.Name.Split(Path.GetInvalidFileNameChars()));
                    var filePath = Path.Combine(path, $"{newItem.FoundryId}.json");
                    File.WriteAllText(filePath, JsonConvert.SerializeObject(newItem, Formatting.Indented));
                }
            }
        }

        #region Various

        private static void CreateDeeplGlossary()
        {
            var translator = DeepLTranslator.Client;

            var entriesDictionary = new Dictionary<string, string>();
            var props = typeof(Mappings).GetFields(BindingFlags.Public | BindingFlags.Static).ToList();
            foreach (var prop in props)
            {
                var dic = prop.GetValue(null) as Dictionary<string, BaseEntry>;
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
            var effectsObjects = new List<BaseEntry>();
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
                                    effectsObjects.Add(new BaseEntry
                                    {
                                        FoundryId = $"{id}.{type}.{effectId}",
                                        Name = $"{name} - {label}",
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
                    var list = JsonConvert.DeserializeObject<List<BaseEntry>>(File.ReadAllText(file));

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

            var entries = JsonConvert.DeserializeObject<List<BaseEntry>>(File.ReadAllText("Final\\wfrp4e.critical.desc.json"));
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