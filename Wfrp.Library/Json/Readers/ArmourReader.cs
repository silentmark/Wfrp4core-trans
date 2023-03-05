using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("armour")]
    public class ArmourReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, ArmourEntry mapping)
        {
            var result = UpdateItemEntry(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["special"]?["value"]?.ToString(), nameof(mapping.Special), ref result);

            return result;
        }
    }
}