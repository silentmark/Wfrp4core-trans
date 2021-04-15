using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class CriticalsParser  : GenericParser<Entry>
    {
        protected override void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = translations.FirstOrDefault(x => x.Id == name);
            foreach (var effect in (JArray)pack["effects"])
            {
                if (effect["label"].Value<string>() == name && trans != null)
                {
                    effect["label"] = trans.Name;
                }
            }
            base.TranslatePack(pack, translations);
        }

        protected override string DbName => "criticals.db";
    }
}
