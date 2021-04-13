using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class BestiaryParser
    {
        public void Parse(List<Entry> translations)
        {
            var bestiary = JsonConvert.DeserializeObject<List<Mapping>>(File.ReadAllText(@"Mappings\wfrp4e.bestiary.json"));
            var traitsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Program.Configuration.GetSection("OutputPath").Value + @"\wfrp4e.traits.desc.json"));
            var skillsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Program.Configuration.GetSection("OutputPath").Value  + @"\wfrp4e.skills.desc.json"));
            var talentsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Program.Configuration.GetSection("OutputPath").Value + @"\wfrp4e.talents.desc.json"));
            if (File.Exists(@"Mappings\bestiary.db"))
            {
                File.Delete(@"Mappings\bestiary.db");
            }
            Console.WriteLine($@"Przetwarzam Bestiariusz, znaleziono {bestiary.Count} wpisów w json");
            var packs = File.ReadAllLines(Path.Combine(Program.Configuration.GetSection("PacksPath").Value, "bestiary.db"));
            var packsBestiary = packs.Select(pack => JObject.Parse(pack)).ToList();
            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {packsBestiary.Count} wpisów w db");

            foreach (var pack in packsBestiary)
            {
                var name = pack.Value<string>("name");
                var polishMonster = bestiary.FirstOrDefault(x => x.Id == name);
                if (polishMonster == null)
                {
                    Console.WriteLine($"NIE ODNALEZIONO: {name}");
                }
                else
                {
                    Console.WriteLine($"Potwora {name.PadRight(30)} tłumaczę na: {polishMonster.Name}");

                    var trans = translations.FirstOrDefault(x => x.Name == polishMonster.Name);
                    //there is no description!
                    //pack["data"]["description"]["value"] = trans.Description;
                    pack["name"] = trans.Name;

                    foreach (var item in (JArray) pack["items"])
                    {
                        if (item["type"].Value<string>() == "trait")
                        {
                            var searchTrait = item["name"].Value<string>().Trim();
                            var transTrait = traitsDesc.FirstOrDefault(x =>
                                x.Id == searchTrait || searchTrait.StartsWith(x.Id));

                            if (searchTrait.StartsWith("Ranged"))
                            {
                                var desc = traitsDesc.First(x => x.Name == "Strzelanie (Zasięg)");
                                item["name"] = "Strzelanie" + searchTrait.Replace("Ranged", "");
                                item["data"]["description"]["value"] = desc.Description;
                            }
                            else if (searchTrait.StartsWith("Tongue Attack"))
                            {
                                var desc = traitsDesc.First(x => x.Name == "Atak Językiem (Zasięg)");
                                item["name"] = "Atak Językiem" + searchTrait.Replace("Tongue Attack", "");
                                item["data"]["description"]["value"] = desc.Description;
                            }
                            else
                            {
                                if (transTrait != null)
                                {
                                    var desc = traitsDesc.First(x => x.Name == transTrait.Name);
                                    item["name"] = desc.Name;
                                    item["data"]["description"]["value"] = desc.Description;
                                }
                                else
                                {
                                    Console.WriteLine($"NIE ODNALEZIONO CECHY: {searchTrait}");
                                }
                            }
                        }
                        else if (item["type"].Value<string>() == "skill")
                        {
                            var searchSkill = item["name"].Value<string>().Trim();
                            var transSkill = skillsDesc.FirstOrDefault(x => x.Id == searchSkill || searchSkill.StartsWith(x.Id) || x.Id.StartsWith(searchSkill));
                            
                            if (transSkill != null)
                            {
                                var desc = skillsDesc.First(x => x.Name == transSkill.Name || transSkill.Name.StartsWith(x.Name));
                                item["name"] = transSkill.Name;
                                item["data"]["description"]["value"] = desc.Description;
                            }
                            else
                            {
                                Console.WriteLine($"NIE ODNALEZIONO UMIEJĘTNOŚCI: {searchSkill}");
                            }
                        }
                        else if (item["type"].Value<string>() == "talent")
                        {
                            var searchTalent = item["name"].Value<string>().Trim();
                            var transTalent = talentsDesc.FirstOrDefault(x => x.Id == searchTalent || searchTalent.StartsWith(x.Id) || x.Id.StartsWith(searchTalent));

                            if (transTalent != null)
                            {
                                var desc = talentsDesc.First(x => x.Name == transTalent.Name || transTalent.Name.StartsWith(x.Name));
                                item["name"] = transTalent.Name;
                                item["data"]["description"]["value"] = desc.Description;
                            }
                            else
                            {
                                Console.WriteLine($"NIE ODNALEZIONO UMIEJĘTNOŚCI: {transTalent}");
                            }
                        }
                        else
                        {
                            Console.WriteLine($"NIEZNANY PRZEDMIOT: {item["type"]}: {item["name"]}");
                        }
                    }
                }
            }


            foreach (var pack in packsBestiary.OrderBy(x=>x["name"].ToString()))
            {
                File.AppendAllLines($@"{Program.Configuration.GetSection("OutputPath").Value}\bestiary.db",
                    new[] {JsonConvert.SerializeObject(pack, Formatting.None)});
            }
        }
        
    }
}
