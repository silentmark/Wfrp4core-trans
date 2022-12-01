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

            mapping.Contraction = mapping.Contraction ?? pack[pathToData]["contraction"]["value"].Value<string>();
            mapping.Duration = mapping.Duration ?? pack[pathToData]["duration"]["value"].Value<string>();
            mapping.DurationUnit = mapping.DurationUnit ?? pack[pathToData]["duration"]["unit"].Value<string>(); 
            mapping.Incubation = mapping.Incubation ?? pack[pathToData]["incubation"]["value"].Value<string>();
            mapping.IncubationUnit = mapping.IncubationUnit ?? pack[pathToData]["incubation"]["unit"].Value<string>();
            mapping.Permanent = mapping.Permanent ?? pack[pathToData]["permanent"]["value"].Value<string>();
            mapping.Symptoms = mapping.Symptoms ?? pack[pathToData]["symptoms"]["value"].Value<string>();
        }
    }
}