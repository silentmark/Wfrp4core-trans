using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("journal")]
    public class JournalReader : GenericReader
    {
        public void UpdateEntry(JObject pack, JournalEntry mapping)
        {

            if (string.IsNullOrEmpty(mapping.OriginalName))
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            else if (mapping.OriginalName == mapping.Name)
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            mapping.FoundryId = pack.Value<string>("_id");

            mapping.OriginFoundryId = pack["flags"]?["core"]?["sourceId"]?.Value<string>();
            mapping.Type = "journal";
            var pages = pack["pages"].ToArray();
            mapping.Pages = new List<JournalEntryPage>();
            foreach (JObject jObj in pages)
            {
                var page = new JournalEntryPage();
                new JournalPageReader().UpdateEntry(jObj, page);
                mapping.Pages.Add(page);
            }
            foreach(JProperty property in pack["flags"])
            {
                if (property.Value["initialization-folder"] != null)
                {
                    mapping.InitializationFolder = property.Value["initialization-folder"].Value<string>();
                    mapping.SourceType = property.Name;
                    break;
                }                
            }
        }
    }
}