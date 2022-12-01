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
    public class EffectReader
    {

        public void UpdateEntry(JObject effect, EffectEntry newEffect)
        {
            newEffect.FoundryId = effect.Value<string>("_id");
            newEffect.Description = effect["flags"]?["wfrp4e"]?["effectData"]?["description"]?.Value<string>();
            newEffect.Name = effect["label"].Value<string>();
            newEffect.Script = effect["flags"]?["wfrp4e"]?["script"]?.Value<string>();
            newEffect.SecondaryScript = effect["flags"]?["wfrp4e"]?["secondaryEffect"]?["script"]?.Value<string>();
            newEffect.Type = "effect";
        }
    }
}