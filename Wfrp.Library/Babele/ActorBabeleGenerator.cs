using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("npc")]
    [FoundryType("character")]
    [FoundryType("creature")]
    public class ActorBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entry, JObject originalDbEntity, BaseEntry entity)
        {
            var mapping = (ActorEntry)entity;

            entry["id"] = mapping.FoundryId;
            entry["name"] = mapping.Name;
            entry["originalName"] = originalDbEntity["name"].ToString();
            entry["description"] = mapping.Description ?? string.Empty;
            entry["sourceId"] = mapping.OriginFoundryId ?? string.Empty;

            entry["gender"] = mapping.Species ?? string.Empty;
            entry["species"] = mapping.Gender ?? string.Empty;

            if (mapping.Effects?.Count > 0)
            {
                var jEffect = new JObject();
                foreach (var effect in mapping.Effects)
                {
                    jEffect[effect.FoundryId] = new JObject()
                    {
                        ["id"] = effect.FoundryId,
                        ["label"] = effect.Name
                    };
                    if (!string.IsNullOrEmpty(effect.Script))
                    {
                        jEffect[effect.FoundryId]["script"] = effect.Script;
                    }
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
            if (!string.IsNullOrEmpty(mapping.InitializationFolder))
            {
                entry["initialization_folder"] = mapping.InitializationFolder;
            }
        }
    }
}