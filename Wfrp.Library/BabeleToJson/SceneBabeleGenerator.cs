﻿using Newtonsoft.Json.Linq;
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

            entity["id"] = mapping.FoundryId;
            entity["originalName"] = originalDbEntity["name"].ToString();
            entity["name"] = mapping.Name;
            if (mapping.Notes.Count > 0)
            {
                var jNote = new JObject();
                foreach (var note in mapping.Notes)
                {
                    jNote[note.FoundryId] = new JObject()
                    {
                        ["text"] = note.Text
                    };
                }
                entity["notes"] = jNote;
            }

            if (!string.IsNullOrEmpty(mapping.SceneNote))
            {
                entity["scene_note"] = mapping.SceneNote;
            }
        }
    }
}