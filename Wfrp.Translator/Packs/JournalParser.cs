using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("journal")]
    public class JournalParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            var mapping = (JournalEntry)entry;
            if (string.IsNullOrEmpty(mapping.Name))
            {
                Console.WriteLine($"Nie odnaleziono tłumaczenia dla {mapping.OriginalName}, id {mapping.FoundryId} typu {mapping.Type}");
            }
            else
            {
                pack["name"] = mapping.Name;
            }
            pack["description"] = mapping.Description;
            if (pack["flags"] == null)
            {
                pack["flags"] = new JObject();
            }
            if (pack["flags"]["core"] == null)
            {
                pack["flags"]["core"] = new JObject();
            }
            pack["flags"]["core"]["sourceId"] = mapping.OriginFoundryId;
            var pages = pack["pages"].ToArray();
            foreach (JObject jObj in pages)
            {
                var resultId = jObj.Value<string>("_id");
                var resultMapping = mapping.Pages.FirstOrDefault(x => x.FoundryId == resultId);
                jObj["text"]["content"] = resultMapping.Content;
                if (string.IsNullOrEmpty(resultMapping.Name))
                {
                    Console.WriteLine($"Nie odnaleziono tłumaczenia dla {resultMapping.OriginalName}, id {resultMapping.FoundryId} typu {resultMapping.Type}");
                }
                else
                {
                    jObj["name"] = resultMapping.Name;
                }
            }
            foreach (JProperty property in pack["flags"])
            {
                if (property.Value["initialization-folder"] != null)
                {
                    property.Value["initialization-folder"] = mapping.InitializationFolder;
                    break;
                }
            }
        }
    }
}