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

namespace WFRP4e.Translator
{
    internal class Program
    {

        private static void Main(string[] args)
        {
            Config.Configuration = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetParent(AppContext.BaseDirectory).FullName)
                 .AddJsonFile("appsettings.json", false)
                 .Build();

            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", Config.GoogleSigninKeyPath);

            Console.WriteLine(
                $"Konfiguracja:\nŚcieżka do podręcznika: {Config.PdfPath}\nŚcieżka do plików .db: {Config.PacksPath}\nŚcieżka do plików wyjściowych: {Config.TranslationsPath}");
            Console.WriteLine(
                @"
                  Wciśnij 1. aby zmodyfikować pliki .db na podstawie plików json.
                  Wciśnij 2. aby wyciągnąć skrypty efektów z wygenerowanych plików .db
                  Wciśnij 3. aby zmodyfikować skrypty efektów w kompendium i świecie. 
                  Wciśnij 4. aby przetłumaczyć journal entries.
                  Wciśnij 5. aby zwalidować i zaktualizować mapowania. 
                  "
);

            InitAllMappings();

            ExtractJsonsToFiles(Config.PacksPath);
            ExtractJsonsToFiles(Config.TranslationsPath);

            var input = Console.ReadKey();
            Console.WriteLine();
            if (input.KeyChar == '1')
            {
                new TalentsParser().Parse(@"wfrp4e-core\packs\talents.db");
                new SkillsParser().Parse(@"wfrp4e-core\packs\skills.db");
                new CareersParser().Parse(@"wfrp4e-core\packs\careers.db");
                new TraitsParser().Parse(@"wfrp4e-core\packs\traits.db");
                new CriticalsParser().Parse(@"wfrp4e-core\packs\criticals.db");
                new InjuriesParser().Parse(@"wfrp4e-core\packs\injuries.db");
                new MutationsParser().Parse(@"wfrp4e-core\packs\mutations.db");
                new MutationsParser().Parse(@"wfrp4e-eis\packs\expandedmutations.db");
                new PrayersParser().Parse(@"wfrp4e-core\packs\prayers.db");
                new PsychologiesParser().Parse(@"wfrp4e-core\packs\psychologies.db");
                new SpellsParser().Parse(@"wfrp4e-core\packs\spells.db");
                new SpellsParser().Parse(@"wfrp4e-eis\packs\eisspells.db");
                new TrappingsParser().Parse(@"wfrp4e-core\packs\trappings.db");
                new DiseasesParser().Parse(@"wfrp4e-core\packs\diseases.db");
                new CreatureParser().Parse(@"wfrp4e-core\packs\bestiary.db");
                new MixedCompendiumParser().Parse(@"wfrp4e-eis\packs\eisitems.db");
                new MixedCompendiumParser().Parse(@"wfrp4e-horned-rat\packs\horned-rat-items.db");
                new CreatureParser().Parse(@"wfrp4e-eis\packs\eisactors.db");
                new CreatureParser().Parse(@"wfrp4e-horned-rat\packs\horned-rat-actors.db");
                new RollTableParser().Parse(@"wfrp4e-eis\packs\tables.db");
                new RollTableParser().Parse(@"wfrp4e-core\packs\tables.db");
                new RollTableParser().Parse(@"wfrp4e-horned-rat\packs\horned-rat-tables.db");
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

                EffectsExtractor.ExtractEffects(@"wfrp4e-horned-rat\packs\horned-rat-items.db");

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


                //EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\bestiary.db", true);
                //                EffectsUpdater.EffectsUpdate("items.db");
                //                EffectsUpdater.EffectsUpdate("actors.db", true);
            }
            else if (input.KeyChar == '4')
            {
                new JournalParser().Parse(@"wfrp4e-eis\packs\eisjournals.db");
            }
            else if(input.KeyChar == '5')
            {
                UpdateJsonMappingFiles(Config.PacksPath, Config.TranslationsPath, Config.TranslationsPath + "\\wfrp4e-jsons");
            }
            Console.WriteLine("Zakończono");
        }

