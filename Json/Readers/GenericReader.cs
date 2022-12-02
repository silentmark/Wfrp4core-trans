using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class GenericReader 
    {
        protected string GetPathToData(JObject pack)
        {
            var pathToItem = pack["system"] != null ? "system" : "data";
            return pathToItem;
        }

        protected void UpdateItemEntry(JObject pack, ItemEntry mapping)
        {
            if (string.IsNullOrEmpty(mapping.OriginalName))
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            else if(mapping.OriginalName == mapping.Name)
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            mapping.FoundryId = pack.Value<string>("_id");

            var pathToData = GetPathToData(pack);

            mapping.Description = pack[pathToData]["description"]["value"].Value<string>();
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



        protected void UpdateActorEntry(JObject pack, ActorEntry mapping)
        {
            if (string.IsNullOrEmpty(mapping.OriginalName))
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            else if (mapping.OriginalName == mapping.Name)
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            mapping.FoundryId = pack.Value<string>("_id");

            var pathToData = GetPathToData(pack);

            mapping.Description = pack[pathToData]["details"]["biography"]["value"].Value<string>();
            mapping.OriginFoundryId = pack["flags"]?["core"]?["sourceId"]?.Value<string>();
            mapping.GmDescription = pack[pathToData]["details"]["gmnotes"]["value"].Value<string>();


            mapping.Species = pack[pathToData]["details"]["species"]["value"].Value<string>();
            mapping.Gender = pack[pathToData]["details"]["gender"]["value"].Value<string>();

            var items = pack["items"].ToArray();
            mapping.Items = new List<ItemEntry>();
            foreach (JObject item in items)
            {
                var type = GetTypeFromJson(item);
                var obj = GetEntryType(type, typeof(ItemEntry)).GetConstructor(new Type[] { }).Invoke(new object[] { });
                var readerType = GetEntryType(type, typeof(GenericReader));
                if (readerType != null)
                {
                    var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                    var method = readerType.GetMethod("UpdateEntry");
                    method.Invoke(reader, new object[] { item, obj });
                }
                mapping.Items.Add((ItemEntry)obj);
            }
            mapping.Items = mapping.Items.OrderBy(x => x.Type).ThenBy(x => x.FoundryId).ToList();
        }


        public static string GetTypeFromJson(JObject packObject)
        {
            var type = "unknown";
            if (packObject["type"] != null)
            {
                type = packObject["type"].Value<string>();
            }
            else if (packObject["pages"] != null)
            {
                type = "journal";
            }
            else if (packObject["thumb"] != null)
            {
                type = "scene";
            }
            else if (packObject["results"] != null)
            {
                type = "table";
            }
            return type;
        }

        public static Type GetEntryType(string foundryType, Type baseType)
        {
            var types = typeof(Entry).Assembly.GetTypes().Where(x => x.CustomAttributes.Any(x => x.AttributeType == typeof(FoundryTypeAttribute)) && x.IsAssignableTo(baseType)).ToList();
            var type = types.FirstOrDefault(x => x.GetCustomAttributes<FoundryTypeAttribute>().FirstOrDefault(y => y.Type == foundryType) != null);
            return type;
        }

    }
}