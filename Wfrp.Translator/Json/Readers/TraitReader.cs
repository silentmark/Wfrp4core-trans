using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("trait")]
    public class TraitReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, TraitEntry mapping)
        {
            var result = UpdateItemEntry(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["specification"]?["value"]?.ToString(), nameof(mapping.Specification), ref result);

            return result;
        }
    }
}