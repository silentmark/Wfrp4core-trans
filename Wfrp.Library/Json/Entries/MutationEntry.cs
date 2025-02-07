using Wfrp.Library.Json.Entries;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("mutation")]
    public class MutationEntry : ItemEntry
    {
        public string Modifier { get; set; }
    }
}