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
    public class SpellsParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            base.Parse(pack, entry);

            var pathToData = GenericReader.GetPathToData(pack);
            var mapping = (SpellEntry)entry;

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
            if (pack[pathToData]?["lore"]?["value"] != null)
            {
                pack[pathToData]["lore"]["value"] = mapping.Lore;
            }
            if (pack[pathToData]?["wind"]?["value"] != null)
            {
                pack[pathToData]["wind"]["value"] = mapping.Wind;
            }
        }
    }
}