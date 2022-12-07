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
            var pathToData = GenericReader.GetPathToData(pack);
            var type = GenericReader.GetTypeFromJson(pack);
            var id = pack.Value<string>("_id");
            var mapping = (ActorEntry)entry;

            pack[pathToData]["details"]["biography"]["value"] = mapping.Description;
            if (pack["flags"] == null)
            {
                pack["flags"] = new JObject();
            }
            if (pack["flags"]["core"] == null)
            {
                pack["flags"]["core"] = new JObject();
            }
            pack["flags"]["core"]["sourceId"] = mapping.OriginFoundryId;

            pack[pathToData]["details"]["gmnotes"]["value"] = mapping.GmDescription;

            pack[pathToData]["details"]["species"]["value"] = mapping.Species;
            pack[pathToData]["details"]["gender"]["value"] = mapping.Gender;

            foreach(var item in mapping.Items)
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
                    Console.WriteLine($"NIE UDAŁO SIĘ ZAKTUALIZOWAĆ PRZEDMIOTU: {item} DLA AKTORA: {mapping}");
                }
            }
        }
    }
}