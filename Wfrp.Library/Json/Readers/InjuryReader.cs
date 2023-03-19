using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("injury")]
    public class InjuryReader : GenericReader
    {
        public void UpdateEntry(JObject pack, InjuryEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            UpdateIfDifferent(mapping, pack["system"]?["penalty"]?["value"]?.ToString(), nameof(mapping.Penalty));
            UpdateIfDifferent(mapping, pack["system"]?["location"]?["value"]?.ToString(), nameof(mapping.Location));
        }
    }
}