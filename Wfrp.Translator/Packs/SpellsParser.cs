﻿using System;
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
            var mapping = (SpellEntry)entry;

            if (pack["system"]?["duration"]?["value"] != null)
            {
                pack["system"]["duration"]["value"] = mapping.Duration;
            }
            if (pack["system"]?["target"]?["value"] != null)
            {
                pack["system"]["target"]["value"] = mapping.Target;
            }
            if (pack["system"]?["range"]?["value"] != null)
            {
                pack["system"]["range"]["value"] = mapping.Range;
            }
            if (pack["system"]?["lore"]?["value"] != null)
            {
                pack["system"]["lore"]["value"] = mapping.Lore;
            }
            if (pack["system"]?["wind"]?["value"] != null)
            {
                pack["system"]["wind"]["value"] = mapping.Wind;
            }
        }
    }
}