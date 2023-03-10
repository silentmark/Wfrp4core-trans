using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("talent")]
    public class TalentReader : GenericReader
    {
        public void UpdateEntry(JObject pack, TalentEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            UpdateIfDifferent(mapping, pack["system"]?["tests"]?["value"]?.ToString(), nameof(mapping.Tests));
        }
    }
}