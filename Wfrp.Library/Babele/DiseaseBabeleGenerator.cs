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
    public class DiseaseBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            base.Parse(entity, originalDbEntity, entry);
            var mapping = (DiseaseEntry)entry;
            entity["duration_value"] = mapping.Duration ?? string.Empty;
            entity["duration_unit"] = mapping.DurationUnit ?? string.Empty;
            entity["contraction"] = mapping.Contraction ?? string.Empty;
            entity["incubation_value"] = mapping.Incubation ?? string.Empty;
            entity["incubation_unit"] = mapping.IncubationUnit ?? string.Empty;
            entity["symptoms"] = mapping.Symptoms ?? string.Empty;
            entity["permanent"] = mapping.Permanent ?? string.Empty;
        }
    }
}