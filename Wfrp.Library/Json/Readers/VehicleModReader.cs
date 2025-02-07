using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("vehicleMod")]
    public class VehicleModReader : GenericReader
    {
        public void UpdateEntry(JObject pack, VehicleModEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, VehicleModEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
        }
    }
}