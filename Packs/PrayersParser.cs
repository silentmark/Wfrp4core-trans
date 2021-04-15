using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class PrayersParser : GenericParser<Entry>
    {
        protected override string DbName => "prayers.db";
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
                        else if (effect["label"].ToString() == "Movement Increase")
                        {
                            effect["label"] = "Zwiększenie Szybkości";
                        }
                        else if (effect["label"].ToString() == "Catfall")
                        {
                            effect["label"] = "Na Cztery Łapy";
                        }
                        else
                        {
                            Console.WriteLine("NIE ODNALEZIONO: " + effect["label"]);
                        }
                    }
                }
            }
            base.TranslatePack(pack, translations);
        }
    }
}