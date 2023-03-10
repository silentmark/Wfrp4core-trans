using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using CognitiveServices.Translator.Client.Language;
using Google.Api.Gax.ResourceNames;
using Google.Cloud.Translate.V3;
using HtmlAgilityPack;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Utilities
{
    public class JournalAutoTranslator
    {
        public void Parse(string path)
        {
            var files = Directory.GetFiles(path, "*.json", SearchOption.TopDirectoryOnly);
            Console.WriteLine($@"Przetwarzam Kompendium, znaleziono {files.Length} wpisów w db");

            foreach (var file in files)
            {
                var entry = JsonConvert.DeserializeObject<JournalEntry>(File.ReadAllText(file));
                foreach (var page in entry.Pages.Where(x => string.IsNullOrWhiteSpace(x.Name)))
                {
                    var htmlDoc = new HtmlDocument();
                    htmlDoc.LoadHtml("<html>" + page.Content + "</html>");

                    var result = string.Empty;
                    var counter = 0;
                    foreach (var node in htmlDoc.DocumentNode.ChildNodes[0].ChildNodes)
                    {
                        counter++;
                        var sourceText = node.InnerHtml.Trim();
                        if (!string.IsNullOrWhiteSpace(sourceText))
                        {
                            if (string.IsNullOrWhiteSpace(node.InnerText))
                            {
                                result += node.OuterHtml;
                            }
                            else
                            {
                                var translation = OpenAiTranslator.Translate(node.OuterHtml);

                                Console.WriteLine($"Zawartość:");
                                Console.WriteLine(node.OuterHtml.PadRight(10));
                                Console.WriteLine("Tłumaczenie:");
                                Console.WriteLine(translation.PadRight(10));
                                result += translation;
                            }
                        }
                    }
                    page.Content = result;
                    page.Name = page.Name + " (OpenAI)";
                }
                var text = JsonConvert.SerializeObject(entry, Formatting.Indented);
                File.WriteAllText(file, text);
            }
        }
    }
}