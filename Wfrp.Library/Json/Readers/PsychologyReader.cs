using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("psychology")]
    public class PsychologyReader : GenericReader
    {
        public void UpdateEntry(JObject pack, PsychologyEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, PsychologyEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
        }
    }
}