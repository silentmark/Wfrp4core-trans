using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Google.Api.Gax.ResourceNames;
using Google.Cloud.Translate.V3;
using HtmlAgilityPack;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Utilities;

namespace WFRP4e.Translator.Packs
{
    public class JournalParser
    {

        public void Parse()
        {
            var packs = File.ReadAllLines(Path.Combine(Config.PacksPath, "wfrp4e-core", "packs", "journal-entries.db"));
            var packsJournal = packs.Select(pack => JObject.Parse(pack)).ToList();

            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {packsJournal.Count} wpisów w db");

            foreach (var pack in packsJournal)
            {
                var name = pack.Value<string>("name");
                //var translation = GoogleTranslator.Translate(name);
                //var translation = DeepLTranslator.Translate(name);
                var translation = CognitiveTranslator.Translate(name);

                Console.WriteLine($"Wpis: {name.PadRight(30)}{Environment.NewLine}tłumaczenie: {translation.PadRight(30)}");
                pack["name"] = translation;
                foreach (var item in (JArray)pack["pages"])
                {
                    var pageName = item.Value<string>("name"); 
                    //translation = GoogleTranslator.Translate(pageName);
                    //translation = DeepLTranslator.Translate(pageName);
                    translation = CognitiveTranslator.Translate(pageName);

                    Console.WriteLine($"Stronę: {pageName.PadRight(40)}{Environment.NewLine}tłumaczenie: {translation.PadRight(40)}");
                    item["name"] = translation;

                    var pageContent = item["text"].Value<string>("content");
                    var htmlDoc = new HtmlDocument();
                    htmlDoc.LoadHtml("<html>" + pageContent + "</html>");

                    var result = string.Empty;
                    foreach (var node in htmlDoc.DocumentNode.ChildNodes[0].ChildNodes)
                    {
                        //translation = GoogleTranslator.Translate(node.OuterHtml);
                        //translation = DeepLTranslator.Translate(node.OuterHtml);
                        translation = CognitiveTranslator.Translate(node.OuterHtml);
                        Console.WriteLine($"Zawartość: {node.OuterHtml.PadRight(10)}{Environment.NewLine}tłumaczenie: {translation.PadRight(10)}");
                        result += translation;
                    }

                    item["text"]["content"] = result;
                }
            }


            foreach (var pack in packsJournal.OrderBy(x=>x["name"].ToString()))
            {
                File.AppendAllLines($@"{Config.TranslationsPath}\wfrp4e-core\packs\journal-entries.db",
                    new[] {JsonConvert.SerializeObject(pack, Formatting.None)});
            }
        }
        
    }
}
