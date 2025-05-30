﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Wfrp.Library.Packs;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("talent")]
    public class TalentsParser : GenericItemParser
    {
        public override void Parse(JObject pack, BaseEntry entry)
        {
            base.Parse(pack, entry);

            var mapping = (TalentEntry)entry;

            if (pack["system"]["tests"] == null)
            {
                pack["system"]["tests"] = new JObject();
            }
            if (pack["system"]["specification"] == null)
            {
                pack["system"]["specification"] = new JObject();
            }
            pack["system"]["tests"]["value"] = mapping.Tests;
            pack["system"]["specification"]["value"] = mapping.Specification;
        }
    }
}