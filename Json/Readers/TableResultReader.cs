using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class TableResultReader
    {
        public bool UpdateEntry(JObject jObj, TableResultEntry result)
        {
            var isUpdated = false;
            if (string.IsNullOrEmpty(result.OriginalName))
            {
                isUpdated = true;
                result.OriginalName = jObj.Value<string>("text");
            }
            result.Type = "tableResult";
            GenericReader.UpdateIfDifferent(result, jObj["_id"].ToString(), nameof(result.FoundryId), ref isUpdated);
            GenericReader.UpdateIfDifferent(result, jObj["documentCollection"]?.ToString(), nameof(result.DocumentCollection), ref isUpdated);
            GenericReader.UpdateIfDifferent(result, jObj["documentId"]?.ToString(), nameof(result.DocumentId), ref isUpdated);

            if (!string.IsNullOrEmpty(result.DocumentId))
            {
                var originalId = "Compendium." + result.DocumentCollection + "." + result.DocumentId;
                foreach (var dic in Mappings.TypeToMappingDictonary)
                {
                    if (dic.Value.ContainsKey(originalId))
                    {
                        var targetItem = dic.Value[originalId];
                        GenericReader.UpdateIfDifferent(result, targetItem.Name, nameof(result.Name), ref isUpdated);
                    }
                }
            }

            return isUpdated;
        }
    }
}