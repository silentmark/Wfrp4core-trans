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
using WFRP4e.Translator.Scanners;
using WFRP4e.Translator.Effects;
using System.Reflection;
using DeepL;
using System.Collections;
using WFRP4e.Translator.Json.Entries;
using System.Text;

namespace WFRP4e.Translator
{
    internal class Program
    {
        private static  Random random = new Random();
        
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        private static void Main(string[] args)
        {
            Config.Configuration = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetParent(AppContext.BaseDirectory).FullName)
                 .AddJsonFile("appsettings.json", false)
                 .Build();

            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", Config.GoogleSigninKeyPath);

            Console.WriteLine(
                        $"Konfiguracja:\nŚcieżka do podręcznika: {Config.PdfPath}\nŚcieżka do plików .db: {Config.PacksPath}\nŚcieżka do plików wyjściowych: {Config.TranslationsPath}");
            Console.WriteLine($"Ogarniam mapowanie");


            InitAllMappings();
            Console.WriteLine($"Generuję json dla oryginałów");
            ExtractJsonsToFiles(Config.PacksPath);
            Console.WriteLine($"Generuję json dla tłumaczeń");
            ExtractJsonsToFiles(Config.TranslationsPath);

            Console.WriteLine(
                @"
                  Wciśnij 1. aby zmodyfikować pliki .db na podstawie plików json.
                  Wciśnij 2. aby wyciągnąć skrypty efektów z wygenerowanych plików .db
                  Wciśnij 3. aby zmodyfikować skrypty efektów w kompendium i świecie. 
                  Wciśnij 4. aby przetłumaczyć journal entries.
                  Wciśnij 5. aby zwalidować i zaktualizować mapowania. 
                  "
);
            var input = Console.ReadKey();
            Console.WriteLine();
            if (input.KeyChar == '1')
            {
                TransformPackages(Config.PacksPath, Config.TranslationsPath, Config.TranslationsPath + "\\wfrp4e-jsons");
            }
            else if (input.KeyChar == '2')
            {
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\skills.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\talents.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\diseases.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\spells.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\trappings.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\careers.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\criticals.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\injuries.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\mutations.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\prayers.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\psychologies.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-core\packs\traits.db");


                EffectsExtractor.ExtractEffects(@"wfrp4e-eis\packs\expandedmutations.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-eis\packs\eisspells.db");
                EffectsExtractor.ExtractEffects(@"wfrp4e-eis\packs\eisitems.db");
            }
            else if (input.KeyChar == '3')
            {
                EffectsUpdater.BuildEffectsDictionary();
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\talents.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\diseases.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\spells.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\trappings.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\criticals.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\injuries.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\mutations.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\prayers.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\psychologies.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\traits.db");

                EffectsUpdater.EffectsUpdate(@"wfrp4e-horned-rat\packs\horned-rat-items.db");

                EffectsUpdater.EffectsUpdate(@"wfrp4e-eis\packs\eisspells.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-eis\packs\expandedmutations.db");
            }
            else if (input.KeyChar == '4')
            {
                new JournalAutoTranslator().Parse(@"wfrp4e-eis\packs\eisjournals.db");
            }
            else if (input.KeyChar == '5')
            {
                UpdateJsonMappingFiles(Config.PacksPath, Config.TranslationsPath, Config.TranslationsPath + "\\wfrp4e-jsons");
            }
            Console.WriteLine("Zakończono");
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

