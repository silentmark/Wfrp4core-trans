﻿using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class TableResultReader
    {
        public void UpdateEntry(JObject jObj, TableResultEntry result, bool onlyNulls)
        {
            result.Name = onlyNulls ? (result.Name ?? jObj.Value<string>("text")) : jObj.Value<string>("text");
            result.Type = "tableResult";
            GenericReader.UpdateIfDifferent(result, jObj["_id"].ToString(), nameof(result.FoundryId), onlyNulls);
            GenericReader.UpdateIfDifferent(result, jObj["documentCollection"]?.ToString(), nameof(result.DocumentCollection), onlyNulls);
            GenericReader.UpdateIfDifferent(result, jObj["documentId"]?.ToString(), nameof(result.DocumentId), onlyNulls);

            if (!string.IsNullOrEmpty(result.DocumentId))
            {
                var originalId = "Compendium." + result.DocumentCollection + "." + result.DocumentId;
                foreach (var dic in Mappings.OriginalTypeToMappingDictonary)
                {
                    if (dic.Value.ContainsKey(originalId))
                    {
                        var targetItem = dic.Value[originalId];
                        GenericReader.UpdateIfDifferent(result, targetItem.Name, nameof(result.Name), onlyNulls);
                    }
                }
            }
        }
    }
}