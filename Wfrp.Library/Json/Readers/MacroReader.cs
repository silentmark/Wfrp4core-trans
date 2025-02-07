using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("script")]
    public class MacroReader : GenericReader
    {
        public void UpdateEntry(JObject pack, MacroEntry mapping, bool onlyNulls = false)
        {
            mapping.Name = pack.Value<string>("name");
            mapping.Type = "journal";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["command"]?.ToString(), nameof(mapping.Command), onlyNulls);
        }
    }
}