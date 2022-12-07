using System;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("trait")]
    public class TraitsParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            base.Parse(pack, entry);

            var pathToData = GenericReader.GetPathToData(pack);
            var mapping = (TraitEntry)entry;
                    
            if (pack[pathToData]?["specification"]?["value"] != null)
            {
                var specification = pack[pathToData]?["specification"]?["value"].Value<string>();
                var newSpec = TranslateSpecification(specification);
                if(specification == newSpec)
                {
                    newSpec = mapping.Specification;
                }
                pack[pathToData]["specification"]["value"] = newSpec;
            }
        }

        public static string TranslateSpecification(string spec)
        {
            switch (spec)
            {
                case "Tiny": return "Drobny";
                case "Little": return "Niewielki";
                case "Small": return "Mały";
                case "Average": return "Średni";
                case "Large": return "Duży";
                case "Enormous": return "Wielki";
                case "Monstrous": return "Monstrualny";
                case "Target": return "Cel";
                case "Corruption Strength": return "Siła Korupcji";
                case "Damage": return "Obrażenia";
                case "Deity": return "Bóstwo";
                case "Diety": return "Bóstwo";
                case "Difficulty": return "Trudność";
                case "Lore": return "Tradycja";
                case "Rating": return "Wartość";
                case "Size": return "Rozmiar";
                case "Target #": return "Wartość #";
                case "Trained Skills": return "Wyszkolona Umiejętność";
                case "Type": return "Typ";
                case "#": return "#";
                case "# ": return "#";
                case "# (Type)": return "# (Typ)";
                case "0": return "0";
                case "12": return "12";
                case "1": return "1";
                case "10": return "10";
                case "100": return "100";
                case "120": return "120";
                case "2": return "2";
                case "3": return "3";
                case "4": return "4";
                case "40": return "40";
                case "5": return "5";
                case "6": return "6";
                case "7+": return "7+";
                case "8+": return "8+";
                case "80": return "8+";
                case "90": return "90";
                case "+4": return "+4";
                case "+12": return "+12";

                case "Any": return "Dowolny";
                case "Any Chaos": return "Dowolny - Chaos";
                case "Any Lore": return "Dowolna Tradycja";
                case "Bailiffs, Lawyers": return "Komornicy, Prawnicy";
                case "Beasts": return "Zwierząt";
                case "Broken": return "Panika";
                case "Challenging": return "Wymagający";
                case "Chaos": return "Chaos";
                case "Choose one": return "Dowolny";
                case "Choose two": return "Dowolne dwa";
                case "Daemonology": return "Demonologia";
                case "Difficult": return "Problematyczny";
                case "Drive": return "Powożenie";
                case "Dwarfs": return "Krasnoludy";
                case "Easy": return "Łatwy";
                case "Elves": return "Elfy";
                case "Entertain": return "Występy";
                case "Everything": return "Wszystko";
                case "Death": return "Śmierci";
                case "Fetch": return "Przynieś";
                case "Guard": return "Strzeż";
                case "Home": return "Droga do domu";
                case "Greenskins": return "Zielonoskórzy";
                case "Hard": return "Trudny";
                case "Itching Pox": return "Sierściawka";
                case "Living": return "Żyjący";
                case "Magic": return "Magiczny";
                case "Major": return "Poważna";
                case "Minor": return "Pomniejsza";
                case "Moderate": return "Nienadzwyczajna";
                case "Mount": return "Wierzchowiec";
                case "Necromancy": return "Nekromancja";
                case "Nurgle": return "Nurgle";
                case "Packer's Pox": return "Sierściawka";
                case "Poison": return "Trucizna";
                case "Predators": return "Drapieżnicy";
                case "Ratte Fever": return "Szczurza Gorączka";
                case "Shadow": return "Cieni";
                case "Sigmarites": return "Sigmaryci";
                case "Slaanesh": return "Slaanesh";
                case "The Black Plague": return "Czarna Dżuma";
                case "the Rich, Beastmen": return "Bogacze, Zwierzoludzie";
                case "Thin People": return "Chudzielcy";
                case "Various": return "Różne";
                case "Venom": return "Jad";
                case "Very Easy": return "Bardzo Prosty";
                case "Very Hard": return "Bardzo Trudny";
                case "War": return "Wojna";
                case "Witch": return "Wiedźmy";

                case "Rude People": return "Nieuprzejmi ludzie";
                case "6+": return "6+";
                case "9": return "9";
                default:
                {
                    //Console.WriteLine("Nie odnaleziono effect data dla: " + spec);
                    return spec;
                }
            }
        }

    }
}