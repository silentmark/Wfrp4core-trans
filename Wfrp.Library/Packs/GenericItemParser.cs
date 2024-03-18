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
    [FoundryType("money")]
    [FoundryType("psychology")]
    [FoundryType("trapping")]
    [FoundryType("vehicleMod")]
    [FoundryType("container")]
    public class GenericItemParser
    {
        public virtual void Parse(JObject pack, BaseEntry mapping)
        {
            var type = GenericReader.GetTypeFromJson(pack);

            var id = pack.Value<string>("_id");
            pack["name"] = mapping.Name;
            pack["system"]["description"]["value"] = mapping.Description;
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
                    Console.WriteLine($"Nie odnaleziono tłumaczenia dla efektu: {effect.Value<string>("name")} o id: {effect.Value<string>("_id")} - Posiadane mapowanie: {mapping}");
                }
                else
                {
                    effect["name"] = mappingEffect.Name;
                    if (effect["flags"]?["wfrp4e"]?["effectData"]?["description"] != null)
                    {
                        effect["flags"]["wfrp4e"]["effectData"]["description"] = mappingEffect.Description;
                    }
                    if (effect["flags"]?["wfrp4e"]?["applicationData"]?["filter"] != null)
                    {
                        effect["flags"]["wfrp4e"]["applicationData"]["filter"] = mappingEffect.Filter;
                    }
                    if (effect["flags"]?["wfrp4e"]?["scriptData"] as JArray != null)
                    {
                        var jArr = effect["flags"]["wfrp4e"]["scriptData"] as JArray;
                        foreach (var script in mappingEffect.ScriptData)
                        {
                            JObject jObj = jArr.OfType<JObject>().FirstOrDefault(x => x["id"].ToString() == script.FoundryId);
                            if (jObj == null)
                            {
                                jObj["script"] = script.Script;
                                jObj["label"] = script.Name;
                                if (jObj["options"]?["dialog"]?["hideScript"] != null)
                                {
                                    jObj["options"]["dialog"]["hideScript"] = script.HideScript;
                                }
                                if (jObj["options"]?["dialog"]?["activateScript"] != null)
                                {
                                    jObj["options"]["dialog"]["activateScript"] = script.ActivationScript;
                                }
                                if (jObj["options"]?["dialog"]?["submissionScript"] != null)
                                {
                                    jObj["options"]["dialog"]["submissionScript"] = script.SubmissionScript;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}