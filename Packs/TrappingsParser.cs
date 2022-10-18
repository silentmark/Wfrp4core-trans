using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class TrappingsParser : GenericParser<Entry>
    {
        public override void TranslatePack(JObject pack)
        {
            TranslatePack(pack, Mappings.Trappings.Values.ToList());
        }

        protected  void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, translations);
            if (pack["system"]["qualities"] != null && pack["system"]["qualities"]["value"] != null)
            {
                try
                {
                    var quals = (JArray)pack["system"]["qualities"]["value"];
                    foreach (JObject qual in quals)
                    {
                        qual["display"] = TranslateQualityFlaw(qual["name"].ToString());
                    }
                }
                catch(Exception)
                {
                    Console.WriteLine($"Problem z cechami: {name}");
                }
            }
            if (pack["system"]["flaws"] != null && pack["system"]["flaws"]["value"] != null)
            {
                try
                {
                    var flaws = (JArray)pack["system"]["flaws"]["value"];
                    foreach (var flaw in flaws)
                    {
                        flaw["display"] = TranslateQualityFlaw(flaw["name"].ToString());
                    }
                }
                catch (Exception)
                {
                    Console.WriteLine($"Problem z cechami: {name}");
                }
            }

            if (pack["effects"] != null)
            {
                foreach (var effect in (JArray) pack["effects"])
                {
                    if (effect["label"].Value<string>() == name)
                    {
                        if (trans != null)
                        {
                            effect["label"] = trans.Name;
                        }
                    }
                }
            }
            TranslateDescriptions(pack, translations);
        }

        public static string TranslateQualityFlaw(string qual)
        {
            Console.WriteLine($"Tłumaczę cechę: {qual}");
            switch (qual)
            {
                case "accurate": return "Celna";
                case "blackpowder": return "Prochowa";
                case "blast": return "Odłamkowa";
                case "damaging": return "Przebijająca";
                case "defensive": return "Parująca";
                case "entangle": return "Unieruchamiająca";
                case "fast": return "Szybka";
                case "hack": return "Rąbiąca";
                case "impact": return "Druzgocząca";
                case "impale": return "Nadziewająca";
                case "penetrating": return "Przekłuwająca";
                case "pistol": return "Pistolety";
                case "precise": return "Precyzyjna";
                case "pummel": return "Ogłuszająca";
                case "repeater": return "Wielostrzał";
                case "shield": return "Tarcza";
                case "trapblade": return "Łamacz mieczy";
                case "unbreakable": return "Niełamliwa";
                case "wrap": return "Plącząca";
                case "dangerous": return "Niebezpieczna";
                case "imprecise": return "Nieprecyzyjna";
                case "reload": return "Przeładowanie";
                case "slow": return "Powolna";
                case "tiring": return "Ciężka";
                case "undamaging": return "Tępa";
                case "ugly": return "Brzydki";
                case "shoddy": return "Tandetny";
                case "unreliable": return "Zawodny";
                case "bulky": return "Nieporęczny";
                case "durable": return "Wytrzymały";
                case "fine": return "Wyśmienity";
                case "lightweight": return "Poręczny";
                case "practical": return "Praktyczny";
                case "distract": return "Rozpraszający";
                case "flexible": return "Giętki";
                case "impenetrable": return "Nieprzebijalny";
                case "partial": return "Częściowy";
                case "weakpoints": return "Wrażliwe punkty";
                case "slashing": return "Tnący";
                case "recoverable": return "Odzyskiwalny";
                case "unrecoverable": return "Nieodzyskiwalny";
                case "sturdy": return "Solidny";
                case "frail": return "Kruchy";
                default:
                {
                    if (qual.StartsWith("Reload"))
                    {
                        return qual.Replace("Reload", "Przeładowanie");
                    }

                    if (qual.StartsWith("Blast"))
                    {
                        return qual.Replace("Blast", "Odłamkowa");
                    }

                    if (qual.StartsWith("Repeater"))
                    {
                        return qual.Replace("Repeater", "Wielostrzał");
                    }

                    if (qual.StartsWith("Shield"))
                    {
                        return qual.Replace("Shield", "Tarcza");
                    }

                    Console.WriteLine($"NIE ODNALEZIONO CECHY: {qual}");
                    return qual;
                }
            }
        }

        public static string TranslateQualityFlawReverse(string qual)
        {
            Console.WriteLine($"Tłumaczę cechę: {qual}");
            switch (qual)
            {
                case "Celna": return "Accurate";
                case "Prochowa": return "Blackpowder";
                case "Odłamkowa": return "Blast";
                case "Przebijająca": return "Damaging";
                case "Parująca": return "Defensive";
                case "Unieruchamiająca": return "Entangle";
                case "Szybka": return "Fast";
                case "Rąbiąca": return "Hack";
                case "Druzgocząca": return "Impact";
                case "Nadziewająca": return "Impale";
                case "Przekłuwająca": return "Penetrating";
                case "Pistolety": return "Pistol";
                case "Precyzyjna": return "Precise";
                case "Ogłuszająca": return "Pummel";
                case "Wielostrzał": return "Repeater";
                case "Tarcza": return "Shield";
                case "Łamacz mieczy": return "TrapBlade";
                case "Niełamliwa": return "Unbreakable";
                case "Plącząca": return "Wrap";
                case "Niebezpieczna": return "Dangerous";
                case "Nieprecyzyjna": return "Imprecise";
                case "Przeładowanie": return "Reload";
                case "Powolna": return "Slow";
                case "Ciężka": return "Tiring";
                case "Tępa": return "Undamaging";
                case "Brzydki": return "Ugly";
                case "Tandetny": return "Shoddy";
                case "Zawodny": return "Unreliable";
                case "Nieporęczny": return "Bulky";
                case "Wytrzymały": return "Durable";
                case "Wyśmienity": return "Fine";
                case "Poręczny": return "Lightweight";
                case "Praktyczny": return "Practical";
                case "Rozpraszający": return "Distract";
                case "Giętki": return "Flexible";
                case "Nieprzebijalny": return "Impenetrable";
                case "Częściowy": return "Partial";
                case "Wrażliwe punkty": return "Weakpoints";
                case "Tnący": return "Slashing";
                case "Odzyskiwalny": return "Recoverable";
                case "Nieodzyskiwalny": return "Unrecoverable";
                case "Solidny": return "Sturdy";
                case "Kruchy": return "Frail";
                default:
                    {
                        if (qual.StartsWith("Przeładowanie"))
                        {
                            return qual.Replace("Przeładowanie", "Reload");
                        }

                        if (qual.StartsWith("Odłamkowa"))
                        {
                            return qual.Replace("Odłamkowa", "Blast");
                        }

                        if (qual.StartsWith("Wielostrzał"))
                        {
                            return qual.Replace("Wielostrzał", "Repeater");
                        }

                        if (qual.StartsWith("Tarcza"))
                        {
                            return qual.Replace("Tarcza", "Shield");
                        }

                        Console.WriteLine($"NIE ODNALEZIONO CECHY: {qual}");
                        return qual;
                    }
            }
        }
    }
}