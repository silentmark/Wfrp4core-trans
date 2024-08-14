using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("npc")]
    [FoundryType("character")]
    [FoundryType("creature")]
    public class ActorParser : GenericItemParser
    {
        public override void Parse(JObject pack, BaseEntry entry)
        {
            var type = GenericReader.GetTypeFromJson(pack);
            var id = pack.Value<string>("_id");
            var mapping = (ActorEntry)entry;

            pack["system"]["details"]["biography"]["value"] = mapping.Description;
            if (pack["flags"] == null)
            {
                pack["flags"] = new JObject();
            }
            if (pack["flags"]["core"] == null)
            {
                pack["flags"]["core"] = new JObject();
            }
            pack["flags"]["core"]["sourceId"] = mapping.OriginFoundryId;

            pack["system"]["details"]["species"]["value"] = mapping.Species;
            pack["system"]["details"]["gender"]["value"] = mapping.Gender;
            pack["name"] = mapping.Name;
            if (pack["token"] != null)
            {
                pack["token"]["name"] = mapping.Name;
            }
            if (pack["prototypeToken"] != null)
            {
                pack["prototypeToken"]["name"] = mapping.Name;
            }

            foreach (var item in mapping.Items)
            {
                if (item is ItemEntry)
                {
                    var parserType = GenericReader.GetEntryType(item.Type, typeof(GenericItemParser));
                    var jItem = (JObject)((JArray)pack["items"]).FirstOrDefault(x => x["_id"].Value<string>() == item.FoundryId);
                    if (parserType != null && jItem != null)
                    {
                        var parser = (GenericItemParser)parserType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                        parser.Parse(jItem, (ItemEntry)item);
                    }
                    else
                    {
                        Console.WriteLine($"Nie udało się znaleźć przedmiotu dla mapowania: {item} u aktora: {mapping}");
                    }
                }
                else if (item is ReferenceEntry)
                {
                    var jItem = (JObject)((JArray)pack["items"]).FirstOrDefault(x => x["_id"].Value<string>() == item.FoundryId);
                    if (jItem != null)
                    {
                        var itemType = GenericReader.GetTypeFromJson(jItem);
                        var translatedItem = Mappings.TranslatedTypeToMappingDictonary[itemType][item.OriginFoundryId];
                        var parserType = GenericReader.GetEntryType(itemType, typeof(GenericItemParser));
                        var parser = (GenericItemParser)parserType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                        parser.Parse(jItem, translatedItem);
                    }
                    else
                    {
                        Console.WriteLine($"Nie udało się znaleźć przedmiotu dla mapowania: {item} u aktora: {mapping}");
                    }
                }
            }

            foreach (JObject effect in (JArray)pack["effects"])
            {
                var mappingEffect = mapping.Effects.FirstOrDefault(x => x.FoundryId == effect.Value<string>("_id"));
                if (mappingEffect == null)
                {
                    Console.WriteLine($"Nie odnaleziono tłumaczenia dla efektu: {effect.Value<string>("name")} o id: {effect.Value<string>("_id")} - Posiadane mapowanie: {mapping}");
                }
                else
                {
                    effect["name"] = mappingEffect.Name;
                    //if (effect["flags"]?["wfrp4e"]?["effectData"]?["description"] != null)
                    //{
                    //    effect["flags"]["wfrp4e"]["effectData"]["description"] = mappingEffect.Description;
                    //}
                    //TODO:
                    //if (effect["flags"]?["wfrp4e"]?["script"] != null)
                    //{
                    //    effect["flags"]["wfrp4e"]["script"] = mappingEffect.Script;
                    //}
                    //if (effect["flags"]?["wfrp4e"]?["secondaryEffect"]?["script"] != null)
                    //{
                    //    effect["flags"]["wfrp4e"]["secondaryEffect"]["script"] = mappingEffect.SecondaryScript;
                    //}
                }
            }
        }
    }
}