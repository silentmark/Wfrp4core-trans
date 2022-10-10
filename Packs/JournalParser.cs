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

namespace WFRP4e.Translator.Packs
{
    public class JournalParser
    {

        //TODO: translate effects in traits and talents + parameters in traits names (like Size (Large)).
        public void Parse()
        {
            var packs = File.ReadAllLines(Path.Combine(Program.Configuration.GetSection("PacksPath").Value, "journal-entries.db"));
            var packsJournal = packs.Select(pack => JObject.Parse(pack)).ToList();

            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {packsJournal.Count} wpisów w db");

            TranslationServiceClient client = TranslationServiceClient.Create();

            foreach (var pack in packsJournal)
            {
                var name = pack.Value<string>("name");
                TranslateTextRequest request = new TranslateTextRequest
                {
                    Contents = { name },
                    TargetLanguageCode = "pl-PL",
                    SourceLanguageCode = "en-GB",
                    Parent = new ProjectName("turnkey-brook-365022").ToString()
                };
                TranslateTextResponse response = client.TranslateText(request);
                // response.Translations will have one entry, because request.Contents has one entry.
                Translation translation = response.Translations[0];

                Console.WriteLine($"Wpis: {name.PadRight(30)} tłumaczę na: {translation.TranslatedText}");
                pack["name"] = translation.TranslatedText;
                foreach (var item in (JArray)pack["pages"])
                {
                    var pageName = item.Value<string>("name");
                    request = new TranslateTextRequest
                    {
                        Contents = { pageName },
                        TargetLanguageCode = "pl-PL",
                        SourceLanguageCode = "en-GB",
                        Parent = new ProjectName("turnkey-brook-365022").ToString()
                    };
                    response = client.TranslateText(request);
                    translation = response.Translations[0];
                    Console.WriteLine($"Stronę: {pageName.PadRight(40)} tłumaczę na: {translation.TranslatedText}");
                    item["name"] = translation.TranslatedText;

                    var pageContent = item["text"].Value<string>("content");
                    var htmlDoc = new HtmlDocument();
                    htmlDoc.LoadHtml("<html>" + pageContent + "</btml>");

                    var result = string.Empty;
                    foreach (var node in htmlDoc.DocumentNode.ChildNodes[0].ChildNodes)
                    {
                        request = new TranslateTextRequest
                        {
                            Contents = { node.OuterHtml },
                            TargetLanguageCode = "pl-PL",
                            SourceLanguageCode = "en-GB",
                            Parent = new ProjectName("turnkey-brook-365022").ToString()
                        };
                        response = client.TranslateText(request);
                        translation = response.Translations[0];
                        Console.WriteLine($"Content: {node.OuterHtml.PadRight(10)} tłumaczę na: {translation.TranslatedText}");
                        result += translation.TranslatedText;
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
