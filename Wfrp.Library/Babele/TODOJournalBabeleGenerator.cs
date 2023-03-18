using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("journal")]
    public class TODOJournalBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            var mapping = (JournalEntry)entry;
        }
    }
}