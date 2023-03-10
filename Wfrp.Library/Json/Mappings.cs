using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Json
{
    public static class Mappings
    {
        public static Dictionary<string, Dictionary<string, BaseEntry>> OriginalTypeToMappingDictonary { get; } = new Dictionary<string, Dictionary<string, BaseEntry>>();
        public static Dictionary<string, Dictionary<string, BaseEntry>> TranslatedTypeToMappingDictonary { get; } = new Dictionary<string, Dictionary<string, BaseEntry>>();
    }
}