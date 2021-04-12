using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Pdf.Json;

namespace Pdf.Logic
{
    public class CareersParser
    {
        public void Parse()
        {
            var careers = JsonConvert.DeserializeObject<List<Mapping>>(File.ReadAllText(@"Mappings\wfrp4e.careers.json"));
            var talents = JsonConvert.DeserializeObject<List<Mapping>>(File.ReadAllText(@"Mappings\wfrp4e.talents.json"));
            var skills = JsonConvert.DeserializeObject<List<Mapping>>(File.ReadAllText(@"Mappings\wfrp4e.skills.json"));

            Console.WriteLine($@"Przetwarzam Profesje, znaleziono {careers.Count} wpisów w json");
            var packs = File.ReadAllLines(Path.Combine(Program.Configuration.GetSection("PacksPath").Value, "careers.db"));
            var packsCareers = packs.Select(pack => JObject.Parse(pack)).ToList();
            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {packsCareers.Count} wpisów w db");

            foreach (var pack in packsCareers)
            {
                var name = pack.Value<string>("name");
                var polishCareer = careers.FirstOrDefault(x => x.Id == name);
                if (polishCareer == null)
                {
                    Console.WriteLine($"NIE ODNALEZIONO: {name}");
                }
                else
                {
                    Console.WriteLine($"Profesję {name.PadRight(30)} tłumaczę na: {polishCareer.Name}");

                    var careerGroup = pack["data"]["careergroup"]["value"].ToString();

                    var transCareerGroup = careers.FirstOrDefault(x => x.Id == careerGroup);
                    if (transCareerGroup == null)
                    {
                        Console.WriteLine($"NIE ODNALEZIONO CAREER GROUP: {careerGroup}");
                    }
                    else
                    {
                        pack["data"]["careergroup"]["value"] = transCareerGroup.Name;
                        pack["data"]["description"]["value"] = pack["data"]["description"]["value"].ToString().Replace(careerGroup, transCareerGroup.Name);
                    }

                    pack["data"]["class"]["value"] = ReplaceCareer(pack["data"]["class"]["value"].ToString());

                    var transSkills = new List<string>();
                    foreach (var skill in pack["data"]["skills"].Values<string>())
                    {
                        var searchSkill = skill.Trim();
                        if (skill.Contains("(Any)", StringComparison.InvariantCultureIgnoreCase))
                        {
                            searchSkill = searchSkill.Replace("(Any)", "()", StringComparison.InvariantCultureIgnoreCase).Trim();
                        }

                        var transSkill = skills.FirstOrDefault(x => x.Id == searchSkill);
                        if (transSkill != null)
                        {
                            transSkills.Add(transSkill.Name);
                        }
                        else
                        {
                            Console.WriteLine($"NIE ODNALEZIONO UMIEJĘTNOŚCI: {skill}");
                        }
                    }

                    ((JArray)pack["data"]["skills"]).RemoveAll();
                    foreach(var skill in transSkills)
                    {
                        ((JArray)pack["data"]["skills"]).Add(skill);
                    }

                    var transTalents = new List<string>();
                    foreach (var talent in pack["data"]["talents"].Values<string>())
                    {
                        var transTalent = talents.FirstOrDefault(x => x.Id == talent.Trim());
                        if (transTalent != null)
                        {
                            transTalents.Add(transTalent.Name);
                        }
                        else
                        {
                            if (talent.Contains("("))
                            {
                                var searchTalent = talent.Substring(0, talent.IndexOf("(") - 1);
                                var searchSpec = talent.Substring(talent.IndexOf("(") + 1,
                                    talent.IndexOf(")") - (talent.IndexOf("(") + 1));

                                transTalent = talents.FirstOrDefault(x => x.Id == searchTalent.Trim());
                                if (transTalent != null)
                                {
                                    transTalents.Add(transTalent.Name + " (" + TranslateTalentSpec(searchSpec) + ")");
                                }
                                else
                                {
                                    Console.WriteLine($"NIE ODNALEZIONO TALENTU: {talent}");
                                }
                            }
                            else
                            {
                                Console.WriteLine($"NIE ODNALEZIONO TALENTU: {talent}");
                            }
                        }
                    }

                    ((JArray)pack["data"]["talents"]).RemoveAll();
                    foreach (var talent in transTalents)
                    {
                        ((JArray)pack["data"]["talents"]).Add(talent);
                    }

                    pack["name"] = polishCareer.Name;
                }
            }


            foreach (var pack in packsCareers.OrderBy(x=>x["name"].ToString()))
            {
                File.AppendAllLines($@"{Program.Configuration.GetSection("OutputPath").Value}\careers.db",
                    new[] {JsonConvert.SerializeObject(pack, Formatting.None)});
            }
        }

