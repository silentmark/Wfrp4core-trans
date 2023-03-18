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
    public class SpellsBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            base.Parse(entity, originalDbEntity, entry);
            var mapping = (SpellEntry)entry;
            entity["duration"] = mapping.Duration;
            entity["target"] = mapping.Target;
            entity["range"] = mapping.Range;
            entity["lore"] = mapping.Lore;
            entity["wind"] = mapping.Wind;
        }
    }
}