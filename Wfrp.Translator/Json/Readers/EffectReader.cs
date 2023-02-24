using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class EffectReader
    {
        public bool UpdateEntry(JObject effect, EffectEntry newEffect)
        {
            var result = false;
            if (string.IsNullOrEmpty(newEffect.OriginalName))
            {
                result = true;
                newEffect.OriginalName = effect.Value<string>("label");
            }

            newEffect.Type = "effect";

            GenericReader.UpdateIfDifferent(newEffect, effect["_id"].ToString(), nameof(newEffect.FoundryId), ref result);
            GenericReader.UpdateIfDifferent(newEffect, effect["flags"]?["wfrp4e"]?["effectData"]?["description"]?.ToString(), nameof(newEffect.Description), ref result);
            GenericReader.UpdateIfDifferent(newEffect, effect["flags"]?["wfrp4e"]?["script"]?.ToString(), nameof(newEffect.Script), ref result);
            GenericReader.UpdateIfDifferent(newEffect, effect["flags"]?["wfrp4e"]?["secondaryEffect"]?["script"]?.ToString(), nameof(newEffect.SecondaryScript), ref result);

            return result;
        }
    }
}