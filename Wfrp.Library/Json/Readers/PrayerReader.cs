using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("prayer")]
    public class PrayerReader : GenericReader
    {
        public void UpdateEntry(JObject pack, PrayerEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);

            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["value"]?.ToString(), nameof(mapping.Duration), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["target"]?["value"]?.ToString(), nameof(mapping.Target), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["range"]?["value"]?.ToString(), nameof(mapping.Range), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["god"]?["value"]?.ToString(), nameof(mapping.God), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, PrayerEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["duration"]?.ToString(), nameof(mapping.Duration), false);
            UpdateIfDifferent(mapping, pack["range"]?.ToString(), nameof(mapping.Range), false);
            UpdateIfDifferent(mapping, pack["target"]?.ToString(), nameof(mapping.Target), false);
            UpdateIfDifferent(mapping, pack["god"]?.ToString(), nameof(mapping.God), false);
        }
    }
}