        private static void TransformPackages(string packsPath, string translationsPath, string v)
        {
            GenericReader.OriginalPacksProcessing = false;
            var packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            var translationsPaths = Directory.EnumerateFiles(translationsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var translationPath = translationsPaths.FirstOrDefault(x => Path.GetFileName(x) == Path.GetFileName(pack));
                var translations = new List<JObject>();
                if (translationPath != null)
                {
                    var translationJsons = File.ReadAllLines(translationPath);
                    foreach(var json in translationJsons)
                    {
                        translations.Add(JObject.Parse(json));
                    }
                }
                translationPath = pack.Replace(packsPath, translationsPath);

                var jsons = File.ReadAllLines(pack);
                foreach (var jsonString in jsons)
                {
                    var obj = JObject.Parse(jsonString);
                    var id = obj.GetValue("_id").Value<string>();
                    var existingObj = translations.FirstOrDefault(x => x.GetValue("_id").Value<string>() == id);
                    if (existingObj != null)
                    {
                        obj = existingObj;
                    }
                    else
                    {
                        translations.Add(obj);
                    }
                    var type = GenericReader.GetTypeFromJson(obj);
                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TypeToMappingDictonary[type];
                        if (dic.ContainsKey(id))
                        {
                            var entry = dic[id];
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericItemParser));
                            if (readerType != null)
                            {
                                var reader = (GenericItemParser)readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                reader.Parse(obj, entry);
                            }
                        }
                    }
                }

