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
    [FoundryType("template")]
    public class TemplateParser : GenericItemParser
    {
        public override void Parse(JObject pack, BaseEntry entry)
        {
            base.Parse(pack, entry);

            var mapping = (TemplateEntry)entry;

            if (pack["system"]?["gmdescription"]?["value"] != null)
            {
                pack["system"]["gmdescription"]["value"] = mapping.GmDescription;
            }
            if (pack["system"]?["alterName"]?["pre"] != null)
            {
                pack["system"]["alterName"]["pre"] = mapping.AlterNamePre;
            }
            if (pack["system"]?["alterName"]?["post"] != null)
            {
                pack["system"]["alterName"]["post"] = mapping.AlterNamePost;
            }
        }
    }
}