        private static void UpdateJsonMappingFiles(string packsPath, string translationsPath, string mappingJsons)
        {
            //  var packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            var packs = Directory.EnumerateFiles(translationsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var jsons = File.ReadAllLines(pack);
                foreach (var jsonString in jsons)
                {
                    var obj = JObject.Parse(jsonString);
                    var id = obj.GetValue("_id").Value<string>();
                    var type = GetTypeFromJson(obj);
                    var targtetType = GetEntryType(type, typeof(Entry));

                    var name = obj.GetValue("name").Value<string>();
                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TypeToMappingDictonary[type];
                        if (dic.ContainsKey(id))
                        {
                            var readerType = GetEntryType(type, typeof(GenericReader));
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

            packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach (var pack in packs)
            {
                var jsons = File.ReadAllLines(pack);
                foreach (var jsonString in jsons)
                {
                    var obj = JObject.Parse(jsonString);
                    var id = obj.GetValue("_id").Value<string>();
                    var type = GetTypeFromJson(obj);
                    var targtetType = GetEntryType(type, typeof(Entry));

                    var name = obj.GetValue("name").Value<string>();
                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dic = Mappings.TypeToMappingDictonary[type];
                        if (!dic.ContainsKey(id))
                        {
                            Console.WriteLine($"Nie odnalazłem wpisu dla: {id} - {type} - {name}");
                            var entry = targtetType.GetConstructor(new Type[] { }).Invoke(new object[] { }) as Entry;
                            var readerType = GetEntryType(type, typeof(GenericReader));
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
                            var readerType = GetEntryType(type, typeof(GenericReader));
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
            var packs = Directory.EnumerateFiles(packsPath, "*.db", SearchOption.AllDirectories).ToList();
            foreach(var pack in packs)
            {
                var jsons = File.ReadAllLines(pack);
                foreach (var jsonString in jsons)
                {
                    var obj = JObject.Parse(jsonString);
                    var id = obj.GetValue("_id").Value<string>();
                    obj.Remove("_stats");
                    if (!Directory.Exists(Path.GetDirectoryName(pack) + "\\jsons\\" + Path.GetFileNameWithoutExtension(pack)))
                    {
                        Directory.CreateDirectory(Path.GetDirectoryName(pack) + "\\jsons\\" + Path.GetFileNameWithoutExtension(pack));
                    }
                    var targetPath = Path.GetDirectoryName(pack) + "\\jsons\\" + Path.GetFileNameWithoutExtension(pack) + "\\" + id + ".json";
                    File.WriteAllText(targetPath, JsonConvert.SerializeObject(obj, Formatting.Indented));
                }
            }
        }

        private static void InitAllMappings()
        {
            var listOfJsons = Directory.EnumerateFiles(Config.TranslationsPath + "\\wfrp4e-jsons", "*desc.json", SearchOption.TopDirectoryOnly).ToList();
            foreach (var json in listOfJsons)
            {
                var dictionary = GetDictionaryFromFileName(json);
                var type = GetTypeFromJson(json);
                var targtetTypeList = typeof(List<>).MakeGenericType(GetEntryType(type, typeof(Entry)));

                var elements = JsonConvert.DeserializeObject(File.ReadAllText(json), targtetTypeList) as IList;
                foreach(Entry element in elements)
                {
                    dictionary.Add(element.FoundryId, element);
                }
            }
        }

        private static Type GetEntryType(string foundryType, Type baseType)
        {
            var types = typeof(Entry).Assembly.GetTypes().Where(x => x.CustomAttributes.Any(x => x.AttributeType == typeof(FoundryTypeAttribute)) && x.IsAssignableTo(baseType)).ToList();
            var type = types.FirstOrDefault(x => x.GetCustomAttribute<FoundryTypeAttribute>().Type == foundryType);
            return type;
        }

        private static string GetTypeFromJson(string json)
        {
            return json.Split("wfrp4e.")[1].Replace(".desc.json", "");
        }

        private static Dictionary<string, Entry> GetDictionaryFromFileName(string json)
        {
            var type = GetTypeFromJson(json);
            if (!Mappings.TypeToMappingDictonary.ContainsKey(type))
            {
                Mappings.TypeToMappingDictonary.Add(type, new Dictionary<string, Entry>());
            }
            return Mappings.TypeToMappingDictonary[type];
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

        private static string GetTypeFromJson(JObject packObject)
        {
            var type = "unknown";
            if (packObject["type"] != null)
            {
                type = packObject["type"].Value<string>();
            }
            else if (packObject["pages"] != null)
            {
                type = "journal";
            }
            else if (packObject["thumb"] != null)
            {
                type = "scene";
            }
            else if (packObject["results"] != null)
            {
                type = "table";
            }
            return type;
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
                        var type = GetTypeFromJson(packObject);
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


        private static void Wfrp08Update()
        {
            var file = File.ReadAllLines(@"C:\Users\ja\AppData\Local\FoundryVTT\Data\worlds\wfrp4\packs\oko-za-oko-aktorzy.db");
            var data = new List<JObject>();
            foreach (var line in file)
            {
                var actor = JObject.Parse(line);
                data.Add(actor);
                foreach (var item in (JArray)actor["items"])
                {
                    if (item["type"].Value<string>() == "weapon" || item["type"].Value<string>() == "armour" || item["type"].Value<string>() == "ammunition")
                    {
                        if (item["system"]["qualities"] != null && item["system"]["qualities"]["value"] != null)
                        {
                            var quals = item["system"]["qualities"]["value"].Value<string>().Split(',').Select(x => x.Trim()).ToList();
                            var qualsArr = new JArray();

                            foreach (var qual in quals)
                            {
                                if (!string.IsNullOrEmpty(qual))
                                {
                                    var jQual = new JObject();
                                    jQual["key"] = TrappingsParser.TranslateQualityFlawReverse(qual.Split(' ')[0]).ToLower();
                                    jQual["name"] = TrappingsParser.TranslateQualityFlawReverse(qual.Split(' ')[0]).ToLower();
                                    jQual["display"] = qual.Split(' ')[0];
                                    jQual["value"] = qual.Contains(' ') ? qual.Split(' ')[1] : "";
                                    qualsArr.Add(jQual);
                                }
                            }
                            item["system"]["qualities"]["value"] = qualsArr;
                        }
                        if (item["system"]["flaws"] != null && item["system"]["flaws"]["value"] != null)
                        {
                            var flaws = item["system"]["flaws"]["value"].Value<string>().Split(',').Select(x => x.Trim()).ToList();
                            var flawsArr = new JArray();
                            foreach (var flaw in flaws)
                            {
                                if (!string.IsNullOrEmpty(flaw))
                                {
                                    var jFlaw = new JObject();
                                    jFlaw["key"] = TrappingsParser.TranslateQualityFlawReverse(flaw.Split(' ')[0]).ToLower();
                                    jFlaw["name"] = TrappingsParser.TranslateQualityFlawReverse(flaw.Split(' ')[0]).ToLower();
                                    jFlaw["display"] = flaw.Split(' ')[0];
                                    jFlaw["value"] = flaw.Contains(' ') ? flaw.Split(' ')[1] : "";
                                    flawsArr.Add(jFlaw);
                                }
                            }

                            item["system"]["flaws"]["value"] = flawsArr;
                        }
                    }
                }
            }
            foreach (var pack in data)
            {
                File.AppendAllLines(@"C:\Users\ja\AppData\Local\FoundryVTT\Data\worlds\wfrp4\packs\oko-za-oko-aktorzy-new.db",
                    new[] { JsonConvert.SerializeObject(pack, Formatting.None) });
            }
        }

        private static void Wfrp08UpdateData()
        {
            var file = File.ReadAllLines(@"C:\Users\ja\AppData\Local\FoundryVTT\Data\worlds\wfrp4\data\actors.db");
            var data = new List<JObject>();
            foreach (var line in file)
            {
                var actor = JObject.Parse(line);
                data.Add(actor);
                foreach (var item in (JArray)actor["items"])
                {
                    if (item["type"].Value<string>() == "weapon" || item["type"].Value<string>() == "armour" || item["type"].Value<string>() == "ammunition")
                    {
                        if (item["system"]["qualities"] != null && item["system"]["qualities"]["value"] != null)
                        {
                            var quals = item["system"]["qualities"]["value"].Value<string>().Split(',').Select(x => x.Trim()).ToList();
                            var qualsArr = new JArray();

                            foreach (var qual in quals)
                            {
                                if (!string.IsNullOrEmpty(qual))
                                {
                                    var jQual = new JObject();
                                    jQual["key"] = TrappingsParser.TranslateQualityFlawReverse(qual.Split(' ')[0]).ToLower();
                                    jQual["name"] = TrappingsParser.TranslateQualityFlawReverse(qual.Split(' ')[0]).ToLower();
                                    jQual["display"] = qual.Split(' ')[0];
                                    jQual["value"] = qual.Contains(' ') ? qual.Split(' ')[1] : "";
                                    qualsArr.Add(jQual);
                                }
                            }
                            item["system"]["qualities"]["value"] = qualsArr;
                        }
                        if (item["system"]["flaws"] != null && item["system"]["flaws"]["value"] != null)
                        {
                            var flaws = item["system"]["flaws"]["value"].Value<string>().Split(',').Select(x => x.Trim()).ToList();
                            var flawsArr = new JArray();
                            foreach (var flaw in flaws)
                            {
                                if (!string.IsNullOrEmpty(flaw))
                                {
                                    var jFlaw = new JObject();
                                    jFlaw["key"] = TrappingsParser.TranslateQualityFlawReverse(flaw.Split(' ')[0]).ToLower();
                                    jFlaw["name"] = TrappingsParser.TranslateQualityFlawReverse(flaw.Split(' ')[0]).ToLower();
                                    jFlaw["display"] = flaw.Split(' ')[0];
                                    jFlaw["value"] = flaw.Contains(' ') ? flaw.Split(' ')[1] : "";
                                    flawsArr.Add(jFlaw);
                                }
                            }

                            item["system"]["flaws"]["value"] = flawsArr;
                        }
                    }
                }
            }
            foreach (var pack in data)
            {
                File.AppendAllLines(@"C:\Users\ja\AppData\Local\FoundryVTT\Data\worlds\wfrp4\data\actors-new.db",
                    new[] { JsonConvert.SerializeObject(pack, Formatting.None) });
            }
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