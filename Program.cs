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
                $"Konfiguracja:\nŚcieżka do podręcznika: {Config.PdfPath}\nŚcieżka do plików .db: {Config.PacksPath}\nŚcieżka do plików wyjściowych: { Config.TranslationsPath}");
            Console.WriteLine(
                @"
                  Wciśnij 1. aby wygenerować pliki wyjściowe.
                  Wciśnij 2. aby zmodyfikować pliki .db na podstawie wyników z 1.
                  Wciśnij 3. aby wyciągnąć skrypty efektów z wygenerowanych plików .db
                  Wciśnij 4. aby zmodyfikować skrypty efektów w kompendium i świecie. 
                  Wciśnij 5. aby przetłumaczyć journal entries. 
                  Wciśnij 6. aby zmodyfikować Forien's Armoury.");

            InitAllMappings();

            var input = Console.ReadKey();
            Console.WriteLine();
            if (input.KeyChar == '1')
            {
                ScanSkills();
                ScanTalents();
            }
            else if (input.KeyChar == '2')
            {
                ProcessRollTables();
                ProcessTalents();
                ProcessSkills();
                ProcessCareers();
                ProcessTraits();
                ProcessBestiary();
                ProcessCriticals();
                ProcessInjuries();
                ProcessMutations();
                ProcessPrayers();
                ProcessPsychologies();
                ProcessSpells();
                ProcessTrappings();
                ProcessDiseases();
            }
            else if(input.KeyChar == '3')
            {
                EffectsExtractor.ExtractEffects("skills.db");
                EffectsExtractor.ExtractEffects("talents.db");
                EffectsExtractor.ExtractEffects("diseases.db");
                EffectsExtractor.ExtractEffects("spells.db");
                EffectsExtractor.ExtractEffects("trappings.db");
                EffectsExtractor.ExtractEffects("careers.db");
                EffectsExtractor.ExtractEffects("criticals.db");
                EffectsExtractor.ExtractEffects("injuries.db");
                EffectsExtractor.ExtractEffects("mutations.db");
                EffectsExtractor.ExtractEffects("prayers.db");
                EffectsExtractor.ExtractEffects("psychologies.db");
                EffectsExtractor.ExtractEffects("traits.db");
            }
            else if (input.KeyChar == '4')
            {
                EffectsUpdater.BuildEffectsDictionary();
                EffectsUpdater.EffectsUpdate("talents.db");
                EffectsUpdater.EffectsUpdate("diseases.db");
                EffectsUpdater.EffectsUpdate("spells.db");
                EffectsUpdater.EffectsUpdate("trappings.db");
                EffectsUpdater.EffectsUpdate("criticals.db");
                EffectsUpdater.EffectsUpdate("injuries.db");
                EffectsUpdater.EffectsUpdate("mutations.db");
                EffectsUpdater.EffectsUpdate("prayers.db");
                EffectsUpdater.EffectsUpdate("psychologies.db");
                EffectsUpdater.EffectsUpdate("traits.db");
                EffectsUpdater.EffectsUpdate("bestiary.db", true);
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
            var listOfJsons = Directory.EnumerateFiles(Config.TranslationsPath + "\\wfrp4e-jsons", "*.json", SearchOption.TopDirectoryOnly).ToList();
            foreach(var json in listOfJsons)
            {
                if (json.Contains("disease"))
                {
                    var descriptions = JsonConvert.DeserializeObject<List<DiseaseEntry>>(File.ReadAllText(json));
                    foreach(var entry in descriptions)
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
            var prop = typeof(Mappings).GetFields(BindingFlags.Public | BindingFlags.Static).First(x => json.ToLower().Contains(x.Name.ToLower()));
            return (Dictionary<string,Entry>)prop.GetValue(null);
        }

        private static void ScanTalents()
        {
            var scanner = new TalentsScanner();
            var descriptions = scanner.Run(Config.PdfPath);
            var withDescriptionText = JsonConvert.SerializeObject(descriptions, Formatting.Indented);
            File.WriteAllText($@"{Config.TranslationsPath}\wfrp4e.talents.desc.json", withDescriptionText);

            Console.WriteLine(@"Plik: wfrp4e.talents.desc.json z tłumaczeniami został wygenerowany, część wpisów wymaga ręcznej poprawy");

        }

        private static void ScanSkills()
        {
            var scanner = new SkillsScanner();
            var descriptions = scanner.Run(Config.PdfPath);
            var withDescription = JsonConvert.SerializeObject(descriptions, Formatting.Indented);
            File.WriteAllText($@"{Config.TranslationsPath}\wfrp4e.skills.desc.json", withDescription);

            Console.WriteLine(@"Plik: wfrp4e.skills.desc.json z tłumaczeniami został wygenerowany, część wpisów wymaga ręcznej poprawy");
        }

        private static void ProcessRollTables()
        {
            new RollTableParser().Parse();
        }


        private static void ProcessDiseases()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.diseases.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new DiseasesParser();
                var descriptions = JsonConvert.DeserializeObject<List<DiseaseEntry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessSkills()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.skills.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new SkillsParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessTraits()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.traits.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new TraitsParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessTalents()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.talents.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new TalentsParser();
                var descriptions = JsonConvert.DeserializeObject<List<TalentEntry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessCriticals()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.criticals.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new CriticalsParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessTrappings()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.trappings.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new TrappingsParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessMutations()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.mutations.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new MutationsParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessPsychologies()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.psychologies.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new PsychologiesParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }


        private static void ProcessSpells()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.spells.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new SpellsParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessPrayers()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.prayers.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new PrayersParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessInjuries()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.injuries.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new InjuriesParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }


        private static void ProcessBestiary()
        {
            var fileName = $@"{Config.TranslationsPath}\wfrp4e.bestiary.desc.json";
            if (File.Exists(fileName))
            {
                var parser = new BestiaryParser();
                var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(fileName));
                parser.Parse(descriptions);
            }
            else
            {
                Console.WriteLine($"Nie odnaleziono pliku {fileName}");
            }
        }

        private static void ProcessCareers()
        {
            var parser = new CareersParser();
            parser.Parse();
        }

        #region Various

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
                Mappings.EnemyInShadowsActors.Add(name, new Entry { Id = name, Name = name, FoundryId = id, Description = desc });
            }
            File.WriteAllText(Path.Combine(Config.TranslationsPath, "wfrp4e-jsons", "wfrp4e.eisactors.desc.json"), JsonConvert.SerializeObject(Mappings.EnemyInShadowsActors.Values, Formatting.Indented));



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