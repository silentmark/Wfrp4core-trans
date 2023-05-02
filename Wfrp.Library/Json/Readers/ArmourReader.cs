using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("armour")]
    public class ArmourReader : GenericReader
    {
        public void UpdateEntry(JObject pack, ArmourEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            UpdateIfDifferent(mapping, pack["system"]?["special"]?["value"]?.ToString(), nameof(mapping.Special));
            UpdateIfDifferent(mapping, pack["system"]?["penalty"]?["value"]?.ToString(), nameof(mapping.Penalty));
        }

        public void UpdateEntryFromBabele(JObject pack, ArmourEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["special"]?.ToString(), nameof(mapping.Special));
            UpdateIfDifferent(mapping, pack["penalty"]?.ToString(), nameof(mapping.Penalty));
        }
    }
}