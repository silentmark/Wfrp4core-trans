using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("table")]
    public class TableBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            var mapping = (TableEntry)entry;

            if (!string.IsNullOrEmpty(mapping.InitializationFolder))
            {
                entity["initialization_folder"] = mapping.InitializationFolder;
            }

            entity["id"] = mapping.FoundryId;
            entity["name"] = mapping.Name;
            entity["originalName"] = originalDbEntity["name"].ToString();
            entity["description"] = mapping.Description;

            var jRes = new JObject();
            foreach (var result in mapping.TableResults)
            {
                if (string.IsNullOrEmpty(result.DocumentId))
                {
                    var packItem = ((JArray)originalDbEntity["results"]).FirstOrDefault(x => x["_id"].ToString() == result.FoundryId);
                    if (packItem != null)
                    {
                        jRes[packItem["range"][0].ToString() + "-" + packItem["range"][1].ToString()] = result.Name;
                    }
                }
            }
            entity["results"] = jRes;
        }
    }
}