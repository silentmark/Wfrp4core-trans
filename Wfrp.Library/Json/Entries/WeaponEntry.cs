using Wfrp.Library.Json.Entries;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("weapon")]
    public class WeaponEntry : ItemEntry
    {
        public string Special { get; set; }
    }
}