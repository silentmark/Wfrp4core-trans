using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Entries;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("talent")]
    public class TalentEntry : ItemEntry
    {
        public string Tests { get; set; }
        public string Specification { get; set; }
    }
}