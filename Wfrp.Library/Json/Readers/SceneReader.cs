using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("scene")]
    public class SceneReader : GenericReader
    {
        public void UpdateEntry(JObject pack, SceneEntry mapping, bool onlyNulls = false)
        {
            var moduleNames = new[] {
                "wfrp4e-core",
                "wfrp4e-starter-set",
                "wfrp4e-rnhd",
                "wfrp4e-eis"
            };
            mapping.Name = pack.Value<string>("name");
            mapping.Type = "scene";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), onlyNulls);
            if (pack["notes"] != null)
            {
                var arr = (JArray)pack["notes"];
                mapping.Notes = new List<NoteEntry>();
                foreach (JObject note in arr)
                {
                    var noteEntry = new NoteEntry();
                    noteEntry.Text = note["text"].ToString();
                    noteEntry.FoundryId = note["_id"].ToString();
                    mapping.Notes.Add(noteEntry);
                }
            }
            if (pack["grid"] != null)
            {
                UpdateIfDifferent(mapping, pack["grid"]["units"].ToString(), nameof(mapping.Units), onlyNulls);
            }
        }
    }
}