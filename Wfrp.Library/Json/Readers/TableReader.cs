using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("table")]
    public class TableReader : GenericReader
    {
        public void UpdateEntry(JObject pack, TableEntry mapping, bool onlyNulls = false)
        {
            mapping.Name = onlyNulls ? (mapping.Name ?? pack.Value<string>("name")) : pack.Value<string>("name");
            mapping.Type = "table";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["description"]?.ToString(), nameof(mapping.Description), false);

            var subItems = pack["results"].ToArray();
            var existingSubItems = mapping.TableResults.ToList();

            foreach (JObject subItem in subItems)
            {
                var newSubEntry = existingSubItems.FirstOrDefault(x => x.FoundryId == subItem["_id"].ToString());
                if (newSubEntry == null)
                {
                    newSubEntry = new TableResultEntry();
                    existingSubItems.Add(newSubEntry);
                }
                new TableResultReader().UpdateEntry(subItem, newSubEntry, onlyNulls);
            }
            mapping.TableResults = existingSubItems;
        }
    }
}