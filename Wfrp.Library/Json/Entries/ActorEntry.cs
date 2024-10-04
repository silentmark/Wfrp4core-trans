using Newtonsoft.Json;
using System.Collections.Generic;

namespace WFRP4e.Translator.Json.Entries
{
    public class ActorEntry : BaseEntry
    {
        [JsonConverter(typeof(ItemEntryJsonConverter))]
        public List<Entry> Items { get; set; } = new List<Entry>();

        public string Species { get; set; }

        public string Gender { get; set; }

        public string GmNotes { get; set; }
    }
}