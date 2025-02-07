using Wfrp.Library.Json.Entries;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("prayer")]
    public class PrayerEntry : ItemEntry
    {
        public string Range { get; set; }

        public string Duration { get; set; }

        public string Target { get; set; }

        public string God { get; set; }
    }
}