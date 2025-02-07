using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Wfrp.Library.Packs;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("armour")]
    public class ArmourParser : GenericItemParser
    {
        public override void Parse(JObject pack, BaseEntry entry)
        {
            base.Parse(pack, entry);
            var mapping = (ArmourEntry)entry;
            pack["system"]["special"]["value"] = mapping.Special;
            pack["system"]["penalty"]["value"] = mapping.Penalty;
        }
    }
}