                var content = new StringBuilder();
                foreach (var obj in translations)
                {
                    content.AppendLine(JsonConvert.SerializeObject(obj, Formatting.None));
                }
                File.WriteAllText(translationPath, content.ToString());
            }
        }

        private static void UpdateJsonMappingFiles(string packsPath, string translationsPath, string mappingJsons)
        {
            //var packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            GenericReader.OriginalPacksProcessing = false;
            var packs = Directory.EnumerateFiles(translationsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var jsons = File.ReadAllLines(pack);
                foreach (var jsonString in jsons)
                {
                    var obj = JObject.Parse(jsonString);
                    var id = obj.GetValue("_id").Value<string>();
                    var type = GenericReader.GetTypeFromJson(obj);
                    var targtetType = GenericReader.GetEntryType(type, typeof(Entry));

                    var name = obj.GetValue("name").Value<string>();
                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TypeToMappingDictonary[type];
                        if (dic.ContainsKey(id))
                        {
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                var method = readerType.GetMethod("UpdateEntry");
                                method.Invoke(reader, new object[] { obj, dic[id] });
                            }
                        }
                    }
                }
            }

            //packs = Directory.EnumerateFiles(translationsPath, "*.db", SearchOption.AllDirectories).ToList();
            GenericReader.OriginalPacksProcessing = true;
            packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var jsons = File.ReadAllLines(pack);
                foreach (var jsonString in jsons)
                {
                    var obj = JObject.Parse(jsonString);
                    var id = obj.GetValue("_id").Value<string>();
                    var type = GenericReader.GetTypeFromJson(obj);
                    var targtetType = GenericReader.GetEntryType(type, typeof(Entry));

                    var name = obj.GetValue("name").Value<string>();
                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TypeToMappingDictonary[type];
                        if (!dic.ContainsKey(id))
                        {
                            Console.WriteLine($"Nie odnalazłem wpisu dla: {id} - {type} - {name}");
                            var entry = targtetType.GetConstructor(new Type[] { }).Invoke(new object[] { }) as Entry;
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                var method = readerType.GetMethod("UpdateEntry");
                                method.Invoke(reader, new object[] { obj, entry });
                            }
                            dic.Add(id, entry);
                        }
                        else if (dic[id].Name == dic[id].OriginalName)
                        {
                            var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                            if (readerType != null)
                            {
                                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                                var method = readerType.GetMethod("UpdateEntry");
                                method.Invoke(reader, new object[] { obj, dic[id] });
                            }
                        }
                    }
                }
            }

            foreach (var dic in Mappings.TypeToMappingDictonary)
            {
                foreach (var item in dic.Value.Where(x => string.IsNullOrEmpty(x.Value.OriginalName)).ToList())
                {
                    dic.Value.Remove(item.Key);
                }
            }

            var newTypeToJsonListDic = new Dictionary<string, List<Entry>>();
            foreach (var dic in Mappings.TypeToMappingDictonary)
            {
                foreach (var item in dic.Value.Values)
                {
                    if (!newTypeToJsonListDic.ContainsKey(item.Type))
                    {
                        newTypeToJsonListDic.Add(item.Type, new List<Entry>());
                    }
                    newTypeToJsonListDic[item.Type].Add(item);
                }
            }


            foreach (var list in newTypeToJsonListDic)
            {
                var targetPath = mappingJsons + "\\wfrp4e." + list.Key + ".desc.json";
                var arr = list.Value.OrderBy(x=>x.FoundryId).ToArray();
                File.WriteAllText(targetPath, JsonConvert.SerializeObject(arr, Formatting.Indented));
            }
        }

        private static void ExtractJsonsToFiles(string packsPath)
        {
            var dic = new Dictionary<string, Dictionary<string, JObject>>();
            var packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach(var pack in packs)
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
                    dic[compendiumPrefix][id] = obj;

                    var sourceId = obj["flags"]?["core"]?["sourceId"]?.Value<string>();
                    if (string.IsNullOrEmpty(sourceId) || sourceId.Split(".").Length == 2)
                    {
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
            foreach(var dictionaries in dic)
            {
                foreach (var entry in dictionaries.Value.Where(x => x.Value.Value<string>("type") == "creature"
                || x.Value.Value<string>("type") == "npc"
                || x.Value.Value<string>("type") == "character"))
                {
                    var items = entry.Value.Value<JArray>("items");
                    foreach(var item in items)
                    {
                        var type = item.Value<string>("type");
                        var name = item.Value<string>("name");
                        var sourceId = item["flags"]?["core"]?["sourceId"]?.Value<string>();
                        if (string.IsNullOrEmpty(sourceId) || sourceId.Split(".").Length == 2)
                        {
                            var success = false;
                            foreach (var itemDictionary in dic)
                            {
                                var sourceItem = itemDictionary.Value.Values.FirstOrDefault(x => x.Value<string>("type") == type && x.Value<string>("name") == name);
                                if(sourceItem != null)
                                {
                                    success = true;
                                    sourceId = itemDictionary.Key + "." + sourceItem.Value<string>("_id");
                                    break;
                                }
                            }
                            if (success)
                            {
                                Console.WriteLine("Aktualizuję sourceId dla elementu: " + item.Value<string>("name") + " na " + sourceId);
                                item["flags"]["core"] = new JObject();
                                item["flags"]["core"]["sourceId"] = sourceId;
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
                                }
                            }
                            else
                            {
                                Console.WriteLine("Source Id dla elementu: " + item.Value<string>("name") + " nie może być odnalezione " + existingSourceId);
                            }
                        }
                    }
                }
            }

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


            foreach (var dictionaries in dic)
            {
                var content = new StringBuilder();
                foreach (var entry in dictionaries.Value)
                {
                    var obj = entry.Value;
                    content.AppendLine(JsonConvert.SerializeObject(obj, Formatting.None));

                }
                var parts = dictionaries.Key.Split(".");
                if (!Directory.Exists(packsPath + "\\" + parts[1] + "\\packs\\jsons\\" + parts[2]))
                {
                    Directory.CreateDirectory(packsPath + "\\" + parts[1] + "\\packs\\jsons\\" + parts[2]);
                }
                var targetPath = packsPath + "\\" + parts[1] + "\\packs\\" + parts[2] + ".db";
                File.WriteAllText(targetPath, content.ToString());
            }
        }


        private static void InitAllMappings()
        {
            var listOfDirectories = Directory.GetDirectories(Config.SourceJsons);
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
                    dictionary.Add(element.FoundryId, element);
                }
            }
        }


        private static string GetTypeFromJsonPath(string json)
        {
            var type = Path.GetDirectoryName(json).Replace(Config.SourceJsons, "").Trim('\\');
            return type;
        }

        #region Various

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
            foreach(var glossary in glossaries)
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
                if(packs.Select(x => Path.GetFileName(x)).All(x => x != fileName))
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
                    catch(Exception e)
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

        #endregion
    }
}