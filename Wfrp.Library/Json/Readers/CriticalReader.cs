using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("critical")]
    public class CriticalReader : GenericReader
    {
        public void UpdateEntry(JObject pack, CriticalEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["wounds"]?["value"]?.ToString(), nameof(mapping.Wounds), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["location"]?["value"]?.ToString(), nameof(mapping.Location), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, CriticalEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["wounds"]?.ToString(), nameof(mapping.Wounds), false);
            UpdateIfDifferent(mapping, pack["location"]?.ToString(), nameof(mapping.Location), false);
        }
    }
}