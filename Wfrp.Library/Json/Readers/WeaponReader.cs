using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("weapon")]
    public class WeaponReader : GenericReader
    {
        public void UpdateEntry(JObject pack, WeaponEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            UpdateIfDifferent(mapping, pack["system"]?["special"]?["value"]?.ToString(), nameof(mapping.Special));
        }

        public void UpdateEntryFromBabele(JObject pack, WeaponEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["special"]?.ToString(), nameof(mapping.Special));
        }
    }
}