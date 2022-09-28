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
using WFRP4e.Translator.Tables;

namespace WFRP4e.Translator
{
    internal class Program
    {
        public static IConfigurationRoot Configuration;

        private static void Main(string[] args)
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetParent(AppContext.BaseDirectory).FullName)
                .AddJsonFile("appsettings.json", false)
                .Build();

            Console.WriteLine(
                $"Konfiguracja:\nŚcieżka do podręcznika: {Configuration.GetSection("PdfPath").Value}\nŚcieżka do plików .db: {Configuration.GetSection("PacksPath").Value}\nŚcieżka do rolltables (.json): {Configuration.GetSection("TablesPath").Value}\nŚcieżka do plików wyjściowych: {Configuration.GetSection("OutputPath").Value}");
            Console.WriteLine(
                "Wciśnij 1. aby wygenerować pliki wyjściowe.\nWciśnij 2. aby zmodyfikować pliki .db na podstawie wyników z 1.\nWciśnij 3. aby zmodyfikować rolltables na podstawie wyników z 1.\nWciśnij 4. aby zmodyfikować Forien's Armoury.");
            
            var input = Console.ReadKey();
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
                new CareersTable().Translate();
            }
            else if (input.KeyChar == '4')
            {
                new ForiensArmouryParser().Parse();
            }
            Console.WriteLine("Zakończono");
        }

        private static void ScanTalents()
        {
            var scanner = new TalentsScanner();
            var descriptions = scanner.Run(Configuration.GetSection("PdfPath").Value);
            var withDescriptionText = JsonConvert.SerializeObject(descriptions, Formatting.Indented);
            File.WriteAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.talents.desc.json", withDescriptionText);

            Console.WriteLine(@"Plik: wfrp4e.talents.desc.json z tłumaczeniami został wygenerowany, część wpisów wymaga ręcznej poprawy");

        }

        private static void ScanSkills()
        {
            var scanner = new SkillsScanner();
            var descriptions = scanner.Run(Configuration.GetSection("PdfPath").Value);
            var withDescription = JsonConvert.SerializeObject(descriptions, Formatting.Indented);
            File.WriteAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.skills.desc.json", withDescription);

            Console.WriteLine(@"Plik: wfrp4e.skills.desc.json z tłumaczeniami został wygenerowany, część wpisów wymaga ręcznej poprawy");
        }

        private static void ProcessRollTables()
        {
            new RollTableParser().Parse();
        }


        private static void ProcessDiseases()
        {
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.diseases.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.skills.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.traits.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.talents.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.criticals.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.trappings.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.mutations.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.psychologies.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.spells.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.prayers.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.injuries.desc.json";
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
            var fileName = $@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.bestiary.desc.json";
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
                    var list = JsonConvert.DeserializeObject<List<Mapping>>(File.ReadAllText(file));

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