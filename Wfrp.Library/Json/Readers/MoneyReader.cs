using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("money")]
    public class MoneyReader : GenericReader
    {
        public void UpdateEntry(JObject pack, MoneyEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, MoneyEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
        }
    }
}