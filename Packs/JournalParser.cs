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
            var packs = File.ReadAllLines(Path.Combine(Program.Configuration.GetSection("PacksPath").Value, "journal-entries.db"));
            var packsJournal = packs.Select(pack => JObject.Parse(pack)).ToList();

            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {packsJournal.Count} wpisów w db");

            foreach (var pack in packsJournal)
            {
                var name = pack.Value<string>("name");
                var translation = GoogleTranslator.Translate(name);

                Console.WriteLine($"Wpis: {name.PadRight(30)} tłumaczę na: {translation}");
                pack["name"] = translation;
                foreach (var item in (JArray)pack["pages"])
                {
                    var pageName = item.Value<string>("name");
                    translation = GoogleTranslator.Translate(pageName);

                    Console.WriteLine($"Stronę: {pageName.PadRight(40)} tłumaczę na: {translation}");
                    item["name"] = translation;

                    var pageContent = item["text"].Value<string>("content");
                    var htmlDoc = new HtmlDocument();
                    htmlDoc.LoadHtml("<html>" + pageContent + "</btml>");

                    var result = string.Empty;
                    foreach (var node in htmlDoc.DocumentNode.ChildNodes[0].ChildNodes)
                    {
                        translation = GoogleTranslator.Translate(node.OuterHtml);
                        Console.WriteLine($"Content: {node.OuterHtml.PadRight(10)} tłumaczę na: {translation}");
                        result += translation;
                    }

                    item["text"]["content"] = result;
                }
            }


            foreach (var pack in packsJournal.OrderBy(x=>x["name"].ToString()))
            {
                File.AppendAllLines($@"{Program.Configuration.GetSection("OutputPath").Value}\journal-entries.db",
                    new[] {JsonConvert.SerializeObject(pack, Formatting.None)});
            }
        }
        
    }
}
