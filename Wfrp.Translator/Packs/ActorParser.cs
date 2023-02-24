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
        public override void Parse(JObject pack, Entry entry)
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

            pack["system"]["details"]["gmnotes"]["value"] = mapping.GmDescription;

            pack["system"]["details"]["species"]["value"] = mapping.Species;
            pack["system"]["details"]["gender"]["value"] = mapping.Gender;

            if (string.IsNullOrEmpty(mapping.Name))
            {
                Console.WriteLine($"Nie odnaleziono tłumaczenia dla {mapping.OriginalName}, id {mapping.FoundryId} typu {mapping.Type}");
            }
            else
            {
                pack["name"] = mapping.Name;
                if (pack["token"] != null)
                {
                    pack["token"]["name"] = mapping.Name;
                }
                if (pack["prototypeToken"] != null)
                {
                    pack["prototypeToken"]["name"] = mapping.Name;
                }
            }

            foreach (var item in mapping.Items)
            {
                var parserType = GenericReader.GetEntryType(item.Type, typeof(GenericItemParser));
                var jItem = (JObject)((JArray)pack["items"]).FirstOrDefault(x => x["_id"].Value<string>() == item.FoundryId);
                if (parserType != null && jItem != null)
                {
                    var parser = (GenericItemParser)parserType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                    parser.Parse(jItem, item);
                }
                else
                {
                    jItem = (JObject)((JArray)pack["items"]).FirstOrDefault(x => x["name"].Value<string>() == item.OriginalName || x["name"].Value<string>() == item.Name);
                    Console.WriteLine($"Nie udało się znaleźć przedmiotu dla mapowania: {item} u aktora: {mapping}{(jItem != null ? $", potencjalny kandydat: {jItem["_id"]} - {jItem["name"]}" : "")}");
                }
            }
        }
    }
}