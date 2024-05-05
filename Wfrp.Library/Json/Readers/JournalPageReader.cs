using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class JournalPageReader
    {
        public void UpdateEntry(JObject jObj, JournalEntryPage page, bool onlyNulls)
        {
            page.Name = onlyNulls ? (page.Name ?? jObj.Value<string>("name")) : jObj.Value<string>("name");
            page.Type = "page";
            GenericReader.UpdateIfDifferent(page, jObj["_id"].ToString(), nameof(page.FoundryId), onlyNulls);
            if (jObj["type"].Value<string>() != "image")
            {
                GenericReader.UpdateIfDifferent(page, jObj["text"]["content"]?.ToString(), nameof(page.Content), onlyNulls);
            }
        }
    }
}