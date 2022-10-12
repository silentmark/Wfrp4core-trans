using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public abstract class GenericParser<T> where T : Entry
    {
        protected abstract string DbName { get; }

        protected void TranslateDescriptions(JObject packObject, List<T> translations)
        {
            var name = packObject.Value<string>("name");
            var polish = translations.FirstOrDefault(x => x.Id == name);
            if (polish == null)
            {
                Console.WriteLine($"NIE ODNALEZIONO: {name}");
            }
            else
            {
                Console.WriteLine($"Obiekt {name.PadRight(30)} tłumaczę na: {polish.Name}");
                var trans = translations.FirstOrDefault(x => x.Name == polish.Name);
                packObject["system"]["description"]["value"] = trans.Description;
                packObject["name"] = trans.Name;
            }
        }
        
        public void Parse(List<T> translations)
        {
            var outputPath = Config.TranslationsPath;
            var packsPath = Config.PacksPath;

            if (File.Exists($@"{outputPath}\{DbName}"))
            {
                File.Delete($@"{outputPath}\{DbName}");
            }
            Console.WriteLine($@"Przetwarzam {typeof(T).Name}, znaleziono {translations.Count} wpisów w json desc");
            var packs = File.ReadAllLines(Path.Combine(packsPath, DbName));
            var packEntries = packs.Select(pack => JObject.Parse(pack)).ToList();
            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {packEntries.Count} wpisów w db");

            foreach (var pack in packEntries)
            {
                TranslatePack(pack, translations);
            }

            foreach (var pack in packEntries.OrderBy(x=>x["name"].ToString()))
            {
                File.AppendAllLines($@"{outputPath}\{DbName}",  new[] {JsonConvert.SerializeObject(pack, Formatting.None)});
            }
        }

        protected virtual void TranslatePack(JObject pack, List<T> translations)
        {
            TranslateDescriptions(pack, translations);
        }
    }
}
