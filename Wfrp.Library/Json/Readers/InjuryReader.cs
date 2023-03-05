using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("injury")]
    public class InjuryReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, InjuryEntry mapping)
        {
            var result = UpdateItemEntry(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["penalty"]?["value"]?.ToString(), nameof(mapping.Penalty), ref result);

            return result;
        }
    }
}