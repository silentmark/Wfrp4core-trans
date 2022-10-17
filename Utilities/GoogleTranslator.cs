using Google.Api.Gax.ResourceNames;
using Google.Cloud.Translate.V3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Utilities
{
    public class GoogleTranslator : GenericTranslator
    {
        private static TranslationServiceClient _client;
        private static TranslationServiceClient Client
        {
            get
            {
                if (_client == null)
                {
                   _client = TranslationServiceClient.Create();
                }
                return _client;
            }
        }


        public static string Translate(string entry)
        {
            List<Dictionary<string, string>> dictionaryLsits = BuildUuidDictionary(ref entry);

            TranslateTextRequest request = new TranslateTextRequest
            {
                Contents = { entry },
                TargetLanguageCode = "pl-PL",
                SourceLanguageCode = "en-GB",
                Parent = new ProjectName("turnkey-brook-365022").ToString()
            };
            TranslateTextResponse response = Client.TranslateText(request);
            // response.Translations will have one entry, because request.Contents has one entry.
            var translation = response.Translations[0].TranslatedText;
            foreach (var replacements in dictionaryLsits)
            {
                foreach (var uuidLink in replacements)
                {
                    if (uuidLink.Key.Contains("{"))
                    {
                        request = new TranslateTextRequest
                        {
                            Contents = { uuidLink.Key.Substring(uuidLink.Key.IndexOf("{") + 1).TrimEnd('}') },
                            TargetLanguageCode = "pl-PL",
                            SourceLanguageCode = "en-GB",
                            Parent = new ProjectName("turnkey-brook-365022").ToString()
                        };
                        response = Client.TranslateText(request);
                        translation = translation.Replace(uuidLink.Value, uuidLink.Key.Substring(0, uuidLink.Key.IndexOf("{")) + "{" + response.Translations[0].TranslatedText + "}");
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
