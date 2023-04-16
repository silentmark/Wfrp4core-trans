using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Wfrp.Library.Services;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("npc")]
    [FoundryType("character")]
    [FoundryType("creature")]
    public class ActorReader : GenericReader
    {
        public void UpdateEntry(JObject pack, ActorEntry mapping)
        {
            mapping.Type = mapping.GetType() == typeof(CharacterEntry) ? "character" : (mapping.GetType() == typeof(NpcEntry) ? "npc" : "creature");
            UpdateActorEntry(pack, mapping);
        }

        protected void UpdateActorEntry(JObject pack, ActorEntry mapping)
        {
            mapping.Name = pack.Value<string>("name");
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId));
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId));
            UpdateIfDifferent(mapping, pack["system"]["details"]["biography"]["value"]?.ToString(), nameof(mapping.Description));
            UpdateIfDifferent(mapping, pack["system"]["details"]["species"]["value"]?.ToString(), nameof(mapping.Species));
            UpdateIfDifferent(mapping, pack["system"]["details"]["gender"]["value"]?.ToString(), nameof(mapping.Gender));

            var items = pack["items"].ToArray();
            var newMappingItems = new List<Entry>();

            foreach (JObject item in items)
            {
                var type = GetTypeFromJson(item);
                var readerType = GetEntryType(type, typeof(GenericReader));
                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                var method = readerType.GetMethod("UpdateEntry");
                var itemId = item.Value<string>("_id");
                var originalSpecification = item["system"]["specification"]?["value"]?.ToString() ?? string.Empty;
                string specification = string.Empty;

                var value = Mappings.OriginalTypeToMappingDictonary[type].Where(x => x.Value.Name == item.Value<string>("name")).ToList();
                var matchingValue = value.FirstOrDefault(x => x.Value.OriginFoundryId.Replace("Compendium.", "").Split(".")[0] == mapping.OriginFoundryId.Replace("Compendium.", "").Split(".")[0]);
                if (matchingValue.Key == null)
                {
                    matchingValue = value.FirstOrDefault();
                }
                if (matchingValue.Key != null)
                {
                    var prop = matchingValue.Value.GetType().GetProperty("Specification");
                    if (prop != null)
                    {
                        specification = prop.GetValue(matchingValue.Value, null) as string ?? string.Empty;
                    }
                }
                if (matchingValue.Value != null && specification == originalSpecification)
                {
                    newMappingItems.Add(new ReferenceEntry
                    {
                        FoundryId = itemId,
                        OriginFoundryId = matchingValue.Value.OriginFoundryId
                    });
                }
                else
                {
                    value = Mappings.TranslatedTypeToMappingDictonary[type].Where(x => x.Value.Name == item.Value<string>("name")).ToList();
                    matchingValue = value.FirstOrDefault(x => x.Value.OriginFoundryId.Replace("Compendium.", "").Split(".")[0] == mapping.OriginFoundryId.Replace("Compendium.", "").Split(".")[0]);
                    if (matchingValue.Key == null)
                    {
                        matchingValue = value.FirstOrDefault();
                    }
                    if (matchingValue.Key != null)
                    {
                        var prop = matchingValue.Value.GetType().GetProperty("Specification");
                        if (prop != null)
                        {
                            specification = prop.GetValue(matchingValue.Value, null) as string ?? string.Empty;
                        }
                    }
                    if (matchingValue.Value != null && specification == originalSpecification)
                    {
                        var module = mapping.OriginFoundryId.Replace("Compendium.", "").Split('.')[0];
                        var pathToSource = Path.Combine(Config.SourceJsonsEn, module, mapping.Type, mapping.FoundryId + ".json");
                        var originalActor = JsonConvert.DeserializeObject<ActorEntry>(File.ReadAllText(pathToSource));

                        var originalItem = originalActor.Items.FirstOrDefault(x => x.FoundryId == itemId);
                        if (originalItem as ReferenceEntry != null)
                        {
                            newMappingItems.Add(new ReferenceEntry
                            {
                                FoundryId = itemId,
                                OriginFoundryId = matchingValue.Value.OriginFoundryId
                            });
                        }
                        else
                        {
                            var newSubEntry = (ItemEntry)GetEntryType(type, typeof(ItemEntry)).GetConstructor(new Type[] { }).Invoke(new object[] { });
                            newSubEntry.Type = type;
                            newMappingItems.Add(newSubEntry);
                            method.Invoke(reader, new object[] { item, newSubEntry });
                        }
                    }
                    else
                    {
                        var newSubEntry = (ItemEntry)GetEntryType(type, typeof(ItemEntry)).GetConstructor(new Type[] { }).Invoke(new object[] { });
                        newSubEntry.Type = type;
                        newMappingItems.Add(newSubEntry);
                        method.Invoke(reader, new object[] { item, newSubEntry });
                    }
                }
            }
            mapping.Items = newMappingItems;

            var effects = pack["effects"].ToArray();
            var existinEffects = new List<EffectEntry>();

            foreach (JObject effect in effects)
            {
                var newEffect = new EffectEntry();
                existinEffects.Add(newEffect);
                new EffectReader().UpdateEntry(effect, newEffect);
            }
            mapping.Effects = existinEffects.OrderBy(x => x.FoundryId).ToList();

            UpdateInitializationFolder(pack, mapping);
        }
    }
}