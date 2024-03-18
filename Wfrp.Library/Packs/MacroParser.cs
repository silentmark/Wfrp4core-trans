using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("script")]
    public class MacroParser : GenericItemParser
    {
        public override void Parse(JObject pack, BaseEntry entry)
        {
            var mapping = (MacroEntry)entry;
            pack["name"] = mapping.Name;
            pack["description"] = mapping.Description;
            if (pack["flags"] == null)
            {
                pack["flags"] = new JObject();
            }
            if (pack["flags"]["core"] == null)
            {
                pack["flags"]["core"] = new JObject();
            }
            pack["flags"]["core"]["sourceId"] = mapping.OriginFoundryId;
            pack["command"] = mapping.Command;
        }
    }
}