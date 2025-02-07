using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Entries;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace Wfrp.Library.Babele
{
    [FoundryType("skill")]
    [FoundryType("money")]
    [FoundryType("psychology")]
    [FoundryType("trapping")]
    [FoundryType("vehicleMod")]
    [FoundryType("container")]
    public class GenericItemBabeleGenerator
    {
        public virtual void Parse(JObject entry, JObject originalDbEntity, BaseEntry mapping)
        {
            entry["id"] = mapping.FoundryId;
            entry["name"] = mapping.Name;
            entry["description"] = mapping.Description ?? " ";
            if (mapping is ItemEntry itemEntry && !string.IsNullOrWhiteSpace(itemEntry.GmNotes))
            {
                entry["gmdescription"] = itemEntry.GmNotes;
            }
            entry["originalName"] = originalDbEntity["name"].ToString();
            entry["sourceId"] = mapping.OriginFoundryId ?? " ";
            if (mapping is ItemEntry item)
            {
                if (item.Effects?.Count > 0)
                {
                    var jEffects = new JObject();
                    entry["effects"] = jEffects;
                    foreach (var effect in item.Effects)
                    {
                        jEffects[effect.FoundryId] = new JObject()
                        {
                            ["id"] = effect.FoundryId,
                            ["name"] = effect.Name,
                        };
                        if (!string.IsNullOrEmpty(effect.Description))
                        {
                            jEffects[effect.FoundryId]["description"] = effect.Description;
                        }
                        if (!string.IsNullOrEmpty(effect.Filter))
                        {
                            jEffects[effect.FoundryId]["filter"] = effect.Filter;
                        }
                        if (!string.IsNullOrEmpty(effect.EnableConditionScript))
                        {
                            jEffects[effect.FoundryId]["enableConditionScript"] = effect.EnableConditionScript;
                        }
                        if (!string.IsNullOrEmpty(effect.PreApplyScript))
                        {
                            jEffects[effect.FoundryId]["preApplyScript"] = effect.PreApplyScript;
                        }
                        if (!string.IsNullOrEmpty(effect.AvoidTestScript))
                        {
                            jEffects[effect.FoundryId]["avoidTestScript"] = effect.AvoidTestScript;
                        }
                        if (effect.ScriptData != null)
                        {
                            var jArrScripts = new JArray();
                            jEffects[effect.FoundryId]["scriptData"] = jArrScripts;
                            foreach (var script in effect.ScriptData)
                            {
                                var jScript = new JObject
                                {
                                    ["id"] = effect.FoundryId,
                                    ["name"] = script.Name
                                };
                                jArrScripts.Add(jScript);
                                if (!string.IsNullOrEmpty(script.Script))
                                {
                                    jScript["script"] = script.Script;
                                }
                                if (!string.IsNullOrEmpty(script.ActivationScript))
                                {
                                    jScript["activationScript"] = script.ActivationScript;
                                }
                                if (!string.IsNullOrEmpty(script.HideScript))
                                {
                                    jScript["hideScript"] = script.HideScript;
                                }
                                if (!string.IsNullOrEmpty(script.SubmissionScript))
                                {
                                    jScript["submissionScript"] = script.SubmissionScript;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}