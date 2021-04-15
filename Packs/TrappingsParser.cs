using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class TrappingsParser : GenericParser<Entry>
    {
        protected override void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = translations.FirstOrDefault(x => x.Id == name);
            if (pack["data"]["qualities"] != null && pack["data"]["qualities"]["value"] != null)
            {
                var quals = pack["data"]["qualities"]["value"].Value<string>().Split(',').Select(x => x.Trim()).ToList();
                var newQuals = new List<string>();
                foreach (var qual in quals)
                {
                    if (!string.IsNullOrEmpty(qual))
                    {
                        newQuals.Add(TranslateQualityFlaw(qual));
                    }
                }
                pack["data"]["qualities"]["value"] = string.Join(", ", newQuals);
            }
            if (pack["data"]["flaws"] != null && pack["data"]["flaws"]["value"] != null)
            {
                var flaws = pack["data"]["flaws"]["value"].Value<string>().Split(',').Select(x => x.Trim()).ToList();
                var newFlaws = new List<string>();
                foreach (var qual in flaws)
                {
                    if (!string.IsNullOrEmpty(qual))
                    {
                        newFlaws.Add(TranslateQualityFlaw(qual));
                    }
                }

                pack["data"]["flaws"]["value"] = string.Join(", ", newFlaws);
            }

            if (pack["effects"] != null)
            {
                foreach (var effect in (JArray) pack["effects"])
                {
                    if (effect["label"].Value<string>() == name)
                    {
                        effect["label"] = trans.Name;
                    }
                }
            }
            base.TranslatePack(pack, translations);
        }

        protected override string DbName => "trappings.db";


        private string TranslateQualityFlaw(string qual)
        {
            Console.WriteLine($"Tłumaczę cechę: {qual}");
            switch (qual)
            {
                case "Accurate": return "Celna";
                case "Blackpowder": return "Prochowa";
                case "Blast": return "Odłamkowa";
                case "Damaging": return "Przebijająca";
                case "Defensive": return "Parująca";
                case "Entangle": return "Unieruchamiająca";
                case "Fast": return "Szybka";
                case "Hack": return "Rąbiąca";
                case "Impact": return "Druzgocząca";
                case "Impale": return "Nadziewająca";
                case "Penetrating": return "Przekłuwająca";
                case "Pistol": return "Pistolety";
                case "Precise": return "Precyzyjna";
                case "Pummel": return "Ogłuszająca";
                case "Repeater": return "Wielostrzał";
                case "Shield": return "Tarcza";
                case "TrapBlade": return "Łamacz mieczy";
                case "Trap Blade": return "Łamacz mieczy";
                case "Unbreakable": return "Niełamliwa";
                case "Wrap": return "Plącząca";
                case "Dangerous": return "Niebezpieczna";
                case "Imprecise": return "Nieprecyzyjna";
                case "Reload": return "Przeładowanie";
                case "Slow": return "Powolna";
                case "Tiring": return "Ciężka";
                case "Undamaging": return "Tępa";
                case "Ugly": return "Brzydki";
                case "Shoddy": return "Tandetny";
                case "Unreliable": return "Zawodny";
                case "Bulky": return "Nieporęczny";
                case "Durable": return "Wytrzymały";
                case "Fine": return "Wyśmienity";
                case "Lightweight": return "Poręczny";
                case "Practical": return "Praktyczny";
                case "Distract": return "Rozpraszający";
                case "Flexible": return "Giętki";
                case "Impenetrable": return "Nieprzebijalny";
                case "Partial": return "Częściowy";
                case "Weakpoints": return "Wrażliwe punkty";
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
    }
}