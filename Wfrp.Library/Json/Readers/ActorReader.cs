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
        public void UpdateEntry(JObject pack, ActorEntry mapping, bool onlyNulls = false)
        {
            mapping.Type = mapping.GetType() == typeof(CharacterEntry) ? "character" : (mapping.GetType() == typeof(NpcEntry) ? "npc" : "creature");
            UpdateActorEntry(pack, mapping, onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, ActorEntry mapping)
        {
            UpdateActorEntryFromBabele(pack, mapping);
        }

        protected void UpdateActorEntry(JObject pack, ActorEntry mapping, bool onlyNulls)
        {
            mapping.Name = onlyNulls ? mapping.Name ?? pack.Value<string>("name") : pack.Value<string>("name");
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]["details"]["biography"]["value"]?.ToString(), nameof(mapping.Description), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]["details"]["species"]["value"]?.ToString(), nameof(mapping.Species), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]["details"]["gender"]["value"]?.ToString(), nameof(mapping.Gender), onlyNulls);

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
                        OriginFoundryId = matchingValue.Value.OriginFoundryId?.Replace(".items.Item.", ".items.")
                    });
                }
                else
                {
                    value = Mappings.OriginalTypeToMappingDictonary[type].Where(x => x.Value.Name == item.Value<string>("name")).ToList();
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
                                OriginFoundryId = matchingValue.Value.OriginFoundryId?.Replace(".items.Item.", ".items.")
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
                        if (!onlyNulls)
                        {
                            var newSubEntry = (ItemEntry)GetEntryType(type, typeof(ItemEntry)).GetConstructor(new Type[] { }).Invoke(new object[] { });
                            newSubEntry.Type = type;
                            newMappingItems.Add(newSubEntry);
                            method.Invoke(reader, new object[] { item, newSubEntry, onlyNulls });
                        }
                        else
                        {
                            var newSubEntry = mapping.Items.FirstOrDefault(x=>x.FoundryId == itemId) ?? (ItemEntry)GetEntryType(type, typeof(ItemEntry)).GetConstructor(new Type[] { }).Invoke(new object[] { });
                            newSubEntry.Type = type;
                            newMappingItems.Add(newSubEntry);
                            method.Invoke(reader, new object[] { item, newSubEntry, onlyNulls });
                        }
                    }
                }
            }
            mapping.Items = newMappingItems;
        }

        protected void UpdateActorEntryFromBabele(JObject babeleEntry, ActorEntry mapping)
        {
            mapping.Name = babeleEntry.Value<string>("name");
            UpdateIfDifferent(mapping, babeleEntry["description"].ToString(), nameof(mapping.Description), false);
            UpdateIfDifferent(mapping, babeleEntry["species"]?.ToString(), nameof(mapping.Species), false);
            UpdateIfDifferent(mapping, babeleEntry["gender"]?.ToString(), nameof(mapping.Gender), false);

            var items = (JObject)babeleEntry["items"];
            //var newMappingItems = new List<Entry>();

            foreach (var item in items.Properties())
            {
                var foundryId = item.Name;
                var jItem = (JObject)item.Value;
                var mappingItem = mapping.Items.FirstOrDefault(x => x.FoundryId == foundryId);
                if (mappingItem == null)
                {
                    Console.WriteLine("Nie znaleziono przedmiotu dla mapowania: " + foundryId + " u aktora: " + mapping.FoundryId);
                }

                if (mappingItem != null)
                {
                    if (mappingItem.Type == "trait")
                    {
                        if (!string.IsNullOrEmpty(jItem.Value<string>("name")))
                        {
                            new TraitReader().UpdateEntryFromBabele(jItem, (TraitEntry)mappingItem);
                        }
                        else
                        {
                            UpdateIfDifferent((TraitEntry)mappingItem, jItem["specification"]?.ToString(), nameof(TraitEntry.Specification), false);
                        }
                    }
                    else if (mappingItem.Type == "skill")
                    {
                        new SkillReader().UpdateEntryFromBabele(jItem, (SkillEntry)mappingItem);
                    }
                    else if (mappingItem.Type == "talent")
                    {
                        new TalentReader().UpdateEntryFromBabele(jItem, (TalentEntry)mappingItem);
                    }
                    else if (mappingItem.Type == "weapon")
                    {
                        new WeaponReader().UpdateEntryFromBabele(jItem, (WeaponEntry)mappingItem);
                    }
                    else if (mappingItem.Type == "Referenced")
                    {
                    }
                    else
                    {
                    }
                }
            }
        }
    }
}