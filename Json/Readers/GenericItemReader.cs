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
    public class GenericItemReader
    { 
        protected string GetPathToData(JObject pack)
        {
            var pathToItem = pack["system"] != null ? "system" : "data";
            return pathToItem;
        }

        protected void UpdateItemEntry(JObject pack, ItemEntry mapping)
        {
            mapping.OriginalName = pack.Value<string>("name");
            mapping.FoundryId = pack.Value<string>("_id");

            var pathToData = GetPathToData(pack);

            mapping.Description = mapping.Description ?? pack[pathToData]["description"]["value"].Value<string>();
            mapping.OriginFoundryId = pack["flags"]?["core"]?["sourceId"]?.Value<string>();
            mapping.GmDescription = pack[pathToData]["gmdescription"]["value"].Value<string>();

            var effects = pack["effects"].ToArray();
            mapping.Effects = new List<EffectEntry>();
            foreach(JObject effect in effects)
            {
                var newEffect = new EffectEntry();
                new EffectReader().UpdateEntry(effect, newEffect);
                mapping.Effects.Add(newEffect);
            }
            mapping.Effects = mapping.Effects.OrderBy(x => x.FoundryId).ToList();
        }
    }
}