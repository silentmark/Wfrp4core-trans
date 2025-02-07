using Newtonsoft.Json;
using WFRP4e.Translator.Json.Entries;

namespace Wfrp.Library.Json.Entries
{
    public class ActorEntry : BaseEntry
    {
        [JsonConverter(typeof(ItemEntryJsonConverter))]
        public List<Entry> Items { get; set; } = [];

        public string Species { get; set; }

        public string Gender { get; set; }

        public string GmNotes { get; set; }
    }
}