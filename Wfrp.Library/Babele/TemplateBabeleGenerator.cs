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
    public class TemplateBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            base.Parse(entity, originalDbEntity, entry);
            var mapping = (TemplateEntry)entry;
            entity["alterNamePre"] = mapping.AlterNamePre ?? " ";
            entity["alterNamePost"] = mapping.AlterNamePost ?? " ";
            entity["gmDescription"] = mapping.GmDescription ?? " ";
            entity["skills"] = JArray.FromObject(mapping.Skills ?? new List<string>());
            entity["talents"] = JArray.FromObject(mapping.Talents ?? new List<string>());
            entity["traits"] = JArray.FromObject(mapping.Traits ?? new List<string>());
            entity["options"] = JArray.FromObject(mapping.Options ?? new List<TemplateOption>());
        }
    }
}