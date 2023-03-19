using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("critical")]
    public class CriticalReader : GenericReader
    {
        public void UpdateEntry(JObject pack, CriticalEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            UpdateIfDifferent(mapping, pack["system"]?["wounds"]?["value"]?.ToString(), nameof(mapping.Wounds));
            UpdateIfDifferent(mapping, pack["system"]?["location"]?["value"]?.ToString(), nameof(mapping.Location));
        }
    }
}