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

            entity["id"] = mapping.FoundryId;
            entity["originalName"] = originalDbEntity["name"].ToString();
            entity["name"] = mapping.Name;
            if (mapping.Pages.Count > 0)
            {
                var jP = new JObject();
                foreach (var p in mapping.Pages)
                {
                    var jPage = originalDbEntity["pages"].ToList().FirstOrDefault(x => x?["_id"].Value<string>() == p.FoundryId) as JObject; //GenericReader.GetSubEntryFromId(p.FoundryId, mapping.FoundryId);
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