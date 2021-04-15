using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class TraitsParser : GenericParser<Entry>
    {
        protected override string DbName => "traits.db";

        protected override void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = translations.FirstOrDefault(x => x.Id == name);
            if (trans != null)
            {
                if (pack["effects"] != null)
                {
                    foreach (var effect in (JArray)pack["effects"])
                    {
                        if (effect["label"].Value<string>() == name)
                        {
                            effect["label"] = trans.Name;
                        }
                        else if (effect["label"].Value<string>() == "Swarm Bonuses")
                        {
                            effect["label"] = "Bonusy Roju";
                        }
                    }
                }
            }
            base.TranslatePack(pack, translations);
        }
    }
}