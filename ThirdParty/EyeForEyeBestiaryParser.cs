using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class EyeForEyeBestiaryParser
    {
        //TODO: translate effects in traits and talents + parameters in traits names (like Size (Large)).
        public void Parse()
        {
            var traitsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Config.TranslationsPath + @"\wfrp4e.trait.desc.json"));
            var skillsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Config.TranslationsPath + @"\wfrp4e.skill.desc.json"));
            var talentsDesc = JsonConvert.DeserializeObject<List<Entry>>(File.ReadAllText(Config.TranslationsPath + @"\wfrp4e.talent.desc.json"));

            var packsTraits = File.ReadAllLines(Path.Combine(Config.TranslationsPath, "traits.db"));
            var traitsDb = packsTraits.Select(pack => JObject.Parse(pack)).ToList();

            var packs = File.ReadAllLines(@"C:\Code\WFRP\wfrp4e-eye-for-eye\packs\eye-for-an-eye-actors.db");
            var packsBestiary = packs.Select(pack => JObject.Parse(pack)).ToList();
            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {packsBestiary.Count} wpisów w db");

            foreach (var pack in packsBestiary)
            {
                var name = pack.Value<string>("name");
                Console.WriteLine($"Potwora {name.PadRight(30)} tłumaczę");

                pack["system"]["characteristics"]["ws"]["label"] = "Walka Wręcz";
                pack["system"]["characteristics"]["ws"]["abrev"] = "WW";
                pack["system"]["characteristics"]["bs"]["label"] = "Umiejętności Strzeleckie";
                pack["system"]["characteristics"]["bs"]["abrev"] = "US";
                pack["system"]["characteristics"]["s"]["label"] = "Siła";
                pack["system"]["characteristics"]["s"]["abrev"] = "S";
                pack["system"]["characteristics"]["t"]["label"] = "Wytrzymałość";
                pack["system"]["characteristics"]["t"]["abrev"] = "Wt";
                pack["system"]["characteristics"]["i"]["label"] = "Inicjatywa";
                pack["system"]["characteristics"]["i"]["abrev"] = "I";
                pack["system"]["characteristics"]["ag"]["label"] = "Zwinność";
                pack["system"]["characteristics"]["ag"]["abrev"] = "Zw";
                pack["system"]["characteristics"]["dex"]["label"] = "Zręczność";
                pack["system"]["characteristics"]["dex"]["abrev"] = "Zr";
                pack["system"]["characteristics"]["int"]["label"] = "Inteligencja";
                pack["system"]["characteristics"]["int"]["abrev"] = "Int";
                pack["system"]["characteristics"]["wp"]["label"] = "Siła Woli";
                pack["system"]["characteristics"]["wp"]["abrev"] = "SW";
                pack["system"]["characteristics"]["fel"]["label"] = "Ogłada";
                pack["system"]["characteristics"]["fel"]["abrev"] = "Ogd";

                foreach (var item in (JArray)pack["items"])
                {
                    if (item["type"].Value<string>() == "trait")
                    {
                        var searchTrait = item["name"].Value<string>().Trim();
                        var transTrait = traitsDesc.FirstOrDefault(x =>
                            x.OriginalName == searchTrait || searchTrait.StartsWith(x.OriginalName));

                        JObject traitDb = null;
                        if (searchTrait.StartsWith("Ranged"))
                        {
                            var desc = traitsDesc.First(x => x.Name == "Strzelanie (Zasięg)");
                            item["name"] = "Strzelanie" + searchTrait.Replace("Ranged", "");
                            item["system"]["description"]["value"] = desc.Description;
                        }
                        else if (searchTrait.StartsWith("Tongue Attack"))
                        {
                            var desc = traitsDesc.First(x => x.Name == "Atak Językiem (Zasięg)");
                            item["name"] = "Atak Językiem" + searchTrait.Replace("Tongue Attack", "");
                            item["system"]["description"]["value"] = desc.Description;

                            traitDb = traitsDb.First(x => x["name"].ToString().StartsWith("Atak Językiem"));

                        }
                        else
                        {
                            if (transTrait != null)
                            {
                                var desc = traitsDesc.First(x => x.Name == transTrait.Name);
                                item["name"] = desc.Name;
                                item["system"]["description"]["value"] = desc.Description;

                                if (desc.Name.Contains("Macki"))
                                {
                                    traitDb = traitsDb.First(x => x["name"].ToString().Contains("Macki"));
                                }
                                else
                                {
                                    traitDb = traitsDb.First(x =>
                                        x["name"].ToString().StartsWith(desc.Name.Split('(').First().Trim()));
                                }
                                if (!string.IsNullOrEmpty(item["system"]["specification"]?["value"]?.ToString()))
                                {
                                    item["system"]["specification"]["value"] =
                                       TraitsParser.TranslateSpecification(item["system"]["specification"]["value"].ToString());
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
                                    if (itemEffect != null)
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
                        var transSkill = skillsDesc.FirstOrDefault(x => x.OriginalName == searchSkill || searchSkill.StartsWith(x.OriginalName) || x.OriginalName.StartsWith(searchSkill));

                        if (transSkill != null)
                        {
                            var desc = skillsDesc.First(x => x.Name == transSkill.Name || transSkill.Name.StartsWith(x.Name));
                            item["name"] = transSkill.Name;
                            item["system"]["description"]["value"] = desc.Description;
                        }
                        else
                        {
                            Console.WriteLine($"NIE ODNALEZIONO UMIEJĘTNOŚCI: {searchSkill}");
                        }
                    }
                    else if (item["type"].Value<string>() == "talent")
                    {
                        var searchTalent = item["name"].Value<string>().Trim();
                        var transTalent = talentsDesc.FirstOrDefault(x => x.OriginalName == searchTalent || searchTalent.StartsWith(x.OriginalName) || x.OriginalName.StartsWith(searchTalent));

                        if (transTalent != null)
                        {
                            var desc = talentsDesc.First(x => x.Name == transTalent.Name || transTalent.Name.StartsWith(x.Name));
                            item["name"] = transTalent.Name;
                            item["system"]["description"]["value"] = desc.Description;
                        }
                        else
                        {
                            Console.WriteLine($"NIE ODNALEZIONO TALENTU: {searchTalent}");
                        }
                    }
                    else
                    {
                        Console.WriteLine($"NIEZNANY PRZEDMIOT: {item["type"]}: {item["name"]}");
                    }
                }
            }

            foreach (var pack in packsBestiary.OrderBy(x => x["name"].ToString()))
            {
                File.AppendAllLines($@"{Config.TranslationsPath}\eye-for-an-eye-actors.db",
                    new[] { JsonConvert.SerializeObject(pack, Formatting.None) });
            }
        }

    }
}