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
    [FoundryType("npc")]
    [FoundryType("character")]
    [FoundryType("creature")]
    public class ActorReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, ActorEntry mapping)
        {
            mapping.Type = mapping.GetType() == typeof(CharacterEntry) ? "character" : (mapping.GetType() == typeof(NpcEntry) ? "npc" : "creature");
            return UpdateActorEntry(pack, mapping);
        }

        protected bool UpdateActorEntry(JObject pack, ActorEntry mapping)
        {
            var result = false;
            if (string.IsNullOrEmpty(mapping.OriginalName))
            {
                result = true;
                mapping.OriginalName = pack.Value<string>("name");
            }

            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId), ref result);
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId), ref result);
            UpdateIfDifferent(mapping, pack["system"]["details"]["biography"]["value"]?.ToString(), nameof(mapping.Description), ref result);
            UpdateIfDifferent(mapping, pack["system"]["details"]["gmnotes"]["value"]?.ToString(), nameof(mapping.GmDescription), ref result);
            UpdateIfDifferent(mapping, pack["system"]["details"]["species"]["value"]?.ToString(), nameof(mapping.Species), ref result);
            UpdateIfDifferent(mapping, pack["system"]["details"]["gender"]["value"]?.ToString(), nameof(mapping.Gender), ref result);

            var items = pack["items"].ToArray();
            var newMappingItems = new List<ItemEntry>();

            foreach (JObject item in items)
            {
                var type = GetTypeFromJson(item);
                var readerType = GetEntryType(type, typeof(GenericReader));
                var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                var method = readerType.GetMethod("UpdateEntry");
                var itemId = item.Value<string>("_id");

                var newSubEntry = mapping.Items.FirstOrDefault(x => x.FoundryId == itemId) ?? (ItemEntry)GetEntryType(type, typeof(ItemEntry)).GetConstructor(new Type[] { }).Invoke(new object[] { });
                newSubEntry.Type = type;
                newMappingItems.Add(newSubEntry);

                bool invokeUpdateEntry = true;
                if (string.IsNullOrEmpty(newSubEntry.OriginalName))
                {
                    newSubEntry.OriginalName = item.Value<string>("name");
                    result = true;

                    var sourceId = item["flags"]?["core"]?["sourceId"]?.ToString();
                    if (!string.IsNullOrEmpty(sourceId) && Mappings.TypeToMappingDictonary[type].ContainsKey(sourceId))
                    {
                        ItemEntry compendiumObject = (ItemEntry)Mappings.TypeToMappingDictonary[type][sourceId];

                        //We ignore this copy result, as it was already set to true, then, we prevent second copy to not overwrite translations from compendium item.
                        invokeUpdateEntry = false;
                        method.Invoke(reader, new object[] { item, newSubEntry });
                        ItemEntry.CloneItem(compendiumObject, newSubEntry);
                    }
                }
                if (invokeUpdateEntry)
                {
#pragma warning disable CS8605 // Unboxing a possibly null value.
                    result = (bool)method.Invoke(reader, new object[] { item, newSubEntry }) || result;
#pragma warning restore CS8605 // Unboxing a possibly null value.
                }
            }
            mapping.Items = newMappingItems;

            result = UpdateInitializationFolder(pack, mapping) || result;
            return result;
        }
    }
}