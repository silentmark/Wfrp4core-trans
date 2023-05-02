using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("ammunition")]
    public class AmmunitionReader : GenericReader
    {
        public void UpdateEntry(JObject pack, AmmunitionEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            UpdateIfDifferent(mapping, pack["system"]?["special"]?["value"]?.ToString(), nameof(mapping.Special));
            UpdateIfDifferent(mapping, pack["system"]?["range"]?["value"]?.ToString(), nameof(mapping.Range));
        }

        public void UpdateEntryFromBabele(JObject pack, AmmunitionEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["special"]?.ToString(), nameof(mapping.Special));
            UpdateIfDifferent(mapping, pack["range"]?.ToString(), nameof(mapping.Range));
        }
    }
}