using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("container")]
    public class ContainerReader : GenericReader
    {
        public void UpdateEntry(JObject pack, ContainerEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, ContainerEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
        }
    }
}