using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("prayer")]
    public class PrayerReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, PrayerEntry mapping)
        {
            var result = UpdateItemEntry(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["value"]?.ToString(), nameof(mapping.Duration), ref result);
            UpdateIfDifferent(mapping, pack["system"]?["target"]?["value"]?.ToString(), nameof(mapping.Target), ref result);
            UpdateIfDifferent(mapping, pack["system"]?["range"]?["value"]?.ToString(), nameof(mapping.Range), ref result);

            return result;
        }
    }
}