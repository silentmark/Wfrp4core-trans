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
        public void UpdateEntry(JObject pack, TableEntry mapping)
        {
            mapping.Name = pack.Value<string>("name");
            mapping.Type = "table";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId));
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId));
            UpdateIfDifferent(mapping, pack["description"]?.ToString(), nameof(mapping.Description));

            var subItems = pack["results"].ToArray();
            var existingSubItems = new List<TableResultEntry>();

            foreach (JObject subItem in subItems)
            {
                var newSubEntry = new TableResultEntry();
                existingSubItems.Add(newSubEntry);
                new TableResultReader().UpdateEntry(subItem, newSubEntry);
            }
            mapping.TableResults = existingSubItems;

            UpdateInitializationFolder(pack, mapping);
        }
    }
}