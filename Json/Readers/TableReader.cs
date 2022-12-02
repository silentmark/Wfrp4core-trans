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
            mapping.Type = "table";
            mapping.Description = pack.Value<string>("description");
            var pages = pack["results"].ToArray();
            mapping.TableResults = new List<TableResultEntry>();
            foreach (JObject jObj in pages)
            {
                var result = new TableResultEntry();
                new TableResultReader().UpdateEntry(jObj, result);
                mapping.TableResults.Add(result);
            }
            foreach (JProperty property in pack["flags"])
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