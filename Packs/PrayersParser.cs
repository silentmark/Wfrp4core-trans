using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;


namespace WFRP4e.Translator.Packs
{
    public class PrayersParser : GenericParser<Entry>
    {
        public override void TranslatePack(JObject pack)
        {
            TranslatePack(pack, Mappings.Prayers.Values.ToList());
        }

        protected void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, translations);
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
            TranslateDescriptions(pack, translations);
        }
    }
}