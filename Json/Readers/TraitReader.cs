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
    [FoundryType("trait")]
    public class TraitReader : GenericItemReader
    { 
        public void UpdateEntry(JObject pack, TraitEntry mapping)
        {
            UpdateItemEntry(pack, mapping);

            var pathToData = GetPathToData(pack);
            mapping.Specification = pack[pathToData]?["specification"]?["value"]?.Value<string>();
        }
    }
}