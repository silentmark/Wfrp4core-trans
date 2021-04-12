using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using Pdf.Json;

namespace Pdf.Logic
{
    public class CriticalsParser  : GenericParser<Entry>
    {
        protected override void TranslatePack(JObject pack, List<Entry> translations)
        {
            base.TranslatePack(pack, translations);

            var name = pack.Value<string>("name");
            var trans = translations.FirstOrDefault(x => x.Id == name);
            foreach (var effect in (JArray)pack["effects"])
            {
                if (effect["label"].Value<string>() == name && trans != null)
                {
                    effect["label"] = trans.Name;
                }
            }
        }

        protected override string DbName => "criticals.db";
    }
}
