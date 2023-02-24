using CognitiveServices.Translator;
using CognitiveServices.Translator.Configuration;
using CognitiveServices.Translator.Translate;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Utilities
{
    public class CognitiveTranslator : GenericTranslator
    {
        private static CognitiveServicesConfig CognitiveConfig;

        private static TranslateClient _client;
        public static TranslateClient Client
        {
            get
            {
                if (_client == null)
                {
                    CognitiveConfig = new CognitiveServicesConfig();
                    Config.Configuration.GetSection("CognitiveServices").Bind(CognitiveConfig);
                    _client = new TranslateClient(CognitiveConfig);
                }
                return _client;
            }
        }


        public static string Translate(string entry)
        {
            List<Dictionary<string, string>> dictionaryLsits = BuildUuidDictionary(ref entry);

            // Functions to get, list, and delete glossaries from DeepL servers are also provided
            //var glossaries = Client.Translate()

            var requestParameters = new RequestParameter
            {
                From = "en", // Optional, will be auto-discovered
                To = new[] { "pl" }, // You can translate to multiple language at once.
                IncludeAlignment = true,
                TextType = TextType.Html
            };
            var resultWithModel = Client.Translate(new RequestContent(entry), requestParameters);

            // response.Translations will have one entry, because request.Contents has one entry.
            var translation = resultWithModel.First().Translations.First().Text;
            foreach (var replacements in dictionaryLsits)
            {
                foreach (var uuidLink in replacements)
                {
                    if (uuidLink.Key.Contains("{"))
                    {
                        var textToTranslate = uuidLink.Key.Substring(uuidLink.Key.IndexOf("{") + 1).TrimEnd('}');
                        resultWithModel = Client.Translate(new RequestContent(textToTranslate), requestParameters);
                        translation = translation.Replace(uuidLink.Value, uuidLink.Key.Substring(0, uuidLink.Key.IndexOf("{")) + "{" + resultWithModel.First().Translations.First().Text + "}");
                    }
                    else
                    {
                        translation = translation.Replace(uuidLink.Value, uuidLink.Key);
                    }
                }
            }
            return translation;
        }

    }
}
