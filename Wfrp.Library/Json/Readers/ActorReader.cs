using Newtonsoft.Json.Linq;
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

                var value = Mappings.OriginalTypeToMappingDictonary[type].Where(x => x.Value.Name == item.Value<string>("name")).ToList();
                value.AddRange(Mappings.TranslatedTypeToMappingDictonary[type].Where(x => x.Value.Name == item.Value<string>("name")).ToList());
                if (value.Count > 0)
                {
                    newMappingItems.Add(new ReferenceEntry
                    {
                        FoundryId = itemId,
                        OriginFoundryId = string.Join(";", value.Select(x => x.Value.OriginFoundryId).Distinct())
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