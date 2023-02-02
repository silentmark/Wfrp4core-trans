using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("money")]
    public class MoneyReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, MoneyEntry mapping)
        {
            return UpdateItemEntry(pack, mapping);
        }
    }
}