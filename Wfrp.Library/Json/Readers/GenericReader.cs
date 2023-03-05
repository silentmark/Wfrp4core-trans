using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using System.Reflection;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class GenericReader
    {
        protected bool UpdateItemEntry(JObject pack, ItemEntry mapping)
        {
            var result = false;
            if (string.IsNullOrEmpty(mapping.OriginalName))
            {
                result = true;
                mapping.OriginalName = pack.Value<string>("name");
            }
            mapping.Type = pack.Value<string>("type");

            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), ref result);
            UpdateIfDifferent(mapping, pack["system"]["description"]["value"]?.ToString(), nameof(mapping.Description), ref result);

            if (pack["flags"]?["core"]?["sourceId"]?.ToString() == null)
            {
                if (!string.IsNullOrEmpty(mapping.OriginFoundryId))
                {
                    Console.WriteLine($"THIS SHIT HAS TO BE FIXED: {mapping.OriginFoundryId} - {pack.Parent.Parent.Parent["flags"]["core"]["sourceId"]} - {pack.Parent.Parent.Parent["name"]}");
                }
            }
            else
            {
                UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), ref result);
            }
            UpdateIfDifferent(mapping, pack["system"]["gmdescription"]["value"]?.ToString(), nameof(mapping.GmDescription), ref result);

            var effects = pack["effects"].ToArray();
            var existinEffects = mapping.Effects.ToList();

            foreach (JObject effect in effects)
            {
                var newEffect = existinEffects.FirstOrDefault(x => x.FoundryId == effect.Value<string>("_id")) ?? new EffectEntry();
                if (string.IsNullOrEmpty(newEffect.OriginalName))
                {
                    newEffect.OriginalName = effect.Value<string>("label");
                    existinEffects.Add(newEffect);
                    result = true;
                }
                result = new EffectReader().UpdateEntry(effect, newEffect) || result;
            }
            mapping.Effects = existinEffects.OrderBy(x => x.FoundryId).ToList();

            result = UpdateInitializationFolder(pack, mapping) || result;
            return result;
        }

        public static bool UpdateInitializationFolder(JObject pack, Entry mapping)
        {
            var result = false;
            foreach (JProperty property in pack["flags"])
            {
                if (property.Value is JObject)
                {
                    if (property.Value["initialization-folder"] != null)
                    {
                        mapping.InitializationFolder = property.Value["initialization-folder"].Value<string>();
                        UpdateIfDifferent(mapping, property.Value["initialization-folder"].Value<string>(), nameof(mapping.InitializationFolder), ref result);
                    }
                }
            }
            return result;
        }

        public static void UpdateIfDifferent(Entry mapping, string value, string property, ref bool updated)
        {
            var prop = mapping.GetType().GetProperty(property);
            var existingValue = prop.GetValue(mapping)?.ToString();
            if (existingValue != value && !(string.IsNullOrWhiteSpace(existingValue) && string.IsNullOrWhiteSpace(value)))
            {
                prop.SetValue(mapping, value);
                updated = true;
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
            var types = typeof(Entry).Assembly.GetTypes().Where(x => x.CustomAttributes.Any(x => x.AttributeType == typeof(FoundryTypeAttribute)) && x.IsAssignableTo(baseType)).ToList();
            var type = types.FirstOrDefault(x => x.GetCustomAttributes<FoundryTypeAttribute>(false).FirstOrDefault(y => y.Type == foundryType) != null);
            return type;
        }
    }
}