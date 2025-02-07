using Wfrp.Library.Json.Entries;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("armour")]
    public class ArmourEntry : ItemEntry
    {
        public string Special { get; set; }

        public string Penalty { get; set; }
    }
}