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
    [FoundryType("armour")]
    public class ArmourBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            base.Parse(entity, originalDbEntity, entry);
            var mapping = (ArmourEntry)entry;
            if (!string.IsNullOrEmpty(mapping.Special))
            {
                entity["special"] = mapping.Special;
            }
            if (!string.IsNullOrEmpty(mapping.Penalty))
            {
                entity["penalty"] = mapping.Penalty;
            }
        }
    }
}