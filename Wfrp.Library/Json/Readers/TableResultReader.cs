using Newtonsoft.Json.Linq;
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
            if (string.IsNullOrEmpty(result.Name))
            {
                result.Name = onlyNulls ? (result.Name ?? jObj.Value<string>("description")) : jObj.Value<string>("description");
            }
            result.Type = "tableResult";
            GenericReader.UpdateIfDifferent(result, jObj["_id"].ToString(), nameof(result.FoundryId), onlyNulls);
            GenericReader.UpdateIfDifferent(result, jObj["documentUuid"]?.ToString(), nameof(result.DocumentUuid), onlyNulls);

            if (!string.IsNullOrEmpty(result.DocumentUuid))
            {
                var success = false;
                foreach (var dic in Mappings.OriginalTypeToMappingDictonary)
                {
                    if (dic.Value.ContainsKey(result.DocumentUuid))
                    {
                        var targetItem = dic.Value[result.DocumentUuid];
                        GenericReader.UpdateIfDifferent(result, targetItem.Name, nameof(result.Name), onlyNulls);
                        success = true;
                        break;
                    }
                    if (dic.Value.ContainsKey(result.DocumentUuid.Replace(".Item.", ".")))
                    {
                        var targetItem = dic.Value[result.DocumentUuid.Replace(".Item.", ".")];
                        GenericReader.UpdateIfDifferent(result, targetItem.Name, nameof(result.Name), onlyNulls);
                        success = true;
                        break;
                    }
                }
                if (!success)
                {
                    Console.WriteLine($"Nie znalazłem: {result.DocumentUuid}");
                }
            }
        }
    }
}