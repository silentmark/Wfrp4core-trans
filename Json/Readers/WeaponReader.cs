using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("weapon")]
    public class WeaponReader : GenericReader
    { 
        public void UpdateEntry(JObject pack, WeaponEntry mapping)
        {
            UpdateItemEntry(pack, mapping);

            var pathToData = GetPathToData(pack);
            mapping.Special = pack[pathToData]?["special"]?["value"]?.Value<string>();
        }
    }
}