using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Runtime;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("journal")]
    public class JournalBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            var mapping = (JournalEntry)entry;

            if (!string.IsNullOrEmpty(mapping.InitializationFolder))
            {
                entity["initialization_folder"] = mapping.InitializationFolder;
            }

            entity["id"] = mapping.FoundryId;
            entity["originalName"] = originalDbEntity["name"].ToString();
            entity["name"] = mapping.Name;
            if (mapping.Pages.Count > 0)
            {
                var jP = new JObject();
                foreach (var p in mapping.Pages)
                {
                    var jPage = GenericReader.GetSubEntryFromId(p.FoundryId, mapping.FoundryId);
                    jP[jPage["name"].ToString()] = new JObject()
                    {
                        ["name"] = p.Name,
                        ["text"] = p.Content
                    };
                }
                entity["pages"] = jP;
            }
        }
    }
}