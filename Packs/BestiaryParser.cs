using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class BestiaryParser : GenericParser<Entry>
    {
        public override void TranslatePack(JObject pack)
        {
            var bestiary = Mappings.Bestiary.Values.ToList();
            var traitsDesc = Mappings.Traits.Values.ToList();
            var skillsDesc = Mappings.Skills.Values.ToList();
            var talentsDesc = Mappings.Talents.Values.ToList();
            var trappingsDesc = Mappings.Trappings.Values.ToList();

            var packsTraits = File.ReadAllLines(Path.Combine(Config.TranslationsPath, "wfrp4e-core", "packs", "traits.db")).Select(pack => JObject.Parse(pack)).ToList();
            var packSkills = File.ReadAllLines(Path.Combine(Config.TranslationsPath, "wfrp4e-core", "packs", "skills.db")).Select(pack => JObject.Parse(pack)).ToList();
            var packTalents = File.ReadAllLines(Path.Combine(Config.TranslationsPath, "wfrp4e-core", "packs", "talents.db")).Select(pack => JObject.Parse(pack)).ToList();
            var packTrappings = File.ReadAllLines(Path.Combine(Config.TranslationsPath, "wfrp4e-core", "packs", "trappings.db")).Select(pack => JObject.Parse(pack)).ToList();
            //var packMutations = File.ReadAllLines(Path.Combine(Config.TranslationsPath, "wfrp4e-core", "packs", "mutations.db")).Select(pack => JObject.Parse(pack)).ToList();
            //var packSpells = File.ReadAllLines(Path.Combine(Config.TranslationsPath, "wfrp4e-core", "packs", "spells.db")).Select(pack => JObject.Parse(pack)).ToList();

            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, bestiary);
            if (trans != null) 
            { 
                Console.WriteLine($"Potwora {name.PadRight(30)} tłumaczę na: {trans.Name}");

                pack["system"]["details"]["biography"]["value"] = trans.Description;
                pack["name"] = trans.Name;

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

                var items = ((JArray)pack["items"]);
                List<JToken> list = items.ToList();
                for (int i = 0; i < list.Count; i++)
                {
                    JToken item = list[i];
                    if (item["type"].Value<string>() == "trait")
                    {
                        HandleTraits(pack, traitsDesc, packsTraits, items, i, item);
                    }
                    else if (item["type"].Value<string>() == "skill")
                    {
                        HandleSkills(skillsDesc, packSkills, items, i, item);
                    }
                    else if (item["type"].Value<string>() == "talent")
                    {
                        HandleTalents(pack, talentsDesc, packTalents, items, i, item);
                    }
                    else if (item["type"].Value<string>() == "money")
                    {
                        var money = item["name"].Value<string>().Trim();
                        switch (money)
                        {
                            case "Brass Penny":
                                {
                                    item["name"] = "Brązowy Pens";
                                    break;
                                }
                            case "Silver Shilling":
                                {
                                    item["name"] = "Srebrny Szyling";
                                    break;
                                }
                            case "Gold Crown":
                                {
                                    item["name"] = "Złota Korona";
                                    break;
                                }
                        }
                    }
                    else if (item["type"].Value<string>() == "trapping" ||
                        item["type"].Value<string>() == "weapon" ||
                        item["type"].Value<string>() == "armour" ||
                        item["type"].Value<string>() == "container" ||
                        item["type"].Value<string>() == "ammunition")
                    {
                        HandleTrappings(pack, trappingsDesc, packTrappings, items, i, item);
                    }
                    else
                    {
                        Console.WriteLine($"NIEZNANY PRZEDMIOT: {item["type"]}: {item["name"]}");
                    }
                }
            }
        }

        private void HandleTrappings(JObject actor, List<Entry> trappingsDesc, List<JObject> packTrappings, JArray items, int i, JToken item)
        {
            var transTrapping = GetEntry((JObject)item, trappingsDesc);
            JToken trapping = null;
            JToken clone = null;
            if (transTrapping != null)
            {
                trapping = packTrappings.FirstOrDefault(x => x["_id"].Value<string>() == transTrapping.FoundryId);
                clone = trapping.DeepClone();

                items.RemoveAt(i);
                items.Insert(i, clone);
            }
            if (clone != null && clone["effects"] != null && ((JArray)clone["effects"]).Count > 0)
            {
                var actorEffects = ((JArray)actor["effects"])
                    .Where(x => x["origin"].Value<string>().EndsWith(clone["_id"].Value<string>()))
                    .ToList();
                if (actorEffects.Count == 1)
                {
                    actorEffects[0]["flags"] = clone["effects"][0]["flags"].DeepClone();
                }
                else if (actorEffects.Count == 0 && ((JArray)clone["effects"]).Count == 1)
                {
                    var cloneEffect = (clone["effects"][0]).DeepClone();
                    cloneEffect["origin"] = $"Actor.{actor["_id"]}.Item.{clone["_id"]}";
                    ((JArray)actor["effects"]).Add(cloneEffect);
                }
                else
                {
                }
            }
        }

        private void HandleTalents(JObject actor, List<Entry> talentsDesc, List<JObject> packTalents, JArray items, int i, JToken item)
        {
            var transTalent = GetEntry((JObject)item, talentsDesc);
            JToken talent = null;
            JToken clone = null;
            if (transTalent != null)
            {
                talent = packTalents.FirstOrDefault(x => x["_id"].Value<string>() == transTalent.FoundryId);
                clone = talent.DeepClone();

                items.RemoveAt(i);
                items.Insert(i, clone);
            }

            if (clone != null && clone["effects"] != null && ((JArray)clone["effects"]).Count > 0)
            {
                var actorEffects = ((JArray)actor["effects"])
                    .Where(x => x["origin"].Value<string>().EndsWith(clone["_id"].Value<string>()))
                    .ToList();
                if (actorEffects.Count == 1)
                {
                    actorEffects[0]["flags"] = clone["effects"][0]["flags"].DeepClone();
                }
                else if (actorEffects.Count == 0 && ((JArray)clone["effects"]).Count == 1)
                {
                    var cloneEffect = (clone["effects"][0]).DeepClone();
                    cloneEffect["origin"] = $"Actor.{actor["_id"]}.Item.{clone["_id"]}";
                    ((JArray)actor["effects"]).Add(cloneEffect);
                }
                else
                {                    
                }
            }
        }

        private void HandleSkills(List<Entry> skillsDesc, List<JObject> packSkills, JArray items, int i, JToken item)
        {
            var transSkill = GetEntry((JObject)item, skillsDesc);
            JToken skill = null;
            JToken clone = null;
            if (transSkill != null)
            {
                skill = packSkills.FirstOrDefault(x => x["_id"].Value<string>() == transSkill.FoundryId);
                clone = skill.DeepClone();

                items.RemoveAt(i);
                items.Insert(i, clone);
            }
        }

        private void HandleTraits(JObject actor, List<Entry> traitsDesc, List<JObject> packsTraits, JArray items, int i, JToken item)
        {
            JToken trait = null;
            JToken clone = null;
            var searchTrait = item["name"].Value<string>().Trim();
            var transTrait = GetEntry((JObject)item, traitsDesc);
            if (transTrait != null)
            {
                trait = packsTraits.FirstOrDefault(x => x["_id"].Value<string>() == transTrait.FoundryId);
                if (trait != null)
                {
                    items.RemoveAt(i);
                    clone = trait.DeepClone();
                    clone["_id"] = item["_id"].Value<string>();
                    items.Insert(i, clone);
                }
                else
                {
                    Console.WriteLine($"Nie umiem znaleźć cechy {searchTrait} - {transTrait.Name} - {transTrait.FoundryId}");
                }
            }
            else
            {
                if (searchTrait.StartsWith("Ranged") || searchTrait.StartsWith("Strzelanie"))
                {
                    var desc = traitsDesc.First(x => x.Name == "Strzelanie (Zasięg)");
                    trait = packsTraits.FirstOrDefault(x => x["_id"].Value<string>() == desc.FoundryId);

                    items.RemoveAt(i);
                    clone = trait.DeepClone();
                    clone["_id"] = item["_id"].Value<string>();
                    clone["name"] = $"Strzelanie ({searchTrait.Replace("Ranged (", "").Replace("Strzelanie (", "").Replace(")", "")})";
                    items.Insert(i, clone);
                }
                else if (searchTrait.StartsWith("Tongue Attack") || searchTrait.StartsWith("Atak Językiem"))
                {
                    var desc = traitsDesc.First(x => x.Name == "Atak Językiem (Zasięg)");
                    trait = packsTraits.FirstOrDefault(x => x["_id"].Value<string>() == desc.FoundryId);

                    items.RemoveAt(i);
                    clone = trait.DeepClone();

                    clone["_id"] = item["_id"].Value<string>();
                    clone["name"] = $"Atak Językiem ({searchTrait.Replace("Tongue Attack (", "").Replace("Atak Językiem (", "").Replace(")", "")})";
                    items.Insert(i, clone);
                }
                else if (searchTrait.Contains("Tentacles") || searchTrait.StartsWith("Macki"))
                {
                    trait = packsTraits.First(x => x["name"].ToString().Contains("Macki"));

                    items.RemoveAt(i);
                    clone = trait.DeepClone();
                    clone["_id"] = item["_id"].Value<string>();
                    items.Insert(i, clone);
                    //TODO
                }
            }
            if (!string.IsNullOrEmpty(item["system"]["specification"]?["value"]?.ToString()) && clone != null)
            {
                clone["system"]["specification"]["value"] =
                   TraitsParser.TranslateSpecification(item["system"]["specification"]["value"].ToString());
            }
            if (clone != null && clone["effects"] != null && ((JArray)clone["effects"]).Count > 0)
            {
                var actorEffects = ((JArray)actor["effects"])
                    .Where(x => x["origin"].Value<string>().EndsWith(clone["_id"].Value<string>()))
                    .ToList();
                if(actorEffects.Count == 1)
                {
                    actorEffects[0]["flags"] = clone["effects"][0]["flags"].DeepClone();
                }
                else if(actorEffects.Count == 0 && ((JArray)clone["effects"]).Count == 1)
                {
                    var cloneEffect = (clone["effects"][0]).DeepClone();
                    cloneEffect["origin"] = $"Actor.{actor["_id"]}.Item.{clone["_id"]}";
                    ((JArray)actor["effects"]).Add(cloneEffect);
                }
                else
                {
                    if (clone["name"].Value<string>() == "Rój")
                    {
                        var effect1 = actorEffects.FirstOrDefault(x => ((JArray)x["changes"]).Count > 0);
                        var cloneEffect1 = ((JArray)clone["effects"]).First(x => x["label"].Value<string>() == "Bonusy Roju");
                        if(effect1 == null)
                        {
                            effect1 = cloneEffect1.DeepClone();
                            ((JArray)actor["effects"]).Add(effect1);
                        }
                        effect1["flags"] = cloneEffect1["flags"].DeepClone();
                        effect1["origin"] = $"Actor.{actor["_id"]}.Item.{clone["_id"]}";


                        var effect2 = actorEffects.FirstOrDefault(x => ((JArray)x["changes"]).Count == 0);
                        var cloneEffect2 = ((JArray)clone["effects"]).First(x => x["label"].Value<string>() != "Bonusy Roju");
                        if (effect1 == null)
                        {
                            effect2 = cloneEffect2.DeepClone();
                            ((JArray)actor["effects"]).Add(effect2);
                        }
                        effect2["flags"] = cloneEffect2["flags"].DeepClone();
                        effect2["origin"] = $"Actor.{actor["_id"]}.Item.{clone["_id"]}";
                    }
                }
            }
        }
    }
}
