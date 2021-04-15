using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using org.pdfclown.documents.contents.colorSpaces;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class TalentsParser : GenericParser<TalentEntry>
    {
        protected override void TranslatePack(JObject pack, List<TalentEntry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = translations.FirstOrDefault(x => x.Id == name);
            if (trans != null)
            {
                pack["data"]["tests"]["value"] = trans.Tests;
                if (pack["effects"] != null)
                {
                    foreach (var effect in (JArray) pack["effects"])
                    {
                        if (effect["label"].Value<string>() == name)
                        {
                            effect["label"] = trans.Name;
                        }
                        else if (effect["label"].Value<string>() == "Opposed Bonus")
                        {
                            effect["label"] = "Bonus do Testu Przeciwstawnego";
                        }

                        if (effect["flags"] != null)
                        {
                            if (effect["flags"]["wfrp4e"] != null &&
                                effect["flags"]["wfrp4e"]["effectData"] != null &&
                                effect["flags"]["wfrp4e"]["effectData"]["description"] != null)
                            {
                                effect["flags"]["wfrp4e"]["effectData"]["description"] = TranslateEffectData(effect["flags"]["wfrp4e"]["effectData"]["description"].ToString());
                            }
                        }
                    }
                }
            }
            base.TranslatePack(pack, translations);
        }

        private string TranslateEffectData(string desc)
        {
            switch (desc)
            {
                case "Using Charm when Public Speaking before a crowd": return "Używanie Charyzmy podczas Publicznych Wystąpień przed tłumem";
                case "Opposed Strength Tests": return "Przeciwstawny Test Siły";
                case "Intimidate": return "Zastraszanie";
                case "Athletics Tests involving Leaping": return "Testy Atletyki podczas skoków";
                default:
                {
                    Console.WriteLine("Nie odnaleziono effect data dla: " + desc);
                    return desc;
                }
            }

        }

        protected override string DbName => "talents.db";
    }
}