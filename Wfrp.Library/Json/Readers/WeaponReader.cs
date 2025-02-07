using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("weapon")]
    public class WeaponReader : GenericReader
    {
        public void UpdateEntry(JObject pack, WeaponEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["special"]?["value"]?.ToString(), nameof(mapping.Special), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, WeaponEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["special"]?.ToString(), nameof(mapping.Special), false);
        }
    }
}