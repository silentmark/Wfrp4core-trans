using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class RollTableParser : GenericParser<Entry>
    {
        public override void TranslatePack(JObject packObject)
        {
            //foreach (var polishTable in polishPackEntries)
            //{
            //    var key = polishTable["flags"]["wfrp4e"]["key"].Value<string>();
            //    var column = polishTable["flags"]["wfrp4e"]["column"]?.Value<string>() ?? string.Empty;
            //    var originalTable =
            //        originalPackEntries.FirstOrDefault(x => x["flags"]["wfrp4e"]["key"].Value<string>() == key && (x["flags"]["wfrp4e"]["column"]?.Value<string>() ?? string.Empty )== column);
            //    if (originalTable != null)
            //    {
            //        Console.WriteLine($"Znaleziono RollTable {originalTable["name"].Value<string>()} dla {polishTable["name"].Value<string>()}");
            //        UpdateOriginalTable(originalTable, polishTable);
            //    }
            //    else
            //    {
            //        Console.WriteLine($"Nie znaleziono RollTable {polishTable["name"].Value<string>()}");
            //        polishTable["img"] = originalPackEntries[0]["img"].Value<string>();
            //        originalPackEntries.Add(polishTable);
            //    }
            //}

        }

        private void UpdateOriginalTable(JObject originalTable, JObject polishTable)
        {
            originalTable["name"] = polishTable["name"].Value<string>();
            var originalResults = (JArray)originalTable["results"];
            var polishResults = (JArray)polishTable["results"];
            if (originalResults.Count != polishResults.Count)
            {
                originalTable["results"] = polishResults.DeepClone();
            }
            else
            {
                foreach (var polishResult in polishResults)
                {
                    var range = new string(polishResult["range"].ToString().Where(c => !char.IsWhiteSpace(c)).ToArray());
                    var originalResult = originalResults.FirstOrDefault(x => new string(x["range"].ToString().Where(c => !char.IsWhiteSpace(c)).ToArray()) == range);
                    if (originalResult != null)
                    {
                        originalResult["text"] = polishResult["text"].Value<string>();
                    }
                    else
                    {
                        //TODO:
                    }
                }
            }


        }
    }
}
