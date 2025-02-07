using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Entries;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("critical")]
    public class CriticalEntry : ItemEntry
    {
        public string Wounds { get; set; }
        public string Location { get; set; }
    }
}