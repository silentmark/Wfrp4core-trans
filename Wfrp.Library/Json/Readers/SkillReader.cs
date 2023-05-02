using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("skill")]
    public class SkillReader : GenericReader
    {
        public void UpdateEntry(JObject pack, SkillEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
        }

        public void UpdateEntryFromBabele(JObject pack, SkillEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
        }
    }
}