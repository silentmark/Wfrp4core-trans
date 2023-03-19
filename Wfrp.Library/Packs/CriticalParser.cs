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
    [FoundryType("critical")]
    public class CriticalParser : GenericItemParser
    {
        public override void Parse(JObject pack, BaseEntry entry)
        {
            base.Parse(pack, entry);

            var mapping = (CriticalEntry)entry;

            if (pack["system"]?["wounds"]?["value"] != null)
            {
                pack["system"]["wounds"]["value"] = mapping.Wounds;
            }
            if (pack["system"]?["location"]?["value"] != null)
            {
                pack["system"]["location"]["value"] = TranslateLocation(pack["system"]["location"]["value"].Value<string>());
            }
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

                case "Ręka": return "Ręka";
                case "Noga": return "Noga";
                case "Korpus": return "Korpus";
                case "Głowa": return "Głowa";
                case "Oko": return "Oko";
                case "Ucho": return "Ucho";
                case "Nos": return "Nos";
                case "Palec": return "Palec";
                case "Palec u nogi": return "Palec u nogi";
                case "Palce u nogi": return "Palce u nogi";
                case "Zęby": return "Zęby";
                case "Stopa": return "Stopa";
                case "Dłoń": return "Dłoń";
                case "Język": return "Język";
                default:
                    {
                        Console.WriteLine("NIE ODNALEZIONO LOKACJI: " + location);
                        return location;
                    }
            }
        }
    }
}