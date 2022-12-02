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
    [FoundryType("injury")]
    public class InjuryReader : GenericReader
    { 
        public void UpdateEntry(JObject pack, InjuryEntry mapping)
        {
            UpdateItemEntry(pack, mapping);

            var pathToData = GetPathToData(pack);
            mapping.Penalty = pack[pathToData]?["penalty"]?["value"]?.Value<string>();
        }
    }
}