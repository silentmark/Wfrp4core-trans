using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("journal")]
    public class JournalReader : GenericReader
    {
        public void UpdateEntry(JObject pack, JournalEntry mapping, bool onlyNulls = false)
        {
            mapping.Name = onlyNulls ? (mapping.Name ?? pack.Value<string>("name")) : pack.Value<string>("name");
            mapping.Type = "journal";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), onlyNulls);

            var pages = pack["pages"].ToArray();
            var existingPages = mapping.Pages?.ToList() ?? new List<JournalEntryPage>();

            foreach (JObject page in pages)
            {
                var newPage = existingPages.FirstOrDefault(x => x.FoundryId == page["_id"].ToString());
                if (newPage == null)
                {
                    newPage = new JournalEntryPage();
                    existingPages.Add(newPage);
                }
                new JournalPageReader().UpdateEntry(page, newPage, onlyNulls);
            }
            mapping.Pages = existingPages;
        }
    }
}