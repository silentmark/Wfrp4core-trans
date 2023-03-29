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
    [FoundryType("skill")]
    [FoundryType("money")]
    [FoundryType("mutation")]
    [FoundryType("psychology")]
    [FoundryType("trapping")]
    [FoundryType("vehicleMod")]
    [FoundryType("container")]
    public class GenericItemBabeleGenerator
    {
        public virtual void Parse(JObject entry, JObject originalDbEntity, BaseEntry mapping)
        {
            entry["id"] = mapping.FoundryId;
            entry["name"] = mapping.Name;
            entry["description"] = mapping.Description ?? string.Empty;
            entry["originalName"] = originalDbEntity["name"].ToString();
            entry["sourceId"] = mapping.OriginFoundryId ?? string.Empty;
            if (mapping is ItemEntry)
            {
                var item = (ItemEntry)mapping;
                if (item.Effects?.Count > 0)
                {
                    var jEffect = new JObject();
                    foreach (var effect in item.Effects)
                    {
                        jEffect[effect.FoundryId] = new JObject()
                        {
                            ["id"] = effect.FoundryId,
                            ["label"] = effect.Name,
                        };
                        if (!string.IsNullOrEmpty(effect.Script))
                        {
                            jEffect[effect.FoundryId]["script"] = effect.Script;
                        }
                    }
                    entry["effects"] = jEffect;
                }
            }
            if (!string.IsNullOrEmpty(mapping.InitializationFolder))
            {
                entry["initialization_folder"] = mapping.InitializationFolder;
            }
        }
    }
}