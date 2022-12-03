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
    public class TableResultReader
    {

        public void UpdateEntry(JObject jObj, TableResultEntry result)
        {

            if (string.IsNullOrEmpty(result.OriginalName))
            {
                result.OriginalName = jObj.Value<string>("text");
            }
            else if (result.OriginalName == result.Name)
            {
                result.OriginalName = jObj.Value<string>("text");
            }
            result.FoundryId = jObj.Value<string>("_id");
            result.Type = "tableResult";
            result.DocumentCollection = jObj.Value<string>("documentCollection");
            result.DocumentId = jObj.Value<string>("documentId");
        }
    }
}