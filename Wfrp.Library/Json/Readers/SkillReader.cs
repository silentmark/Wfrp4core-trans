using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("skill")]
    public class SkillReader : GenericReader
    {
        public void UpdateEntry(JObject pack, SkillEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, SkillEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
        }
    }
}