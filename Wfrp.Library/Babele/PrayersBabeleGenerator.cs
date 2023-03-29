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
            if (!string.IsNullOrEmpty(mapping.Duration))
            {
                entity["duration"] = mapping.Duration;
            }
            if (!string.IsNullOrEmpty(mapping.Target))
            {
                entity["target"] = mapping.Target;
            }
            if (!string.IsNullOrEmpty(mapping.Range))
            {
                entity["range"] = mapping.Range;
            }
        }
    }
}