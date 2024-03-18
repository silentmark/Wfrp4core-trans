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
    public class GenericItemBabeleGenerator
    {
        public virtual void Parse(JObject entry, JObject originalDbEntity, BaseEntry mapping)
        {
            entry["id"] = mapping.FoundryId;
            entry["name"] = mapping.Name;
            entry["description"] = mapping.Description ?? string.Empty;
            entry["originalName"] = originalDbEntity["name"].ToString();
            entry["sourceId"] = mapping.OriginFoundryId ?? string.Empty;
            if (mapping is ItemEntry)
            {
                var item = (ItemEntry)mapping;
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
                        if (effect.ScriptData != null)
                        {
                            var jArrScripts = new JArray();
                            jEffects[effect.FoundryId]["scriptData"] = jArrScripts;
                            foreach (var script in effect.ScriptData)
                            {
                                var jScript = new JObject();
                                jScript["id"] = effect.FoundryId;
                                jScript["name"] = effect.Name;
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