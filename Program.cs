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
                  Wciśnij 4. aby przetłumaczyć journal entries."
);

            InitAllMappings();
            CreateDeeplGlossary();

            var input = Console.ReadKey();
            Console.WriteLine();
            if (input.KeyChar == '1')
            {
                new RollTableParser().Parse(@"wfrp4e-core\packs\tables.db");
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
                new BestiaryParser().Parse(@"wfrp4e-core\packs\bestiary.db");
                new MixedCompendiumParser().Parse(@"wfrp4e-eis\packs\eisitems.db");
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
                EffectsUpdater.EffectsUpdate(@"wfrp4e-eis\packs\eisspells.db");
                EffectsUpdater.EffectsUpdate(@"wfrp4e-eis\packs\expandedmutations.db");
                //EffectsUpdater.EffectsUpdate(@"wfrp4e-core\packs\bestiary.db", true);
                //                EffectsUpdater.EffectsUpdate("items.db");
                //                EffectsUpdater.EffectsUpdate("actors.db", true);
            }
            else if (input.KeyChar == '5')
            {
                new JournalParser().Parse();
            }
            else if (input.KeyChar == '6')
            {
                new ForiensArmouryParser().Parse();
            }
            Console.WriteLine("Zakończono");
        }

        private static void InitAllMappings()
        {
            var packs = Directory.EnumerateFiles(Config.PacksPath, "*.db", SearchOption.AllDirectories).ToList();
            var listOfJsons = Directory.EnumerateFiles(Config.TranslationsPath + "\\wfrp4e-jsons", "*desc.json", SearchOption.TopDirectoryOnly).ToList();
            foreach (var json in listOfJsons)
            {
                if (json.Contains("disease"))
                {
                    var descriptions = JsonConvert.DeserializeObject<List<DiseaseEntry>>(File.ReadAllText(json));
                    foreach (var entry in descriptions)
                    {
                        Mappings.Diseases.Add(entry.Id, entry);
                    }
                }
                else if (json.Contains("talent"))
                {
                    var descriptions = JsonConvert.DeserializeObject<List<TalentEntry>>(File.ReadAllText(json));
                    foreach (var entry in descriptions)
                    {
                        Mappings.Talents.Add(entry.Id, entry);
                    }
                }
                else
                {
                    var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(json));
                    var dictionary = GetDictionaryFromFileName(json);
                    foreach (var entry in descriptions)
                    {
                        dictionary.Add(entry.Id, entry);
                    }                    
                }
            }
            Mappings.Init();
        }

        private static Dictionary<string, Entry> GetDictionaryFromFileName(string json)
        {
            var prop = typeof(Mappings).GetFields(BindingFlags.Public | BindingFlags.Static).FirstOrDefault(x => json.ToLower().Contains(x.Name.ToLower()));
            return (Dictionary<string, Entry>)prop.GetValue(null);
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
            else if (packObject["content"] != null)
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
                                        Id = $"{name} - {label}",
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

        private static void UpdateMappings()
        {
            var packs = Directory.EnumerateFiles(Config.PacksPath, "*.db", SearchOption.AllDirectories).ToList();
            var listOfJsons = Directory.EnumerateFiles(Config.TranslationsPath + "\\wfrp4e-jsons", "*desc.json", SearchOption.TopDirectoryOnly).ToList();
            var skillsMapping = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Config.TranslationsPath + "\\wfrp4e-jsons\\wfrp4e.skills.mapping.json"));

            foreach (var pack in packs)
            {
                var lines = File.ReadAllLines(pack);
                foreach (var line in lines)
                {
                    var packObject = JObject.Parse(line);
                    var type = GetTypeFromJson(packObject);
                    var name = packObject["name"].Value<string>(); 
                    var id = packObject["_id"].Value<string>();
                    if (Mappings.TypeToMappingDictonary.ContainsKey(type))
                    {
                        var dictionaries = Mappings.TypeToMappingDictonary[type];
                        var dic = dictionaries.FirstOrDefault(dic => dic.ContainsKey(name));
                        if (dic != null)
                        {
                            dic[name].FoundryId = id;
                        }
                        else if(type == "skill")
                        {
                            var skill = dictionaries[0].Keys.FirstOrDefault(x => x == name.Split("(")[0].Trim());
                            if(skill != null)
                            {
                                var mapping = skillsMapping.FirstOrDefault(x => x.Id == name);
                                if(mapping != null)
                                {
                                    dictionaries[0].Add(name, new Entry
                                    {
                                        Id = name,
                                        Name = mapping.Name,
                                        FoundryId = id,
                                        Description = dictionaries[0][skill].Description
                                    });
                                }
                                else
                                {
                                    Console.WriteLine($"Couldn't find object {name} of type: {type}");
                                }
                            }
                            else
                            {
                                Console.WriteLine($"Couldn't find object {name} of type: {type}");
                            }
                        }
                        else 
                        {
                            Console.WriteLine($"Couldn't find object {name} of type: {type}");
                        }
                    }
                    else 
                    {
                        Console.WriteLine($"Couldn't find object {name} of type: {type}");                        
                    }
                }
            }
            foreach (var json in listOfJsons)
            {
                var dic = GetDictionaryFromFileName(json);
                File.WriteAllText(json, JsonConvert.SerializeObject(dic.Values, Formatting.Indented));
            }
        }

        private static void ExtractMappings()
        {
            var packs = Directory.EnumerateFiles(Config.PacksPath, "*.db", SearchOption.AllDirectories).ToList();
            var actors = packs.First(x => x.Contains("eisactors.db"));
            var actorLines = File.ReadAllLines(actors);
            foreach (var actor in actorLines)
            {
                var actorJson = JObject.Parse(actor);
                var name = actorJson["name"].Value<string>();
                var id = actorJson["_id"].Value<string>();
                var desc = string.Empty;
                if (actorJson["data"]["details"]["biography"] != null)
                {
                    desc = actorJson["data"]["details"]["biography"]["value"].Value<string>();
                }
                else if (actorJson["data"]["details"]["description"] != null)
                {
                    desc = actorJson["data"]["details"]["description"]["value"].Value<string>();
                }
                Mappings.EiSactors.Add(name, new Entry { Id = name, Name = name, FoundryId = id, Description = desc });
            }
            File.WriteAllText(Path.Combine(Config.TranslationsPath, "wfrp4e-jsons", "wfrp4e.eisactors.desc.json"), JsonConvert.SerializeObject(Mappings.EiSactors.Values, Formatting.Indented));



            var spells = packs.First(x => x.Contains("eisspells.db"));
            var spellLines = File.ReadAllLines(spells);
            foreach(var spell in spellLines)
            {
                var spellJson = JObject.Parse(spell);
                var name = spellJson["name"].Value<string>();
                var id = spellJson["_id"].Value<string>();
                var desc = spellJson["data"]["description"]["value"].Value<string>();
                Mappings.Spells.Add(name, new Entry { Id = name, Name = name, FoundryId = id, Description = desc });

            }
            File.WriteAllText(Path.Combine(Config.TranslationsPath, "wfrp4e-jsons", "wfrp4e.spells.desc.json"), JsonConvert.SerializeObject(Mappings.Spells.Values, Formatting.Indented));

            var mutations = packs.First(x => x.Contains("expandedmutations.db"));
            var mutationLines = File.ReadAllLines(mutations);
            foreach (var mutation in mutationLines)
            {
                var mutationJson = JObject.Parse(mutation);
                var name = mutationJson["name"].Value<string>();
                var id = mutationJson["_id"].Value<string>();
                var desc = mutationJson["data"]["description"]["value"].Value<string>();
                if (Mappings.Mutations.ContainsKey(name))
                {
                    Console.WriteLine("Already exists: " + name);
                }
                else
                {
                    Mappings.Mutations.Add(name, new Entry { Id = name, Name = name, FoundryId = id, Description = desc });
                }
            }
            File.WriteAllText(Path.Combine(Config.TranslationsPath, "wfrp4e-jsons", "wfrp4e.mutations.desc.json"), JsonConvert.SerializeObject(Mappings.Mutations.Values, Formatting.Indented));

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

            var entries = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText("Final\\wfrp4e.criticals.desc.json"));
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
            File.WriteAllText("Final\\wfrp4e.criticals.desc.json", text);
        }


        private static void ValidationMethod()
        {
            foreach (var file in Directory.GetFiles("Mappings"))
            {
                if (file.Contains("wfrp4e") && file.Contains("json"))
                {
                    var list = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(file));

                    if (File.Exists("Final\\" + file.Split('\\').Last().Replace(".json", ".desc.json")))
                    {
                        var entries =
                            JsonConvert.DeserializeObject<List<Entry>>(
                                File.ReadAllText("Final\\" + file.Split('\\').Last().Replace(".json", ".desc.json")));

                        foreach (var entry in entries)
                        {
                            var mapping = list.SingleOrDefault(x => x.Name == entry.Name);
                            if (mapping == null)
                            {
                                Console.WriteLine("Nie odnaleziono: " + entry + " w pliku: " + file);
                            }
                            else
                            {
                                entry.Id = mapping.Id;
                            }
                        }

                        var text = JsonConvert.SerializeObject(entries, Formatting.Indented);
                        File.WriteAllText("Final\\" + file.Split('\\').Last().Replace(".json", ".desc.json"), text);
                    }
                }
            }
        }

        #endregion
    }
}