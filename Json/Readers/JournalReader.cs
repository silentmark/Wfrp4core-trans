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
        public bool UpdateEntry(JObject pack, JournalEntry mapping)
        {
            var result = false;
            if (string.IsNullOrEmpty(mapping.OriginalName))
            {
                result = true;
                mapping.OriginalName = pack.Value<string>("name");
            }
            mapping.Type = "journal";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), ref result);
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), ref result);

            var pages = pack["pages"].ToArray();
            var existingPages = (mapping.Pages ?? new List<JournalEntryPage>()).ToList();

            foreach (JObject page in pages)
            {
                var newPage = existingPages.FirstOrDefault(x => x.FoundryId == page.Value<string>("_id")) ?? new JournalEntryPage();
                if (string.IsNullOrEmpty(newPage.OriginalName))
                {
                    newPage.OriginalName = page.Value<string>("name");
                    existingPages.Add(newPage);
                    result = true;
                }
                result = new JournalPageReader().UpdateEntry(page, newPage) || result;
            }
            mapping.Pages = existingPages;

            result = UpdateInitializationFolder(pack, mapping) || result;
            return result;
        }
    }
}