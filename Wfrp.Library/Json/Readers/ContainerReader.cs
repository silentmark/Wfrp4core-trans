using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("container")]
    public class ContainerReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, ContainerEntry mapping)
        {
            return UpdateItemEntry(pack, mapping);
        }
    }
}