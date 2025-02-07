using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using Wfrp.Library.Packs;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("journal")]
    public class JournalParser : GenericItemParser
    {
        public override void Parse(JObject pack, BaseEntry entry)
        {
            var mapping = (JournalEntry)entry;
            pack["name"] = mapping.Name;
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
                var resultMapping = mapping.Pages.First(x => x.FoundryId == resultId);
                jObj["text"]["content"] = resultMapping.Content;
                jObj["name"] = resultMapping.Name;
            }
        }
    }
}