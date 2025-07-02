using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using Wfrp.Library.Babele;
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

            entity["id"] = mapping.FoundryId;
            entity["name"] = mapping.Name;
            entity["originalName"] = originalDbEntity["name"].ToString();
            entity["description"] = mapping.Description ?? " ";

            var jRes = new JObject();
            foreach (var result in mapping.TableResults)
            {
                var packItem = originalDbEntity["results"].ToList().FirstOrDefault(x => x?["_id"].Value<string>() == result.FoundryId) as JObject;
                if (packItem != null)
                {
                    if (!string.IsNullOrEmpty(result.Name) && !string.IsNullOrEmpty(result.Description))
                    {
                        var resEntry = new JObject();
                        resEntry["name"] = result.Name;
                        resEntry["description"] = result.Description;
                        jRes[packItem["range"][0].ToString() + "-" + packItem["range"][1].ToString()] = resEntry;
                    }
                    else
                    {
                        jRes[packItem["range"][0].ToString() + "-" + packItem["range"][1].ToString()] = string.IsNullOrEmpty(result.Description) ? result.Name : result.Description;
                    }
                }
            }
            entity["results"] = jRes;
        }
    }
}