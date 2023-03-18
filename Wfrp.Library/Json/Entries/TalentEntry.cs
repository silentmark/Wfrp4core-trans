using Newtonsoft.Json.Linq;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("talent")]
    public class TalentEntry : ItemEntry
    {
        public string Tests { get; set; }
        public string Specification { get; set; }
    }
}