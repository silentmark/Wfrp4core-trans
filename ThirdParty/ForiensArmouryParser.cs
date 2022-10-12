using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Utilities;

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
                    pack["system"]["description"]["value"] = polish.Description;
                    if (pack["system"]["qualities"] != null)
                    {
                        var quals = pack["system"]["qualities"]["value"].Value<string>().Split(',').Select(x => x.Trim()).ToList();
                        var qualsArr = new JArray();
                        foreach (var qualStr in quals)
                        {
                            if (!string.IsNullOrEmpty(qualStr))
                            {
                                var qual = qualStr;
                                var jQual = new JObject();
                                if (qual == "Trap Blade") qual = "TrapBlade";
                                jQual["key"] = qual.ToLower().Split(' ')[0];
                                jQual["name"] = qual.ToLower().Split(' ')[0];
                                jQual["display"] = TrappingsParser.TranslateQualityFlaw(qual.Split(' ')[0]);
                                jQual["value"] = qual.Contains(' ') ? qual.Split(' ')[1] : "";
                                qualsArr.Add(jQual);
                            }
                        }
                        pack["system"]["qualities"]["value"] = qualsArr;
                    }
                    if (pack["system"]["flaws"] != null)
                    {
                        var flaws = pack["system"]["flaws"]["value"].Value<string>().Split(',').Select(x => x.Trim()).ToList();
                        var flawsArr = new JArray();
                        foreach (var flaw in flaws)
                        {
                            if (!string.IsNullOrEmpty(flaw))
                            {
                                var jFlaw = new JObject();
                                jFlaw["key"] = flaw.ToLower().Split(' ')[0];
                                jFlaw["name"] = flaw.ToLower().Split(' ')[0];
                                jFlaw["display"] = TrappingsParser.TranslateQualityFlaw(flaw.Split(' ')[0]);
                                jFlaw["value"] = flaw.Contains(' ') ? flaw.Split(' ')[1] : "";
                                flawsArr.Add(jFlaw);
                            }
                        }
                        pack["system"]["flaws"]["value"] = flawsArr;
                    }
                    if (pack["system"]["special"] != null)
                    {
                        pack["system"]["special"]["value"] = polish.Special;
                    }
                }
            }

            foreach (var pack in packsArmoury.OrderBy(x=>x["name"].ToString()))
            {
                File.AppendAllLines($@"{Config.TranslationsPath}\armoury.db",
                    new[] {JsonConvert.SerializeObject(pack, Formatting.None)});
            }
        }
    }
}
