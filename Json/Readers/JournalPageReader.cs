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
    public class JournalPageReader
    {

        public void UpdateEntry(JObject jObj, JournalEntryPage page)
        {

            if (string.IsNullOrEmpty(page.OriginalName))
            {
                page.OriginalName = jObj.Value<string>("name");
            }
            else if (page.OriginalName == page.Name)
            {
                page.OriginalName = jObj.Value<string>("name");
            }
            page.FoundryId = jObj.Value<string>("_id");
            page.Content = jObj["text"]["content"].Value<string>();
            page.Type = "page";
        }
    }
}