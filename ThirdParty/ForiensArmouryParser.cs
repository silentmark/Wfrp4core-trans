using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class Armoury
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Qualities { get; set; }

        public string Flaws { get; set; }

        public string Special { get; set; }
    }

    public class ForiensArmouryParser
    {
        public void Parse()
        {
            var translation = JsonConvert.DeserializeObject<List<Armoury>>(File.ReadAllText(@"C:\Code\WFRP\wfrp4e-forien-armoury\packs\pl\armoury.json"));

            Console.WriteLine($@"Przetwarzam Armoury, znaleziono {translation.Count} wpisów w json");
            var packs = File.ReadAllLines(@"C:\Code\WFRP\wfrp4e-forien-armoury\packs\armoury.db");
            var packsArmoury = packs.Select(pack => JObject.Parse(pack)).ToList();
            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {packsArmoury.Count} wpisów w db");

            foreach (var pack in packsArmoury)
            {
                var name = pack.Value<string>("name");
                var polish = translation.FirstOrDefault(x => x.Id == name);
                if (polish == null)
                {
                    Console.WriteLine($"NIE ODNALEZIONO: {name}");
                }
                else
                {
                    Console.WriteLine($"Przedmiot {name.PadRight(30)} tłumaczę na: {polish.Name}");
                    pack["name"] = polish.Name;
                    pack["data"]["description"]["value"] = polish.Description;
                    if (pack["data"]["qualities"] != null)
                    {
                        pack["data"]["qualities"]["value"] = polish.Qualities;
                    }
                    if (pack["data"]["flaws"] != null)
                    {
                        pack["data"]["flaws"]["value"] = polish.Flaws;
                    }
                    if (pack["data"]["special"] != null)
                    {
                        pack["data"]["special"]["value"] = polish.Special;
                    }
                }
            }

            foreach (var pack in packsArmoury.OrderBy(x=>x["name"].ToString()))
            {
                File.AppendAllLines($@"{Program.Configuration.GetSection("OutputPath").Value}\armoury.db",
                    new[] {JsonConvert.SerializeObject(pack, Formatting.None)});
            }
        }

        private object TranslateTalentSpec(string searchSpec)
        {
            switch (searchSpec)
            {
                case "Any": return "Dowolny";
                case "any": return "Dowolny";
                case "Sight": return "Wzrok";
                case "Taste or Touch": return "Wzrok lub Dotyk";
                case "Taste": return "Smak";
                case "Any Arcane Lore": return "Dowolny";
                case "Celestial": return "Niebios";
                case "Hedgecraft": return "Guślarstwo";
                case "Witchery": return "Wiedźmy";
                case "Apothecary": return "Aptekarstwo";
                case "Boatbuilder": return "Szkutnictwo";
                case "Engineer": return "Inżynieria";
                case "Explosives": return "Materiały Wybuchowe";
                case "Herbalist": return "Zielarstwo";
                case "Criminals": return "Przestępcy";
                case "Cultists": return "Kultyści";
                case "Guilder": return "Gildia";
                case "Guilders": return "Gildia";
                case "Nobles": return "Szlachta";
                case "Scholar": return "Uczeni";
                case "Scholars": return "Uczeni";
                case "Servants": return "Służący";
                case "Soldiers": return "Żołnierze";
                case "Animals": return "Zwierzęta";
                case "Beastmen": return "Zwierzoludzie";
                case "Bounties": return "Poszukiwani";
                case "Everything": return "Wszystko!";
                case "Heretics": return "Heretycy";
                case "Intruders": return "Intruzi";
                case "Monsters": return "Potwory";
                case "Outlaws": return "Wyjęci spod Prawa";
                case "Rats": return "Szczury";
                case "Riverwardens": return "Strażnicy Rzeczni";
                case "Road Wardens": return "Strażnicy Dróg";
                case "Skaven": return "Skaveni";
                case "Undead": return "Nieumarli";
                case "Watchmen": return "Strażnicy Miejscy";
                case "Witches": return "Wiedźmy";
                case "Wreckers": return "Wraki";
                case "Poisoner": return "Więźniowie";
                case "Disease": return "Choroby";
                case "Poison": return "Trucizny";
                case "Engineering": return "Inżynieria";
                case "Herbs": return "Zioła";
                case "Law": return "Prawo";
                case "Local": return "Lokalne";
                case "local": return "Lokalne";
                case "Medicine": return "Medycyna";
                case "Riverways": return "Rzeki";
                case "Theology": return "Teologia";
                case "Coastal": return "Wybrzeże";
                case "Marshes": return "Mokradła";
                case "Rocky": return "Tereny Skaliste";
                case "Woodlands": return "Tereny Leśne";
                default:
                {
                    Console.WriteLine("NIE ODNALEZIONO: " + searchSpec);
                    return searchSpec;
                }
            }
        }

        private string ReplaceCareer(string className)
        {
            switch (className)
            {
                case "Academic": return "Uczony";
                case "Academics": return "Uczony";
                case "Burgher": return "Mieszczanin";
                case "Courtier": return "Dworzanin";
                case "Peasant": return "Pospólstwo";
                case "Peasants": return "Pospólstwo";
                case "Ranger": return "Wędrowiec";
                case "Riverfolk": return "Wodniak";
                case "Rogue": return "Łotr";
                case "Rogues": return "Łotr";
                case "Warrior": return "Wojownik";
                default:
                {
                    Console.WriteLine("NIE ODNALEZIONO KLASY: " + className);
                    return className;
                }
            }
        }
    }
}
