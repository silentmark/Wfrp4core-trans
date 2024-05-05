using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("talent")]
    public class TalentReader : GenericReader
    {
        public void UpdateEntry(JObject pack, TalentEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["tests"]?["value"]?.ToString(), nameof(mapping.Tests), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["specification"]?["value"]?.ToString(), nameof(mapping.Specification), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, TalentEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["tests"]?.ToString(), nameof(mapping.Tests), false);
            UpdateIfDifferent(mapping, pack["specification"]?.ToString(), nameof(mapping.Specification), false);
        }
    }
}