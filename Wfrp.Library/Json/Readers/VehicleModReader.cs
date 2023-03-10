using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("vehicleMod")]
    public class VehicleModReader : GenericReader
    {
        public void UpdateEntry(JObject pack, VehicleModEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
        }
    }
}