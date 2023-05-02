using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("ammunition")]
    public class AmmunitionBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            base.Parse(entity, originalDbEntity, entry);
            var mapping = (AmmunitionEntry)entry;
            if (!string.IsNullOrEmpty(mapping.Special))
            {
                entity["special"] = mapping.Special;
            }
            if (!string.IsNullOrEmpty(mapping.Range))
            {
                entity["range"] = mapping.Range;
            }
        }
    }
}