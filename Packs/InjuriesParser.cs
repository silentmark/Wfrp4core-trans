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
    [FoundryType("injury")]
    public class InjuriesParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            base.Parse(pack, entry);

            var pathToData = GenericReader.GetPathToData(pack);
            var mapping = (InjuryEntry)entry;


            pack[pathToData]["penalty"]["value"] = mapping.Penalty;
            pack[pathToData]["location"]["value"] = TranslateLocation(pack[pathToData]["location"]["value"].Value<string>());
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
