using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("psychology")]
    public class PsychologyReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, PsychologyEntry mapping)
        {
            return UpdateItemEntry(pack, mapping);
        }
    }
}