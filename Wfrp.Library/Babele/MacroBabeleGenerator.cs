using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Runtime;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("script")]
    public class MacroBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            var mapping = (MacroEntry)entry;

            entity["id"] = mapping.FoundryId;
            entity["originalName"] = originalDbEntity["name"].ToString();
            entity["name"] = mapping.Name;
            entity["command"] = mapping.Command;
        }
    }
}