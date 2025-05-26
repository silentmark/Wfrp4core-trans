using Newtonsoft.Json.Linq;
using System.Reflection;
using Wfrp.Library.Json.Entries;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;
using WFRP4e.Translator.Packs;

namespace Wfrp.Library.Json.Readers
{
    public class GenericReader
    {
        protected void UpdateItemEntry(JObject pack, ItemEntry mapping, bool onlyNulls)
        {
            if (onlyNulls)
            {
                mapping.Name ??= pack.Value<string>("name");
            }
            else
            {
                mapping.Name = pack.Value<string>("name");
            }
            mapping.Type = pack.Value<string>("type");

            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]["description"]["value"]?.ToString(), nameof(mapping.Description), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]["gmdescription"]["value"]?.ToString(), nameof(mapping.GmNotes), onlyNulls);

            if (pack["flags"]?["core"]?["sourceId"]?.ToString() == null)
            {
                if (!string.IsNullOrEmpty(mapping.OriginFoundryId))
                {
                    if (mapping.OriginFoundryId.ToLower().Contains("actor")
                        || (pack.Parent?.Parent?.Parent?["flags"]?["core"]?["sourceId"]?.ToString()?.Contains("actor") ?? false))
                    {
                        var otherPotentialItem =
                            Mappings.OriginalTypeToMappingDictonary[mapping.Type].Values.Where(x => x.Name == mapping.Name).ToList();
                        if (otherPotentialItem.Count == 1)
                        {
                            mapping.OriginFoundryId = otherPotentialItem[0].OriginFoundryId;
                        }
                        else if (otherPotentialItem.Count > 1)
                        {
                            Console.WriteLine($"THIS SHIT HAS TO BE FIXED: {mapping.Name} - {mapping.Name} - {string.Join(", ", otherPotentialItem.Select(x => x.OriginFoundryId))}");
                        }
                    }
                    else
                    {
                        Console.WriteLine($"THIS SHIT HAS TO BE FIXED: {mapping.OriginFoundryId} - {pack.Parent.Parent.Parent["flags"]["core"]["sourceId"]} - {pack.Parent.Parent.Parent["name"]}");
                    }
                }
                else
                {
                    var otherPotentialItem = Mappings.OriginalTypeToMappingDictonary[mapping.Type].Values.Where(x => x.Name == mapping.Name).ToList();
                    if (otherPotentialItem.Count == 1)
                    {
                        mapping.OriginFoundryId = otherPotentialItem[0].OriginFoundryId;
                    }
                    else if (otherPotentialItem.Count > 1)
                    {
                        Console.WriteLine($"THIS SHIT HAS TO BE FIXED: {mapping.Name} - {mapping.Name} - {string.Join(", ", otherPotentialItem.Select(x => x.OriginFoundryId))}");
                    }
                }
            }
            else
            {
                UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), onlyNulls);
            }

            var effects = pack["effects"].ToArray();
            var existinEffects = mapping.Effects.ToList();
            var effectsToRemove = mapping.Effects.ToList();

            foreach (JObject effectObject in effects)
            {
                var newEffect = existinEffects.FirstOrDefault(x => x.FoundryId == effectObject["_id"].ToString());
                if (newEffect == null)
                {
                    newEffect = new EffectEntry();
                    existinEffects.Add(newEffect);
                }
                else
                {
                    effectsToRemove.Remove(newEffect);
                }
                new EffectReader().UpdateEntry(effectObject, newEffect, onlyNulls);
            }
            foreach (var effect in effectsToRemove)
            {
                existinEffects.Remove(effect);
            }
            mapping.Effects = existinEffects.OrderBy(x => x.FoundryId).ToList();
        }

        protected void UpdateItemEntryFromBabele(JObject babeleEntry, ItemEntry mapping)
        {
            mapping.Name = babeleEntry.Value<string>("name");
            UpdateIfDifferent(mapping, babeleEntry.Value<string>("description"), nameof(mapping.Description), false);
            UpdateIfDifferent(mapping, babeleEntry.Value<string>("gmdescription"), nameof(mapping.GmNotes), false);

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

        public static void UpdateIfDifferent(BaseEntry mapping, string value, string property, bool onlyNulls)
        {
            var prop = mapping.GetType().GetProperty(property);
            var existingValue = prop.GetValue(mapping)?.ToString();
            if (existingValue != value && !(string.IsNullOrWhiteSpace(existingValue) && string.IsNullOrWhiteSpace(value)))
            {
                if (onlyNulls && existingValue != null)
                {
                    return;
                }
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
    }
}