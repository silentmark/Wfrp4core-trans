using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class EffectReader
    {
        public void UpdateEntry(JObject effect, EffectEntry newEffect, bool onlyNulls)
        {
            newEffect.Name = onlyNulls ? (newEffect.Name ?? effect.Value<string>("name")) : effect.Value<string>("name");
            newEffect.Type = "effect";

            GenericReader.UpdateIfDifferent(newEffect, effect["_id"].ToString(), nameof(newEffect.FoundryId), onlyNulls);
            GenericReader.UpdateIfDifferent(newEffect, effect["description"].ToString(), nameof(newEffect.Description), onlyNulls);
            GenericReader.UpdateIfDifferent(newEffect, effect["flags"]?["wfrp4e"]?["applicationData"]?["filter"]?.ToString(), nameof(newEffect.Filter), onlyNulls);
            var scriptData = effect["flags"]?["wfrp4e"]?["scriptData"] as JArray;
            if (scriptData != null)
            {
                var listToRemove = newEffect.ScriptData?.ToList() ?? new List<ScriptDataEntry>();
                foreach (JObject script in scriptData.OfType<JObject>())
                {
                    var id = script["label"]?.ToString();
                    newEffect.ScriptData = newEffect.ScriptData ?? new List<ScriptDataEntry>();
                    var existingScript = newEffect.ScriptData.FirstOrDefault(x => x.FoundryId == id);
                    if (existingScript == null)
                    {
                        existingScript = new ScriptDataEntry();
                        existingScript.FoundryId = id;
                        existingScript.Name = id;
                        newEffect.ScriptData.Add(existingScript);
                    }
                    listToRemove.Remove(existingScript);
                    GenericReader.UpdateIfDifferent(existingScript, script["script"]?.ToString(), nameof(existingScript.Script), onlyNulls);
                    GenericReader.UpdateIfDifferent(existingScript, script["options"]?["dialog"]?["hideScript"]?.ToString(), nameof(existingScript.HideScript), onlyNulls);
                    GenericReader.UpdateIfDifferent(existingScript, script["options"]?["dialog"]?["activateScript"]?.ToString(), nameof(existingScript.ActivationScript), onlyNulls);
                    GenericReader.UpdateIfDifferent(existingScript, script["options"]?["dialog"]?["submissionScript"]?.ToString(), nameof(existingScript.SubmissionScript), onlyNulls   );
                }
                foreach (var scriptDataEntry in listToRemove)
                {
                    newEffect.ScriptData.Remove(scriptDataEntry);
                }
            }
        }

        internal void UpdateEntryFromBabele(JObject babeleEffect, EffectEntry newEffect)
        {
            newEffect.Name = babeleEffect.Value<string>("name");
            newEffect.Description = babeleEffect.Value<string>("description");

            newEffect.Filter = babeleEffect.Value<string>("filter");
            if (babeleEffect["scriptData"] is JArray jArr && jArr.Count > 0)
            {
                newEffect.ScriptData = newEffect.ScriptData ?? new List<ScriptDataEntry>();
                foreach (JObject jObj in jArr)
                {
                    var existingScript = newEffect.ScriptData.FirstOrDefault(x => x.FoundryId == jObj["id"]?.ToString()) ?? new ScriptDataEntry();

                    existingScript.Name = jObj["name"]?.ToString();
                    existingScript.Script = jObj["name"]?.ToString();
                    existingScript.HideScript = jObj["hideScript"]?.ToString();
                    existingScript.SubmissionScript = jObj["submissionScript"]?.ToString();
                    existingScript.ActivationScript = jObj["activateScript"]?.ToString();
                    if (string.IsNullOrEmpty(existingScript.FoundryId))
                    {
                        existingScript.FoundryId = jObj["id"]?.ToString();
                        newEffect.ScriptData.Add(existingScript);
                    }
                }
            }
        }
    }
}