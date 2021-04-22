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

        //TODO: translate effects in traits and talents + parameters in traits names (like Size (Large)).
        public void Parse(List<Entry> translations)
        {
            var bestiary = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Program.Configuration.GetSection("OutputPath").Value + @"\wfrp4e.bestiary.desc.json"));
            var traitsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Program.Configuration.GetSection("OutputPath").Value + @"\wfrp4e.traits.desc.json"));
            var skillsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Program.Configuration.GetSection("OutputPath").Value  + @"\wfrp4e.skills.desc.json"));
            var talentsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Program.Configuration.GetSection("OutputPath").Value + @"\wfrp4e.talents.desc.json"));

            var packsTraits = File.ReadAllLines(Path.Combine(Program.Configuration.GetSection("OutputPath").Value, "traits.db"));
            var traitsDb = packsTraits.Select(pack => JObject.Parse(pack)).ToList();

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
                    pack["data"]["details"]["biography"]["value"] = trans.Description;
                    pack["name"] = trans.Name;

                    pack["data"]["characteristics"]["ws"]["label"] = "Walka Wręcz";
                    pack["data"]["characteristics"]["ws"]["abrev"] = "WW";
                    pack["data"]["characteristics"]["bs"]["label"] = "Umiejętności Strzeleckie";
                    pack["data"]["characteristics"]["bs"]["abrev"] = "US";
                    pack["data"]["characteristics"]["s"]["label"] = "Siła";
                    pack["data"]["characteristics"]["s"]["abrev"] = "S";
                    pack["data"]["characteristics"]["t"]["label"] = "Wytrzymałość";
                    pack["data"]["characteristics"]["t"]["abrev"] = "Wt";
                    pack["data"]["characteristics"]["i"]["label"] = "Inicjatywa";
                    pack["data"]["characteristics"]["i"]["abrev"] = "I";
                    pack["data"]["characteristics"]["ag"]["label"] = "Zwinność";
                    pack["data"]["characteristics"]["ag"]["abrev"] = "Zw";
                    pack["data"]["characteristics"]["dex"]["label"] = "Zręczność";
                    pack["data"]["characteristics"]["dex"]["abrev"] = "Zr";
                    pack["data"]["characteristics"]["int"]["label"] = "Inteligencja";
                    pack["data"]["characteristics"]["int"]["abrev"] = "Int";
                    pack["data"]["characteristics"]["wp"]["label"] = "Siła Woli";
                    pack["data"]["characteristics"]["wp"]["abrev"] = "SW";
                    pack["data"]["characteristics"]["fel"]["label"] = "Ogłada";
                    pack["data"]["characteristics"]["fel"]["abrev"] = "Ogd";

                    foreach (var item in (JArray) pack["items"])
                    {
                        if (item["type"].Value<string>() == "trait")
                        {
                            var searchTrait = item["name"].Value<string>().Trim();
                            var transTrait = traitsDesc.FirstOrDefault(x =>
                                x.Id == searchTrait || searchTrait.StartsWith(x.Id));

                            JObject traitDb = null;
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

                                traitDb = traitsDb.First(x => x["name"].ToString().StartsWith("Atak Językiem"));

                            }
                            else
                            {
                                if (transTrait != null)
                                {
                                    var desc = traitsDesc.First(x => x.Name == transTrait.Name);
                                    item["name"] = desc.Name;
                                    item["data"]["description"]["value"] = desc.Description;

                                    if (desc.Name.Contains("Macki"))
                                    {
                                        traitDb = traitsDb.First(x => x["name"].ToString().Contains("Macki"));
                                    }
                                    else
                                    {
                                        traitDb = traitsDb.First(x =>
                                            x["name"].ToString().StartsWith(desc.Name.Split('(').First().Trim()));
                                    }
                                    if (!string.IsNullOrEmpty(item["data"]["specification"]?["value"]?.ToString()))
                                    {
                                        item["data"]["specification"]["value"] =
                                           TraitsParser.TranslateSpecification(item["data"]["specification"]["value"].ToString());
                                    }
                                }
                                else
                                {
                                    Console.WriteLine($"NIE ODNALEZIONO CECHY: {searchTrait}");
                                }
                            }

                            if (traitDb != null)
                            {
                                var bestiaryEffects = pack["effects"] as JArray;
                                var itemEffects = item["effects"] as JArray;
                                var traitEffects = traitDb["effects"] as JArray;


                                if (bestiaryEffects != null)
                                {
                                    foreach (JObject effect in bestiaryEffects)
                                    {
                                        var itemEffect = itemEffects.FirstOrDefault(x => x["label"].ToString() == effect["label"].ToString());
                                        if(itemEffect != null)
                                        {
                                            if (itemEffects.Count == 1 && traitEffects != null &&
                                                traitEffects.Count == 1)
                                            {
                                                effect["label"] = traitEffects[0]["label"];
                                            }
                                            else if (effect["label"].ToString() == "Swarm Bonuses")
                                            {
                                                effect["label"] = "Bonusy Roju";
                                            }
                                            else if (effect["label"].ToString() == "Swarm")
                                            {
                                                effect["label"] = "Rój";
                                            }
                                            else 
                                            {
                                                Console.WriteLine("UPS, NIE UMIEM DOPASOWAĆ EFEKTU DLA: " + effect["label"] + " z CECHY: " + traitDb["name"]);
                                            }
                                        }
                                    }
                                }

                                if (itemEffects != null)
                                {
                                    (item["effects"] as JArray)?.Clear();
                                    foreach (var jToken in traitDb["effects"] as JArray)
                                    {
                                        (item["effects"] as JArray).Add(jToken.DeepClone());
                                    }
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
