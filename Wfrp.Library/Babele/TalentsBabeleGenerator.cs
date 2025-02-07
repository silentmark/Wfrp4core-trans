using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Wfrp.Library.Babele;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("talent")]
    public class TalentsBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            base.Parse(entity, originalDbEntity, entry);
            var mapping = (TalentEntry)entry;
            if (!string.IsNullOrEmpty(mapping.Tests))
            {
                entity["tests"] = mapping.Tests;
            }
            if (!string.IsNullOrEmpty(mapping.Specification))
            {
                entity["specification"] = mapping.Specification;
            }
        }
    }
}