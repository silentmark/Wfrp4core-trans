using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class InjuriesParser : GenericParser<Entry>
    {
        public override void TranslatePack(JObject pack)
        {
            TranslatePack(pack, Mappings.Injuries.Values.ToList());
        }

        protected void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, translations);
            if (trans != null)
            {
                pack["system"]["location"]["value"] = TranslateLocation(pack["system"]["location"]["value"].ToString());

                if (pack["effects"] != null)
                {
                    foreach (var effect in (JArray)pack["effects"])
                    {
                        var el = effect["label"].ToString();
                        if (el == name)
                        {
                            effect["label"] = trans.Name;
                        }
                        else if (el == "Broken Arm")
                        {
                            effect["label"] = "Złamana Ręka";
                        }
                        else if (el == "Broken Body")
                        {
                            effect["label"] = "Złamane Żebra";
                        }
                        else if (el == "Broken Leg")
                        {
                            effect["label"] = "Złamana Noga";
                        }
                        else if (el == "Broken Head")
                        {
                            effect["label"] = "Pęknięta Czaszka";
                        }
                        else if (el == "Lost Both Ears")
                        {
                            effect["label"] = "Utracone Oboje Uszu";
                        }
                        else if (el == "Lost Both Eyes")
                        {
                            effect["label"] = "Utracone Oboje Oczu";
                        }
                        else if (el == "Lost Ear")
                        {
                            effect["label"] = "Utracone Ucho";
                        }
                        else if (el == "Lost Eye")
                        {
                            effect["label"] = "Utracone Oko";
                        }
                        else if (el == "Lost Fingers")
                        {
                            effect["label"] = "Utracony Palec";
                        }
                        else if (el == "Movement Penalty")
                        {
                            effect["label"] = "Kara do Poruszania się";
                        }
                        else if (el == "Movement Halved")
                        {
                            effect["label"] = "Szybkość Zmniejszona o Połowę";
                        }
                        else if (el == "Torn Arm Muscle")
                        {
                            effect["label"] = "Naderwany Mięsień Ręki";
                        }
                        else if (el == "Torn Body Muscle")
                        {
                            effect["label"] = "Naderwany Mięsień Brzucha";
                        }
                        else if (el == "Torn Head Muscle")
                        {
                            effect["label"] = "Naderwany Mięsień Szyi";
                        }
                        else if (el == "Torn Leg Muscle")
                        {
                            effect["label"] = "Naderwany Mięsień Nogi";
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

        public static string TranslateLocation(string location)
        {
            switch (location)
            {
                case "Arm": return "Ręka";
                case "Leg": return "Noga";
                case "Body": return "Korpus";
                case "Head": return "Głowa";
                case "Eye": return "Oko";
                case "Ear": return "Ucho";
                case "Nose": return "Nos";
                case "Finger": return "Palec";
                case "Toe": return "Palec u nogi";
                case "Toes": return "Palce u nogi";
                case "Teeth": return "Zęby";
                case "Foot": return "Stopa";
                case "Hand": return "Dłoń";
                case "Tongue": return "Język";
                default:
                {
                    Console.WriteLine("NIE ODNALEZIONO LOKACJI: " + location);
                    return location;
                }
            }
        }
    }
}
