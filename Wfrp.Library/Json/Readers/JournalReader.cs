using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("journal")]
    public class JournalReader : GenericReader
    {
        public void UpdateEntry(JObject pack, JournalEntry mapping)
        {
            mapping.Name = pack.Value<string>("name");
            mapping.Type = "journal";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId));
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId));

            var pages = pack["pages"].ToArray();
            var existingPages = new List<JournalEntryPage>();

            foreach (JValue pageId in pages)
            {
                var newPage = new JournalEntryPage();
                existingPages.Add(newPage);
                var page = GetSubEntryFromId(pageId.Value.ToString(), pack["_id"].ToString());
                new JournalPageReader().UpdateEntry(page, newPage);
            }
            mapping.Pages = existingPages;
        }
    }
}