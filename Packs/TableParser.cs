using System;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("table")]
    public class TableParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            var mapping = (TableEntry)entry;
            pack["name"] = mapping.Name;
            pack["description"] = mapping.Description;
            if (pack["flags"] == null)
            {
                pack["flags"] = new JObject();
            }
            if (pack["flags"]["core"] == null)
            {
                pack["flags"]["core"] = new JObject();
            }
            pack["flags"]["core"]["sourceId"] = mapping.OriginFoundryId;
            var results = pack["results"].ToArray();
            foreach (JObject jObj in results)
            {
                var resultId = jObj.Value<string>("_id");
                var resultMapping = mapping.TableResults.FirstOrDefault(x => x.FoundryId == resultId);
                jObj["text"] = resultMapping.Name;

            }
            foreach (JProperty property in pack["flags"])
            {
                if (property.Value["initialization-folder"] != null)
                {
                    property.Value["initialization-folder"] = mapping.InitializationFolder;
                    break;
                }
            }
        }
    }
}