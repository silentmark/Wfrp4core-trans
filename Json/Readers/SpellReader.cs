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
    [FoundryType("spell")]
    public class SpellReader : GenericItemReader
    { 
        public void UpdateEntry(JObject pack, SpellEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            var pathToData = GetPathToData(pack);

            mapping.Duration = pack[pathToData]?["duration"]?["value"]?.Value<string>();
            mapping.Target = pack[pathToData]?["target"]?["value"]?.Value<string>();
            mapping.Range = pack[pathToData]?["range"]?["value"]?.Value<string>();
            mapping.Lore = pack[pathToData]?["lore"]?["value"]?.Value<string>();
            mapping.Wind = pack[pathToData]?["wind"]?["value"]?.Value<string>();
        }
    }
}