        private object TranslateTalentSpec(string searchSpec)
        {
            switch (searchSpec)
            {
                case "Any": return "Dowolny";
                case "any": return "Dowolny";
                case "Sight": return "Wzrok";
                case "Taste or Touch": return "Wzrok lub Dotyk";
                case "Taste": return "Smak";
                case "Any Arcane Lore": return "Dowolny";
                case "Celestial": return "Niebios";
                case "Hedgecraft": return "Guślarstwo";
                case "Witchery": return "Wiedźmy";
                case "Apothecary": return "Aptekarstwo";
                case "Boatbuilder": return "Szkutnictwo";
                case "Engineer": return "Inżynieria";
                case "Explosives": return "Materiały Wybuchowe";
                case "Herbalist": return "Zielarstwo";
                case "Criminals": return "Przestępcy";
                case "Cultists": return "Kultyści";
                case "Guilder": return "Gildia";
                case "Guilders": return "Gildia";
                case "Nobles": return "Szlachta";
                case "Scholar": return "Uczeni";
                case "Scholars": return "Uczeni";
                case "Servants": return "Służący";
                case "Soldiers": return "Żołnierze";
                case "Animals": return "Zwierzęta";
                case "Beastmen": return "Zwierzoludzie";
                case "Bounties": return "Poszukiwani";
                case "Everything": return "Wszystko!";
                case "Heretics": return "Heretycy";
                case "Intruders": return "Intruzi";
                case "Monsters": return "Potwory";
                case "Outlaws": return "Wyjęci spod Prawa";
                case "Rats": return "Szczury";
                case "Riverwardens": return "Strażnicy Rzeczni";
                case "Road Wardens": return "Strażnicy Dróg";
                case "Skaven": return "Skaveni";
                case "Undead": return "Nieumarli";
                case "Watchmen": return "Strażnicy Miejscy";
                case "Witches": return "Wiedźmy";
                case "Wreckers": return "Wraki";
                case "Poisoner": return "Więźniowie";
                case "Disease": return "Choroby";
                case "Poison": return "Trucizny";
                case "Engineering": return "Inżynieria";
                case "Herbs": return "Zioła";
                case "Law": return "Prawo";
                case "Local": return "Lokalne";
                case "local": return "Lokalne";
                case "Medicine": return "Medycyna";
                case "Riverways": return "Rzeki";
                case "Theology": return "Teologia";
                case "Coastal": return "Wybrzeże";
                case "Marshes": return "Mokradła";
                case "Rocky": return "Tereny Skaliste";
                case "Woodlands": return "Tereny Leśne";
                default:
                {
                    Console.WriteLine("NIE ODNALEZIONO: " + searchSpec);
                    return searchSpec;
                }
            }
        }

        private string ReplaceCareer(string className)
        {
            switch (className)
            {
                case "Academic": return "Uczony";
                case "Academics": return "Uczony";
                case "Burgher": return "Mieszczanin";
                case "Courtier": return "Dworzanin";
                case "Peasant": return "Pospólstwo";
                case "Peasants": return "Pospólstwo";
                case "Ranger": return "Wędrowiec";
                case "Riverfolk": return "Wodniak";
                case "Rogue": return "Łotr";
                case "Rogues": return "Łotr";
                case "Warrior": return "Wojownik";
                default:
                {
                    Console.WriteLine("NIE ODNALEZIONO KLASY: " + className);
                    return className;
                }
            }
        }
    }
}
