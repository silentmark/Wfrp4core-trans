using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    public class EffectReader
    {
        public void UpdateEntry(JObject effect, EffectEntry newEffect)
        {
            newEffect.Name = effect.Value<string>("label");
            newEffect.Type = "effect";

            GenericReader.UpdateIfDifferent(newEffect, effect["_id"].ToString(), nameof(newEffect.FoundryId));
            GenericReader.UpdateIfDifferent(newEffect, effect["flags"]?["wfrp4e"]?["effectData"]?["description"]?.ToString(), nameof(newEffect.Description));
            GenericReader.UpdateIfDifferent(newEffect, effect["flags"]?["wfrp4e"]?["script"]?.ToString(), nameof(newEffect.Script));
            GenericReader.UpdateIfDifferent(newEffect, effect["flags"]?["wfrp4e"]?["secondaryEffect"]?["script"]?.ToString(), nameof(newEffect.SecondaryScript));
        }

        internal void UpdateEntryFromBabele(JObject babeleEffect, EffectEntry newEffect)
        {
            newEffect.Name = babeleEffect.Value<string>("label");
            newEffect.Script = babeleEffect.Value<string>("script");
        }
    }
}