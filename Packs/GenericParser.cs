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
        protected string PathToPack { get; private set; }

        protected string FullPathToPack { get; private set; }

        protected string FullOutputPath { get; private set; }

        protected List<JObject> OriginalPackEntries { get; private set; }

        protected List<JObject> NewPackEntries { get; private set; }

        public void Parse(string pathToPack)
        {
            PathToPack = pathToPack;

            FullOutputPath = Path.Join(Config.TranslationsPath, pathToPack);
            FullPathToPack = Path.Join(Config.PacksPath, pathToPack);

            if (File.Exists(FullOutputPath))
            {
                var existinPackEntries = File.ReadAllLines(FullOutputPath);
                NewPackEntries = existinPackEntries.Select(pack => JObject.Parse(pack)).ToList();
            }

            var originalPacks = File.ReadAllLines(FullPathToPack);
            OriginalPackEntries = originalPacks.Select(pack => JObject.Parse(pack)).ToList();

            Console.WriteLine($@"Przetwarzam {pathToPack}, znaleziono {OriginalPackEntries.Count} wpisów");

            ParseInternal();

            foreach (var pack in NewPackEntries.OrderBy(x => x["name"].ToString()))
            {
                File.AppendAllLines(FullOutputPath, new[] { JsonConvert.SerializeObject(pack, Formatting.None) });
            }
        }


        public T GetEntry(JObject pack, List<T> translations)
        {
            var name = pack.Value<string>("name");
            var id = pack.Value<string>("_id");
            var mapping = translations.FirstOrDefault(x => x.FoundryId == id && (x.Id == name || x.Name == name));
            if (mapping == null)
            {
                mapping = translations.FirstOrDefault(x => x.FoundryId == id);
                if (mapping == null)
                {
                    mapping = translations.FirstOrDefault(x => x.Id == name);
                    if (mapping == null)
                    {
                        mapping = translations.FirstOrDefault(x => x.Name == name);
                        if (mapping == null)
                        {
                            Console.WriteLine($"NIE ODNALEZIONO: {name}");
                        }
                    }
                }
            }
            return mapping;
        }

        protected virtual void ParseInternal()
        {
            foreach (var pack in OriginalPackEntries)
            {
                var existingPack = NewPackEntries.FirstOrDefault(x => x["_id"].Value<string>() == pack["_id"].Value<string>());
                if (existingPack == null)
                {
                    existingPack = pack;
                }
                TranslatePack(existingPack);
            }
            if (File.Exists(FullOutputPath))
            {
                File.Delete(FullOutputPath);
            }
        }

        public abstract void TranslatePack(JObject packObject);


        protected void TranslateDescriptions(JObject packObject, List<T> translations)
        {
            var name = packObject.Value<string>("name");
            var polish = GetEntry(packObject, translations);
            if (polish != null)
            {
                Console.WriteLine($"Obiekt {name.PadRight(30)} tłumaczę na: {polish.Name}");
                var trans = translations.FirstOrDefault(x => x.Name == polish.Name);
                if (packObject["system"] != null)
                {
                    packObject["system"]["description"]["value"] = trans.Description;
                }
                else
                {
                    packObject["data"]["description"]["value"] = trans.Description;
                }
                packObject["name"] = trans.Name;
            }
        }
    }
}
