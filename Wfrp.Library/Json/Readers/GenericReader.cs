using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Reflection;
using Wfrp.Library.Services;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class GenericReader
    {
        protected void UpdateItemEntry(JObject pack, ItemEntry mapping)
        {
            mapping.Name = pack.Value<string>("name");
            mapping.Type = pack.Value<string>("type");

            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId));
            UpdateIfDifferent(mapping, pack["system"]["description"]["value"]?.ToString(), nameof(mapping.Description));

            if (pack["flags"]?["core"]?["sourceId"]?.ToString() == null)
            {
                if (!string.IsNullOrEmpty(mapping.OriginFoundryId))
                {
                    Console.WriteLine($"THIS SHIT HAS TO BE FIXED: {mapping.OriginFoundryId} - {pack.Parent.Parent.Parent["flags"]["core"]["sourceId"]} - {pack.Parent.Parent.Parent["name"]}");
                }
            }
            else
            {
                UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId));
            }

            var effects = pack["effects"].ToArray();
            var existinEffects = new List<EffectEntry>();

            foreach (JObject effectObject in effects)
            {
                var newEffect = new EffectEntry();
                existinEffects.Add(newEffect);
                new EffectReader().UpdateEntry(effectObject, newEffect);
            }
            mapping.Effects = existinEffects.OrderBy(x => x.FoundryId).ToList();
        }

        protected void UpdateItemEntryFromBabele(JObject babeleEntry, ItemEntry mapping)
        {
            mapping.Name = babeleEntry.Value<string>("name");
            UpdateIfDifferent(mapping, babeleEntry.Value<string>("description"), nameof(mapping.Description));

            var effects = (JObject)babeleEntry["effects"];
            var existinEffects = mapping.Effects;
            if (effects != null)
            {
                foreach (var effect in effects.Properties())
                {
                    var effectItem = (JObject)effect.Value;
                    var newEffect = existinEffects.FirstOrDefault(x => x.FoundryId == effect.Name);
                    if (newEffect != null)
                    {
                        new EffectReader().UpdateEntryFromBabele(effectItem, newEffect);
                    }
                }

                mapping.Effects = existinEffects.OrderBy(x => x.FoundryId).ToList();
            }
        }

        public static void UpdateIfDifferent(BaseEntry mapping, string value, string property)
        {
            var prop = mapping.GetType().GetProperty(property);
            var existingValue = prop.GetValue(mapping)?.ToString();
            if (existingValue != value && !(string.IsNullOrWhiteSpace(existingValue) && string.IsNullOrWhiteSpace(value)))
            {
                prop.SetValue(mapping, value);
            }
        }

        public static string GetTypeFromJson(JObject packObject)
        {
            var type = "unknown";
            if (packObject["type"] != null)
            {
                type = packObject["type"].Value<string>().ToString();
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

        public static Type? GetEntryType(string foundryType, Type baseType)
        {
            var types = typeof(BaseEntry).Assembly.GetTypes().Where(x => x.CustomAttributes.Any(x => x.AttributeType == typeof(FoundryTypeAttribute)) && x.IsAssignableTo(baseType)).ToList();
            var type = types.FirstOrDefault(x => x.GetCustomAttributes<FoundryTypeAttribute>(false).FirstOrDefault(y => y.Type == foundryType) != null);
            return type;
        }

        public static JObject GetSubEntryFromId(string id, string parentId)
        {
            var jsonsPaths = Directory.EnumerateFiles(Config.PacksPath, $"*{id}.json", SearchOption.AllDirectories).ToList();
            if (jsonsPaths.Count == 1)
            {
                var jObject = JObject.Parse(File.ReadAllText(jsonsPaths.First()));
                return jObject;
            }
            else
            {
                var jObject = jsonsPaths.Select(x => JObject.Parse(File.ReadAllText(x))).Where(x => x["_key"].ToString().Contains(parentId)).FirstOrDefault();
                if (jObject == null)
                {
                    jObject = jsonsPaths.Select(x => JObject.Parse(File.ReadAllText(x))).First();
                }

                return jObject;
            }
        }
    }
}