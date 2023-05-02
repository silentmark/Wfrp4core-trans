using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("talent")]
    public class TalentReader : GenericReader
    {
        public void UpdateEntry(JObject pack, TalentEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            UpdateIfDifferent(mapping, pack["system"]?["tests"]?["value"]?.ToString(), nameof(mapping.Tests));
            UpdateIfDifferent(mapping, pack["system"]?["specification"]?["value"]?.ToString(), nameof(mapping.Specification));
        }

        public void UpdateEntryFromBabele(JObject pack, TalentEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["tests"]?.ToString(), nameof(mapping.Tests));
            UpdateIfDifferent(mapping, pack["specification"]?.ToString(), nameof(mapping.Specification));
        }
    }
}