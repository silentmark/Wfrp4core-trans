using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("scene")]
    public class SceneBabeleGenerator : GenericItemBabeleGenerator
    {
        public override void Parse(JObject entity, JObject originalDbEntity, BaseEntry entry)
        {
            var mapping = (SceneEntry)entry;

            if (!string.IsNullOrEmpty(mapping.InitializationFolder))
            {
                entity["initialization_folder"] = mapping.InitializationFolder;
            }

            entity["name"] = mapping.Name;
            if (mapping.Notes.Count > 0)
            {
                var arr = new JArray();
                foreach (var note in mapping.Notes)
                {
                    var jNote = new JObject();
                    jNote[note.FoundryId] = new JObject()
                    {
                        ["text"] = note.Text
                    };
                    arr.Add(jNote);
                }
                entity["notes"] = arr;
            }

            if (!string.IsNullOrEmpty(mapping.SceneNote))
            {
                entity["scene_note"] = mapping.SceneNote;
            }
        }
    }
}