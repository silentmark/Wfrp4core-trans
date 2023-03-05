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
    [FoundryType("table")]
    public class TableReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, TableEntry mapping)
        {
            var result = false;
            if (string.IsNullOrEmpty(mapping.OriginalName))
            {
                result = true;
                mapping.OriginalName = pack.Value<string>("name");
            }

            mapping.Type = "table";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), ref result);
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), ref result);
            UpdateIfDifferent(mapping, pack["description"]?.ToString(), nameof(mapping.Description), ref result);

            var subItems = pack["results"].ToArray();
            var existingSubItems = mapping.TableResults.ToList();

            foreach (JObject subItem in subItems)
            {
                var newSubEntry = existingSubItems.FirstOrDefault(x => x.FoundryId == subItem.Value<string>("_id")) ?? new TableResultEntry();
                if (string.IsNullOrEmpty(newSubEntry.OriginalName))
                {
                    newSubEntry.OriginalName = subItem.Value<string>("text");
                    existingSubItems.Add(newSubEntry);
                    result = true;
                }
                result = new TableResultReader().UpdateEntry(subItem, newSubEntry) || result;
            }
            mapping.TableResults = existingSubItems;

            result = UpdateInitializationFolder(pack, mapping) || result;
            return result;
        }
    }
}