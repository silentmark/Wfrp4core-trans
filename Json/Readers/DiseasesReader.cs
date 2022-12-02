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
    [FoundryType("disease")]
    public class DiseasesReader : GenericItemReader
    { 
        public void UpdateEntry(JObject pack, DiseaseEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
            var pathToData = GetPathToData(pack);

            mapping.Contraction = pack[pathToData]?["contraction"]?["value"]?.Value<string>();
            mapping.Duration = pack[pathToData]?["duration"]?["value"]?.Value<string>();
            mapping.DurationUnit = pack[pathToData]?["duration"]?["unit"]?.Value<string>(); 
            mapping.Incubation = pack[pathToData]?["incubation"]?["value"]?.Value<string>();
            mapping.IncubationUnit = pack[pathToData]?["incubation"]?["unit"]?.Value<string>();
            mapping.Permanent = pack[pathToData]?["permanent"]?["value"]?.Value<string>();
            mapping.Symptoms = pack[pathToData]?["symptoms"]?["value"]?.Value<string>();
        }
    }
}