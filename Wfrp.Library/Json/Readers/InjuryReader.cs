using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("injury")]
    public class InjuryReader : GenericReader
    {
        public void UpdateEntry(JObject pack, InjuryEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["penalty"]?["value"]?.ToString(), nameof(mapping.Penalty), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["location"]?["value"]?.ToString(), nameof(mapping.Location), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, InjuryEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["penalty"]?.ToString(), nameof(mapping.Penalty), false);
            UpdateIfDifferent(mapping, pack["location"]?.ToString(), nameof(mapping.Location), false);
        }
    }
}