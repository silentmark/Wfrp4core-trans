using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Entries;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace Wfrp.Library.Packs
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
            if (mapping is ItemEntry itemEntry && !string.IsNullOrEmpty(itemEntry.GmNotes))
            {
                pack["system"]["gmdescription"]["value"] = itemEntry.GmNotes;
            }
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
                    if (effect["transferData"]?["filter"] != null)
                    {
                        effect["transferData"]["filter"] = mappingEffect.Filter;
                    }
                    if (effect["transferData"]?["enableConditionScript"] != null)
                    {
                        effect["transferData"]["enableConditionScript"] = mappingEffect.EnableConditionScript;
                    }
                    if (effect["transferData"]?["preApplyScript"] != null)
                    {
                        effect["transferData"]["preApplyScript"] = mappingEffect.PreApplyScript;
                    }
                    if (effect["transferData"]?["avoidTest"]?["script"] != null)
                    {
                        effect["transferData"]["avoidTest"]["script"] = mappingEffect.AvoidTestScript;
                    }
                    if (effect["scriptData"] as JArray != null)
                    {
                        var jArr = effect["scriptData"] as JArray;
                        foreach (var script in mappingEffect.ScriptData)
                        {
                            var jObj = jArr.OfType<JObject>().FirstOrDefault(x => x["id"].ToString() == script.FoundryId);
                            if (jObj == null)
                            {
                                jObj["script"] = script.Script;
                                jObj["label"] = script.Name;
                                if (jObj["options"]?["hideScript"] != null)
                                {
                                    jObj["options"]["hideScript"] = script.HideScript;
                                }
                                if (jObj["options"]?["activateScript"] != null)
                                {
                                    jObj["options"]["activateScript"] = script.ActivationScript;
                                }
                                if (jObj["options"]?["submissionScript"] != null)
                                {
                                    jObj["options"]["submissionScript"] = script.SubmissionScript;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}