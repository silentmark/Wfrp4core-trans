using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("spell")]
    public class SpellReader : GenericReader
    {
        public void UpdateEntry(JObject pack, SpellEntry mapping)
        {
            UpdateItemEntry(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["value"]?.ToString(), nameof(mapping.Duration));
            UpdateIfDifferent(mapping, pack["system"]?["target"]?["value"]?.ToString(), nameof(mapping.Target));
            UpdateIfDifferent(mapping, pack["system"]?["range"]?["value"]?.ToString(), nameof(mapping.Range));
            UpdateIfDifferent(mapping, pack["system"]?["lore"]?["value"]?.ToString(), nameof(mapping.Lore));
            UpdateIfDifferent(mapping, pack["system"]?["wind"]?["value"]?.ToString(), nameof(mapping.Wind));
        }

        public void UpdateEntryFromBabele(JObject pack, SpellEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["duration"]?.ToString(), nameof(mapping.Duration));
            UpdateIfDifferent(mapping, pack["range"]?.ToString(), nameof(mapping.Range));
            UpdateIfDifferent(mapping, pack["target"]?.ToString(), nameof(mapping.Target));
        }
    }
}