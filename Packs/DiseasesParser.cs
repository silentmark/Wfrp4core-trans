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
    public class DiseasesParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            base.Parse(pack, entry);

            var pathToData = GenericReader.GetPathToData(pack);
            var mapping = (DiseaseEntry)entry;

            if (pack[pathToData]?["contraction"]?["value"] != null)
            {
                pack[pathToData]["contraction"]["value"] = mapping.Contraction;
            }
            if (pack[pathToData]?["duration"]?["value"] != null)
            {
                pack[pathToData]["duration"]["value"] = mapping.Duration;
            }
            if (pack[pathToData]?["duration"]?["unit"] != null)
            {
                pack[pathToData]["duration"]["unit"] = mapping.DurationUnit;
            }
            if (pack[pathToData]?["incubation"]?["value"] != null)
            {
                pack[pathToData]["incubation"]["value"] = mapping.Incubation;
            }
            if (pack[pathToData]?["incubation"]?["unit"] != null)
            {
                pack[pathToData]["incubation"]["unit"] = mapping.IncubationUnit;
            }
            if (pack[pathToData]?["permanent"]?["value"] != null)
            {
                pack[pathToData]["permanent"]["value"] = mapping.Permanent;
            }
            if (pack[pathToData]?["symptoms"]?["value"] != null)
            {
                pack[pathToData]["symptoms"]["value"] = mapping.Symptoms;
            }
        }
    }
}