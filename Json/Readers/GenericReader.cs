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
        //this is soo bad and quick
        public static bool OriginalPacksProcessing = false;

        protected void UpdateItemEntry(JObject pack, ItemEntry mapping)
        {
            if (string.IsNullOrEmpty(mapping.OriginalName) && OriginalPacksProcessing)
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            else if(mapping.OriginalName == mapping.Name && OriginalPacksProcessing)
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            mapping.FoundryId = pack.Value<string>("_id");

            var pathToData = GetPathToData(pack);

            mapping.Type = pack.Value<string>("type");
            mapping.Description = pack[pathToData]["description"]["value"].Value<string>();
            mapping.OriginFoundryId = pack["flags"]?["core"]?["sourceId"]?.Value<string>();
            mapping.GmDescription = pack[pathToData]["gmdescription"]["value"].Value<string>();

            var effects = pack["effects"].ToArray();
            var existinEffects = mapping.Effects.ToList();
            
            foreach(JObject effect in effects)
            {
                var newEffect = existinEffects.FirstOrDefault(x => x.FoundryId == effect.Value<string>("_id")) ?? new EffectEntry();
                new EffectReader().UpdateEntry(effect, newEffect);
                if (string.IsNullOrEmpty(newEffect.OriginalName) && OriginalPacksProcessing)
                {
                    newEffect.OriginalName = effect.Value<string>("label");
                    existinEffects.Add(newEffect);
                }
            }
            mapping.Effects = existinEffects.OrderBy(x => x.FoundryId).ToList();
        }



        protected void UpdateActorEntry(JObject pack, ActorEntry mapping)
        {
            if (string.IsNullOrEmpty(mapping.OriginalName) && OriginalPacksProcessing)
            {
                mapping.OriginalName = pack.Value<string>("name");
            }
            else if (mapping.OriginalName == mapping.Name && OriginalPacksProcessing)
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
            var newMappingItems = new List<ItemEntry>();
            foreach (JObject item in items)
            {
                var type = GetTypeFromJson(item);
                var readerType = GetEntryType(type, typeof(GenericReader));
              
                var itemId = item.Value<string>("_id");
                var obj = mapping.Items.FirstOrDefault(x => x.FoundryId == itemId) ?? (ItemEntry)GetEntryType(type, typeof(ItemEntry)).GetConstructor(new Type[] { }).Invoke(new object[] { });

                obj.Type = type;
                if (readerType != null)
                {
                    var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                    var method = readerType.GetMethod("UpdateEntry");
                    method.Invoke(reader, new object[] { item, obj });
                }
                ItemEntry sourceObj = null;
                if (!string.IsNullOrEmpty(obj.OriginFoundryId) && obj.OriginFoundryId.Split('.').Length == 4 && Mappings.TypeToMappingDictonary[type].ContainsKey(obj.OriginFoundryId.Split(".")[3]))
                {
                    sourceObj = (ItemEntry) Mappings.TypeToMappingDictonary[type][obj.OriginFoundryId.Split(".")[3]];
                }
                else if (!string.IsNullOrEmpty(obj.OriginFoundryId) && obj.OriginFoundryId.Split('.').Length == 2 && Mappings.TypeToMappingDictonary[type].ContainsKey(obj.OriginFoundryId.Split(".")[1]))
                {
                    sourceObj = (ItemEntry)Mappings.TypeToMappingDictonary[type][obj.OriginFoundryId.Split(".")[1]];
                }
                else if(Mappings.TypeToMappingDictonary[type].Values.Any(x=>x.OriginalName == obj.OriginalName))
                {
                    sourceObj = (ItemEntry)Mappings.TypeToMappingDictonary[type].Values.First(x => x.OriginalName == obj.OriginalName);
                }
                if(sourceObj != null)
                {
                    obj.Effects = new List<EffectEntry>();
                    foreach (var effect in sourceObj.Effects)
                    {
                        var newEffect = new EffectEntry();
                        newEffect.Name = effect.Name;
                        newEffect.Description = effect.Description;
                        newEffect.Type = effect.Type;
                        newEffect.Script = effect.Script;
                        newEffect.SecondaryScript = effect.SecondaryScript;
                        newEffect.OriginalName  = effect.OriginalName;
                        newEffect.FoundryId = effect.FoundryId;
                        newEffect.OriginFoundryId = effect.OriginFoundryId;
                        obj.Effects.Add(newEffect);
                    }
                    obj.Description = sourceObj.Description;
                    obj.GmDescription = sourceObj.GmDescription;
                    obj.Name = sourceObj.Name;
                    obj.OriginalName = sourceObj.OriginalName;
                    obj.OriginFoundryId = sourceObj.OriginFoundryId;
                }
                newMappingItems.Add(obj);
            }
            mapping.Items.RemoveAll(x => newMappingItems.All(y => y.FoundryId != x.FoundryId));
            mapping.Items.AddRange(newMappingItems.Where(x => mapping.Items.All(y => y.FoundryId != x.FoundryId)));
        }


        public static string GetPathToData(JObject pack)
        {
            var pathToItem = pack["system"] != null ? "system" : "data";
            return pathToItem;
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
            var type = types.FirstOrDefault(x => x.GetCustomAttributes<FoundryTypeAttribute>(false).FirstOrDefault(y => y.Type == foundryType) != null);
            return type;
        }

    }
}