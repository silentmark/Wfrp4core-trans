using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class CareersParser : GenericParser<Entry>
    {
        public override void TranslatePack(JObject pack)
        {
            var careers = Mappings.Careers.Values.ToList();
            var talents = Mappings.Talents.Values.ToList();
            var skills = Mappings.Skills.Values.ToList();

            var skillsMapping = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText($@"{Config.TranslationsPath}\wfrp4e-jsons\wfrp4e.skills.mapping.json"));
            var name = pack.Value<string>("name");
            var polishCareer = GetEntry(pack, careers);
            if (polishCareer != null)
            {
                Console.WriteLine($"Profesję {name.PadRight(30)} tłumaczę na: {polishCareer.Name}");
                if(name == polishCareer.Name)
                {
                    return;
                }

                var careerGroup = pack["system"]["careergroup"]["value"].ToString();

                var transCareerGroup = careers.FirstOrDefault(x => x.Id == careerGroup || x.Name == careerGroup);
                if (transCareerGroup == null)
                {
                    Console.WriteLine($"NIE ODNALEZIONO CAREER GROUP: {careerGroup}");
                }
                else
                {
                    pack["system"]["careergroup"]["value"] = transCareerGroup.Name;
                    pack["system"]["description"]["value"] = pack["system"]["description"]["value"].ToString().Replace(careerGroup, transCareerGroup.Name);
                }

                pack["system"]["class"]["value"] = ReplaceCareer(pack["system"]["class"]["value"].ToString());

                var transSkills = new List<string>();
                foreach (var skill in pack["system"]["skills"].Values<string>())
                {
                    var searchSkill = skill.Trim();
                    if (skill.Contains("(Any)", StringComparison.InvariantCultureIgnoreCase))
                    {
                        searchSkill = searchSkill.Replace("(Any)", "()", StringComparison.InvariantCultureIgnoreCase).Trim();
                    }
                    var skillMapping = skillsMapping.FirstOrDefault(x => x.Id == searchSkill || x.Name == searchSkill);
                    if (skillMapping != null)
                    {
                        transSkills.Add(skillMapping.Name);
                    }
                    else
                    {
                        transSkills.Add(skill);
                        Console.WriteLine($"NIE ODNALEZIONO UMIEJĘTNOŚCI: {skill}");
                    }
                }

                ((JArray)pack["system"]["skills"]).RemoveAll();
                foreach (var skill in transSkills)
                {
                    ((JArray)pack["system"]["skills"]).Add(skill);
                }

                var transTalents = new List<string>();
                foreach (var talent in pack["system"]["talents"].Values<string>())
                {
                    var transTalent = talents.FirstOrDefault(x => x.Id == talent.Trim() || x.Name == talent.Trim());
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

                            transTalent = talents.FirstOrDefault(x => x.Id == searchTalent.Trim() || x.Name == searchTalent.Trim());
                            if (transTalent != null)
                            {
                                transTalents.Add(transTalent.Name + " (" + TranslateTalentSpec(searchSpec) + ")");
                            }
                            else
                            {
                                transTalents.Add(talent);
                                Console.WriteLine($"NIE ODNALEZIONO TALENTU: {talent}");
                            }
                        }
                        else
                        {
                            transTalents.Add(talent);
                            Console.WriteLine($"NIE ODNALEZIONO TALENTU: {talent}");
                        }
                    }
                }

                ((JArray)pack["system"]["talents"]).RemoveAll();
                foreach (var talent in transTalents)
                {
                    ((JArray)pack["system"]["talents"]).Add(talent);
                }

                pack["name"] = polishCareer.Name;
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
