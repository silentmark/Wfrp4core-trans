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
    [FoundryType("weapon")]
    public class WeaponParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            base.Parse(pack, entry);

            var mapping = (WeaponEntry)entry;
            if (!string.IsNullOrWhiteSpace(mapping.Special))
            {
                if (pack["system"]["special"] == null)
                {
                    pack["system"]["special"] = new JObject();
                }
                pack["system"]["special"]["value"] = mapping.Special;
            }
        }
    }
}