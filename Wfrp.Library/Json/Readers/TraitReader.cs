using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("trait")]
    public class TraitReader : GenericReader
    {
        public void UpdateEntry(JObject pack, TraitEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            UpdateIfDifferent(mapping, pack["system"]?["specification"]?["value"]?.ToString(), nameof(mapping.Specification));
        }

        public void UpdateEntryFromBabele(JObject pack, TraitEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["specification"]?.ToString(), nameof(mapping.Specification));
        }
    }
}