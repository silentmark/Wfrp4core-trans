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
    [FoundryType("prayer")]
    public class PrayersParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            base.Parse(pack, entry);

            var pathToData = GenericReader.GetPathToData(pack);
            var mapping = (PrayerEntry)entry;


            if (pack[pathToData]?["duration"]?["value"] != null)
            {
                pack[pathToData]["duration"]["value"] = mapping.Duration;
            }
            if (pack[pathToData]?["target"]?["value"] != null)
            {
                pack[pathToData]["target"]["value"] = mapping.Target;
            }
            if (pack[pathToData]?["range"]?["value"] != null)
            {
                pack[pathToData]["range"]["value"] = mapping.Range;
            }
        }
    }
}