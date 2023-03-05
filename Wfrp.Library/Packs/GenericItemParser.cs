using System;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("skill")]
    [FoundryType("critical")]
    [FoundryType("money")]
    [FoundryType("mutation")]
    [FoundryType("psychology")]
    [FoundryType("trapping")]
    [FoundryType("vehicleMod")]
    [FoundryType("container")]
    public class GenericItemParser
    {
        public static Entry GetEntryFromMappingDictionary(JObject pack)
        {
            var type = GenericReader.GetTypeFromJson(pack);
            var id = pack.Value<string>("_id");
            var mapping = (ItemEntry)(Mappings.TypeToMappingDictonary[type].First(x => x.Value.FoundryId == id).Value);
            return mapping;
        }

        public virtual void Parse(JObject pack, Entry mapping)
        {
            var type = GenericReader.GetTypeFromJson(pack);

            var id = pack.Value<string>("_id");
            if (string.IsNullOrEmpty(mapping.Name))
            {
                Console.WriteLine($"Nie odnaleziono tłumaczenia dla {mapping.OriginalName}, id {mapping.FoundryId} typu {mapping.Type}");
            }
            else
            {
                pack["name"] = mapping.Name;
            }
            pack["system"]["description"]["value"] = mapping.Description;
            pack["system"]["gmdescription"]["value"] = mapping.GmDescription;
            if (pack["flags"] == null)
            {
                pack["flags"] = new JObject();
            }
            if (pack["flags"]["core"] == null)
            {
                pack["flags"]["core"] = new JObject();
            }
            pack["flags"]["core"]["sourceId"] = mapping.OriginFoundryId;

            if (pack["effects"] == null)
            {
                pack["effects"] = new JArray();
            }

            foreach (JObject effect in (JArray)pack["effects"])
            {
                var mappingEffect = ((ItemEntry)mapping).Effects.FirstOrDefault(x => x.FoundryId == effect.Value<string>("_id"));
                if (mappingEffect == null)
                {
                    Console.WriteLine($"Nie odnaleziono tłumaczenia dla efektu: {effect.Value<string>("label")} o id: {effect.Value<string>("_id")} - Posiadane mapowanie: {mapping}");
                }
                else
                {
                    effect["label"] = mappingEffect.Name;
                    if (effect["flags"]?["wfrp4e"]?["effectData"]?["description"] != null)
                    {
                        effect["flags"]["wfrp4e"]["effectData"]["description"] = mappingEffect.Description;
                    }
                    if (effect["flags"]?["wfrp4e"]?["script"] != null)
                    {
                        effect["flags"]["wfrp4e"]["script"] = mappingEffect.Script;
                    }
                    if (effect["flags"]?["wfrp4e"]?["secondaryEffect"]?["script"] != null)
                    {
                        effect["flags"]["wfrp4e"]["secondaryEffect"]["script"] = mappingEffect.SecondaryScript;
                    }
                }
            }
        }
    }
}