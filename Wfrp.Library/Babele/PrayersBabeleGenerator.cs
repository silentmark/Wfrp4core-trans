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
    [FoundryType("prayer")]
    public class PrayersBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            base.Parse(entity, originalDbEntity, entry);
            var mapping = (PrayerEntry)entry;
            entity["duration"] = mapping.Duration;
            entity["target"] = mapping.Target;
            entity["range"] = mapping.Range;
        }
    }
}