using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("vehicleMod")]
    public class VehicleModReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, VehicleModEntry mapping)
        {
            return UpdateItemEntry(pack, mapping);
        }
    }
}