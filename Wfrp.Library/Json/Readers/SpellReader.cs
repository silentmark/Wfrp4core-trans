using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("spell")]
    public class SpellReader : GenericReader
    {
        public void UpdateEntry(JObject pack, SpellEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);

            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["value"]?.ToString(), nameof(mapping.Duration), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["damage"]?["value"]?.ToString(), nameof(mapping.Damage), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["target"]?["value"]?.ToString(), nameof(mapping.Target), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["range"]?["value"]?.ToString(), nameof(mapping.Range), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, SpellEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["duration"]?.ToString(), nameof(mapping.Duration), false);
            UpdateIfDifferent(mapping, pack["damage"]?.ToString(), nameof(mapping.Damage), false);
            UpdateIfDifferent(mapping, pack["range"]?.ToString(), nameof(mapping.Range), false);
            UpdateIfDifferent(mapping, pack["target"]?.ToString(), nameof(mapping.Target), false);
        }
    }
}