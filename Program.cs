using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using org.pdfclown.documents.contents.entities;
using Pdf.Json;
using Pdf.Logic;
using Pdf.Tables;

namespace Pdf
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

            ScanSkills();
            ScanTalents();

            new CareersTable().Translate();

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
        }

        private static void ScanTalents()
        {
            var scanner = new TalentsScanner();
            var descriptions = scanner.Run(Configuration.GetSection("PdfPath").Value);
            var withDescription = JsonConvert.SerializeObject(descriptions, Formatting.Indented);
            File.WriteAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.talents.desc.json", withDescription);

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

        private static void ProcessSkills()
        {
            var parser = new SkillsParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.skills.desc.json"));
            parser.Parse(descriptions);
        }

        private static void ProcessTraits()
        {
            var parser = new TraitsParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.traits.desc.json"));
            parser.Parse( descriptions);
        }

        private static void ProcessTalents()
        {
            var parser = new TalentsParser();
            var descriptions = JsonConvert.DeserializeObject<List<TalentEntry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.talents.desc.json"));
            parser.Parse(descriptions);
        }
        private static void ProcessCriticals()
        {
            var parser = new CriticalsParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.criticals.desc.json"));
            parser.Parse(descriptions);
        }

        private static void ProcessTrappings()
        {
            var parser = new TrappingsParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.trappings.desc.json"));
            parser.Parse(descriptions);
        }

        private static void ProcessMutations()
        {
            var parser = new MutationsParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.mutations.desc.json"));
            parser.Parse(descriptions);
        }

        private static void ProcessPsychologies()
        {
            var parser = new PsychologiesParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.psychologies.desc.json"));
            parser.Parse(descriptions);
        }


        private static void ProcessSpells()
        {
            var parser = new SpellsParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.spells.desc.json"));
            parser.Parse(descriptions);
        }

        private static void ProcessPrayers()
        {
            var parser = new PrayersParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.prayers.desc.json"));
            parser.Parse(descriptions);
        }

        private static void ProcessInjuries()
        {
            var parser = new InjuriesParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.injuries.desc.json"));
            parser.Parse(descriptions);
        }


        private static void ProcessBestiary()
        {
            var parser = new BestiaryParser();
            var descriptions = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Configuration.GetSection("OutputPath").Value}\wfrp4e.bestiary.desc.json"));
            parser.Parse(descriptions);
        }

        private static void ProcessCareers()
        {
            var parser = new CareersParser();
            parser.Parse();
        }

        #region Various
        
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