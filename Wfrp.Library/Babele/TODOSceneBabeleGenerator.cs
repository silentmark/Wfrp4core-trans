using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("scene")]
    public class TODOSceneBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            var mapping = (SceneEntry)entry;
        }
    }
}