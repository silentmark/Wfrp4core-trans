using Newtonsoft.Json;
using System.Collections.Generic;

namespace WFRP4e.Translator.Json.Entries
{
    public class ActorEntry : Entry
    {
        [JsonConverter(typeof(ItemEntryJsonConverter))]
        public List<ItemEntry> Items { get; set; } = new List<ItemEntry>();
    }
}