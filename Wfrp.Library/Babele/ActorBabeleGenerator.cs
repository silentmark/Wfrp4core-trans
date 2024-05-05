using Newtonsoft.Json.Linq;
using Wfrp.Library.Services;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("npc")]
    [FoundryType("character")]
    [FoundryType("creature")]
    public class ActorBabeleGenerator : GenericItemBabeleGenerator
    {
        public void ParseOriginal(JObject entry, JObject originalDbEntity, BaseEntry entity)
        {
            var mapping = (ActorEntry)entity;

            entry["id"] = mapping.FoundryId;
            entry["name"] = mapping.Name;
            entry["originalName"] = originalDbEntity["name"].ToString();
            entry["description"] = mapping.Description ?? " ";
            entry["sourceId"] = mapping.OriginFoundryId ?? " ";

            entry["gender"] = mapping.Gender ?? " ";
            entry["species"] = mapping.Species ?? string.Empty;

            if (mapping.Effects?.Count > 0)
            {
                var jEffect = new JObject();
                foreach (var effect in mapping.Effects)
                {
                    jEffect[effect.FoundryId] = new JObject()
                    {
                        ["id"] = effect.FoundryId,
                        ["name"] = effect.Name
                    };
                    //TODO:
                    //if (!string.IsNullOrEmpty(effect.Script))
                    //{
                    //    jEffect[effect.FoundryId]["script"] = effect.Script;
                    //}
                }
                entry["effects"] = jEffect;
            }
            var jItem = new JObject();
            entry["items"] = jItem;
            foreach (var item in mapping.Items)
            {
                if (!(item is ReferenceEntry))
                {
                    var babeleType = GenericReader.GetEntryType(item.Type, typeof(GenericItemBabeleGenerator));
                    var jPackItem = ((JArray)originalDbEntity["items"]).FirstOrDefault(x => x["_id"].Value<string>() == item.FoundryId) as JObject;

                    var key = jPackItem["_id"].ToString();
                    jItem[key] = new JObject();
                    var parser = (GenericItemBabeleGenerator)babeleType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                    parser.Parse((JObject)jItem[key], jPackItem, (BaseEntry)item);
                }
                else
                {
                    var jPackItem = (JObject)((JArray)originalDbEntity["items"]).FirstOrDefault(x => x["_id"].Value<string>() == item.FoundryId);
                    if (jPackItem != null)
                    {
                        var key = jPackItem["_id"].ToString();
                        var itemType = GenericReader.GetTypeFromJson(jPackItem);
                        var translatedItem = Mappings.TranslatedTypeToMappingDictonary[itemType][item.OriginFoundryId];
                        var originalMapping = Mappings.OriginalTypeToMappingDictonary[itemType][item.OriginFoundryId];
                        if (originalMapping.Name != jPackItem["name"].ToString())
                        {
                            jItem[key] = new JObject();
                            var parserType = GenericReader.GetEntryType(itemType, typeof(GenericItemBabeleGenerator));
                            var parser = (GenericItemBabeleGenerator)parserType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                            parser.Parse((JObject)jItem[key], jPackItem, translatedItem);
                            jItem[key]["id"] = item.FoundryId;
                        }
                    }
                    else
                    {
                        Console.WriteLine($"Nie udało się znaleźć przedmiotu dla mapowania: {item} u aktora: {mapping}");
                    }
                }
            }
        }

        public override void Parse(JObject entry, JObject originalDbEntity, BaseEntry entity)
        {
            var mapping = (ActorEntry)entity;

            entry["id"] = mapping.FoundryId;
            entry["name"] = mapping.Name;
            entry["originalName"] = originalDbEntity["name"].ToString();
            entry["description"] = mapping.Description ?? " ";
            entry["sourceId"] = mapping.OriginFoundryId ?? " ";

            entry["species"] = mapping.Species ?? " ";
            entry["gender"] = mapping.Gender ?? " ";

            var jEffect = new JObject();
            if (mapping.Effects?.Count > 0)
            {
                // THIS SHOULD NOW ALWAYS BE EMPTY!s
                foreach (var effect in mapping.Effects)
                {
                    jEffect[effect.FoundryId] = new JObject()
                    {
                        ["id"] = effect.FoundryId,
                        ["name"] = effect.Name
                    };
                    //TODO:
                   // if (!string.IsNullOrEmpty(effect.Script))
                   //{
                   //     jEffect[effect.FoundryId]["script"] = effect.Script;
                   // }
                }
            }
            entry["effects"] = jEffect;
            var jItem = entry["items"] as JObject ?? new JObject();
            foreach (var item in mapping.Items)
            {
                var jPackItem = originalDbEntity["items"].ToList().FirstOrDefault(x => x["_id"].Value<string>() == item.FoundryId) as JObject;
                var type = jPackItem["type"].ToString();
                var itemBabeleFileName = "";

                if (type == "ammunition" || type == "armour" || type == "weapon" || type == "container" || type == "money")
                {
                    itemBabeleFileName = "wfrp4e-core.trapping.wfrp4e-core.items.json";
                }
                else
                {
                    itemBabeleFileName = $"wfrp4e-core.{type}.wfrp4e-core.items.json";
                }
                var compendiumItem = Mappings.OriginalTypeToMappingDictonary[type].Values.FirstOrDefault(x => x.Name == jPackItem["name"].ToString());
                var compendiumItemPl = Mappings.TranslatedTypeToMappingDictonary[type].Values.FirstOrDefault(x => x.Name == jPackItem["name"].ToString());

                JObject babeleTranslationObj = null;
                if (compendiumItem != null) // en
                {
                    babeleTranslationObj = JObject.Parse(File.ReadAllText(Config.BabeleLocationEn + "\\" + itemBabeleFileName));
                    if (babeleTranslationObj["entries"][compendiumItem.FoundryId] != null)
                    {
                        var key = jPackItem["_id"].ToString();
                        var babeleType = GenericReader.GetEntryType(type, typeof(GenericItemBabeleGenerator));
                        var parser = (GenericItemBabeleGenerator)babeleType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                        jItem[key] = new JObject();
                        parser.Parse((JObject)jItem[key], jPackItem, (BaseEntry)compendiumItem);
                        continue;
                        //Do all
                    }
                }
                else if (compendiumItemPl != null) //pl
                {
                    babeleTranslationObj = JObject.Parse(File.ReadAllText(Config.BabeleLocationPl + "\\" + itemBabeleFileName));
                    if (babeleTranslationObj["entries"][compendiumItemPl.FoundryId] != null)
                    {
                        var key = jPackItem["_id"].ToString();
                        var babeleType = GenericReader.GetEntryType(type, typeof(GenericItemBabeleGenerator));
                        var parser = (GenericItemBabeleGenerator)babeleType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                        parser.Parse((JObject)jItem[key], jPackItem, (BaseEntry)compendiumItemPl);
                        continue;
                    }
                }

                if (!(item is ReferenceEntry))
                {
                    var babeleType = GenericReader.GetEntryType(item.Type, typeof(GenericItemBabeleGenerator));

                    var key = jPackItem["_id"].ToString();
                    var backup = jItem[jPackItem["name"].ToString()] as JObject;
                    jItem[key] = new JObject();
                    if (jPackItem["name"]?.ToString() != null)
                    {
                        jItem[jPackItem["name"].ToString()]?.Parent.Remove();
                    }
                    compendiumItem = Mappings.OriginalTypeToMappingDictonary[item.Type].Values.FirstOrDefault(x => x.Name == jPackItem["name"].ToString());
                    if (compendiumItem != null)
                    {
                        if (item is TraitEntry trait)
                        {
                            if (jPackItem["system"]["specification"]?["value"] != null)
                            {
                                if (backup != null)
                                {
                                    jItem[key]["specification"] = backup["specification"].ToString();
                                }
                                else
                                {
                                    jItem[key]["specification"] = jPackItem["system"]["specification"]["value"].ToString();
                                }
                            }
                        }
                        if (item is TalentEntry talent)
                        {
                            if (jPackItem["system"]["specification"]?["value"] != null)
                            {
                                if (backup != null)
                                {
                                    jItem[key]["specification"] = backup["specification"].ToString();
                                }
                                else
                                {
                                    jItem[key]["specification"] = jPackItem["system"]["specification"]["value"].ToString();
                                }
                            }
                            if (jPackItem["system"]["tests"]?["value"] != null)
                            {
                                if (backup != null)
                                {
                                    jItem[key]["tests"] = backup["tests"].ToString();
                                }
                                else
                                {
                                    jItem[key]["tests"] = jPackItem["system"]["tests"]["value"].ToString();
                                }
                            }
                        }
                    }
                    else
                    {
                        compendiumItem = Mappings.TranslatedTypeToMappingDictonary[item.Type].Values.FirstOrDefault(x => x.Name == jPackItem["name"].ToString());
                        if (compendiumItem != null)
                        {
                            var translatedEntry = (ActorEntry)Mappings.TranslatedTypeToMappingDictonary[entity.Type][entity.OriginFoundryId];
                            var translatedItem = translatedEntry.Items.First(x => x.FoundryId == jPackItem["_id"].ToString());

                            if (item is TraitEntry trait)
                            {
                                if (jPackItem["system"]["specification"]?["value"] != null)
                                {
                                    jItem[key]["specification"] = ((TraitEntry)translatedItem).Specification; //jPackItem["system"]["specification"]["value"].ToString();
                                }
                            }
                            if (item is TalentEntry talent)
                            {
                                if (jPackItem["system"]["specification"]?["value"] != null)
                                {
                                    jItem[key]["specification"] = ((TalentEntry)translatedItem).Specification; //jPackItem["system"]["specification"]["value"].ToString();
                                }
                                if (jPackItem["system"]["tests"]?["value"] != null)
                                {
                                    jItem[key]["tests"] = ((TalentEntry)translatedItem).Tests;// jPackItem["system"]["tests"]["value"].ToString();
                                }
                            }
                        }
                        else
                        {
                            var parser = (GenericItemBabeleGenerator)babeleType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                            parser.Parse((JObject)jItem[key], jPackItem, (BaseEntry)item);
                        }
                    }
                }
                else
                {
                    //     var jPackItem = (JObject)((JArray)originalDbEntity["items"]).FirstOrDefault(x => x["_id"].Value<string>() == item.FoundryId);
                    if (jPackItem != null)
                    {
                        var key = jPackItem["_id"].ToString();
                        var itemType = GenericReader.GetTypeFromJson(jPackItem);
                        BaseEntry translatedItem;
                        if (Mappings.TranslatedTypeToMappingDictonary[itemType].ContainsKey(item.OriginFoundryId))
                        {
                            translatedItem = Mappings.TranslatedTypeToMappingDictonary[itemType][item.OriginFoundryId];
                        }
                        else
                        {
                            translatedItem = Mappings.TranslatedTypeToMappingDictonary[itemType][item.OriginFoundryId.Replace(".items.", ".items.Item.")];
                        }
                        BaseEntry originalMapping;
                        if (Mappings.OriginalTypeToMappingDictonary[itemType].ContainsKey(item.OriginFoundryId)) 
                        {
                            originalMapping = Mappings.OriginalTypeToMappingDictonary[itemType][item.OriginFoundryId];
                        }
                        else
                        {
                            originalMapping = Mappings.OriginalTypeToMappingDictonary[itemType][item.OriginFoundryId.Replace(".items.", ".items.Item.")];
                        }
                        if (originalMapping.Name != jPackItem["name"].ToString())
                        {
                            jItem[key] = new JObject();
                            var parserType = GenericReader.GetEntryType(itemType, typeof(GenericItemBabeleGenerator));
                            var parser = (GenericItemBabeleGenerator)parserType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                            parser.Parse((JObject)jItem[key], jPackItem, translatedItem);
                            jItem[key]["id"] = item.FoundryId;
                        }
                    }
                    else
                    {
                        Console.WriteLine($"Nie udało się znaleźć przedmiotu dla mapowania: {item} u aktora: {mapping}");
                    }
                }
            }
            entry["items"] = jItem;
        }
    }
}