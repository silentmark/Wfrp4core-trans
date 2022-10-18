using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class CriticalsParser  : GenericParser<Entry>
    {
        public override void TranslatePack(JObject pack)
        {
            TranslatePack(pack, Mappings.Criticals.Values.ToList());
        }

        protected void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, translations);
            if (trans != null)
            {
                pack["system"]["location"]["value"] = InjuriesParser.TranslateLocation(pack["system"]["location"]["value"].ToString());

                if (pack["effects"] != null)
                {
                    foreach (var effect in (JArray)pack["effects"])
                    {
                        var el = effect["label"].ToString();
                        if (el == name)
                        {
                            effect["label"] = trans.Name;
                        }
                        else if (el == "Bleeding")
                        {
                            effect["label"] = "Krwawienie";
                        }
                        else if (el == "Blinded")
                        {
                            effect["label"] = "Oślepienie";
                        }
                        else if (el == "Concussive Blow - Fatigued Effect")
                        {
                            effect["label"] = "Wstrząśnienie mózgu - Zmęczenie";
                        }
                        else if (el == "Deafened")
                        {
                            effect["label"] = "Ogłuszenie";
                        }
                        else if (el == "Fatigued")
                        {
                            effect["label"] = "Zmęczenie";
                        }
                        else if (el == "Movement Halved")
                        {
                            effect["label"] = "Szybkość zmniejszona o połowę";
                        }
                        else if (el == "Prone")
                        {
                            effect["label"] = "Powalenie";
                        }
                        else if (el == "Stunned")
                        {
                            effect["label"] = "Oszołomienie";
                        }
                        else if (el == "Unconscious")
                        {
                            effect["label"] = "Nieprzytomny";
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
