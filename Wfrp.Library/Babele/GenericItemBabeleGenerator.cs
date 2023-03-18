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
    [FoundryType("critical")]
    [FoundryType("container")]
    public class GenericItemBabeleGenerator
    {
        public virtual void Parse(JObject entry, JObject originalDbEntity, BaseEntry mapping)
        {
            entry["id"] = mapping.FoundryId;
            entry["name"] = mapping.Name;
            entry["description"] = mapping.Description;
            entry["sourceId"] = mapping.OriginFoundryId;
            if (mapping is ItemEntry)
            {
                var item = (ItemEntry)mapping;
                if (item.Effects?.Count > 0)
                {
                    var arr = new JArray();
                    foreach (var effect in item.Effects)
                    {
                        var jEffect = new JObject();
                        jEffect["label"] = effect.Name;
                        jEffect["script"] = effect.Script;
                        jEffect["id"] = effect.FoundryId;
                        arr.Add(jEffect);
                    }
                    entry["effects"] = arr;
                }
            }
        }
    }
}