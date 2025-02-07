using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("trait")]
    public class TraitReader : GenericReader
    {
        public void UpdateEntry(JObject pack, TraitEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["specification"]?["value"]?.ToString(), nameof(mapping.Specification), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, TraitEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["specification"]?.ToString(), nameof(mapping.Specification), false);
        }
    }
}