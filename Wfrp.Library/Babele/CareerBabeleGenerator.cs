using Newtonsoft.Json.Linq;
using System.Linq;
using Wfrp.Library.Babele;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("career")]
    public class CareerBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            base.Parse(entity, originalDbEntity, entry);
            var mapping = (CareerEntry)entry;
            entity["careergroup"] = mapping.CareerGroup;
            entity["class"] = mapping.Class;
            entity["skills"] = JArray.FromObject(mapping.Skills);
            entity["talents"] = JArray.FromObject(mapping.Talents);
            entity["trappings"] = JArray.FromObject(mapping.Trappings);
        }
    }
}