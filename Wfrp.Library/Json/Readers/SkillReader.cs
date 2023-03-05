using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("skill")]
    public class SkillReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, SkillEntry mapping)
        {
            return UpdateItemEntry(pack, mapping);
        }
    }
}