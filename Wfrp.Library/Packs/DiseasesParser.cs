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
        public override void Parse(JObject pack, BaseEntry entry)
        {
            base.Parse(pack, entry);

            var mapping = (DiseaseEntry)entry;

            if (pack["system"]?["contraction"]?["value"] != null)
            {
                pack["system"]["contraction"]["value"] = mapping.Contraction;
            }
            if (pack["system"]?["duration"]?["value"] != null)
            {
                pack["system"]["duration"]["value"] = mapping.Duration;
            }
            if (pack["system"]?["duration"]?["unit"] != null)
            {
                pack["system"]["duration"]["unit"] = mapping.DurationUnit;
            }
            if (pack["system"]?["incubation"]?["value"] != null)
            {
                pack["system"]["incubation"]["value"] = mapping.Incubation;
            }
            if (pack["system"]?["incubation"]?["unit"] != null)
            {
                pack["system"]["incubation"]["unit"] = mapping.IncubationUnit;
            }
            if (pack["system"]?["permanent"]?["value"] != null)
            {
                pack["system"]["permanent"]["value"] = mapping.Permanent;
            }
            if (pack["system"]?["symptoms"]?["value"] != null)
            {
                pack["system"]["symptoms"]["value"] = mapping.Symptoms;
            }
        }
    }
}