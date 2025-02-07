using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("armour")]
    public class ArmourReader : GenericReader
    {
        public void UpdateEntry(JObject pack, ArmourEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["special"]?["value"]?.ToString(), nameof(mapping.Special), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["penalty"]?["value"]?.ToString(), nameof(mapping.Penalty), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, ArmourEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["special"]?.ToString(), nameof(mapping.Special), false);
            UpdateIfDifferent(mapping, pack["penalty"]?.ToString(), nameof(mapping.Penalty), false);
        }
    }
}