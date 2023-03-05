using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class JournalPageReader
    {
        public bool UpdateEntry(JObject jObj, JournalEntryPage page)
        {
            var result = false;
            if (string.IsNullOrEmpty(page.OriginalName))
            {
                result = true;
                page.OriginalName = jObj.Value<string>("name");
            }

            page.Type = "page";
            GenericReader.UpdateIfDifferent(page, jObj["_id"].ToString(), nameof(page.FoundryId), ref result);
            if (jObj["type"].Value<string>() != "image")
            {
                GenericReader.UpdateIfDifferent(page, jObj["text"]["content"]?.ToString(), nameof(page.Content), ref result);
            }
            return result;
        }
    }
}