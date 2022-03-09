using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class MutationsParser : GenericParser<Entry>
    {
        protected override string DbName => "mutations.db"; 
        
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
                        var effectLabel = effect["label"].ToString();
                        if (effectLabel == name)
                        {
                            effect["label"] = trans.Name;
                        }
                        else if(effectLabel == "Movement Bonus")
                        {
                            effect["label"] = "Bonus do Szybkości";
                        }
                        else if (effectLabel == "Frenzy")
                        {
                            effect["label"] = "Szał Bojowy";
                        }
                        else if (effectLabel == "Fatigued")
                        {
                            effect["label"] = "Zmęczenie";
                        }
                        else if (effectLabel == "Uneven Horns AP")
                        {
                            effect["label"] = "Nierówne rogi";
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