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
    public class GoogleTranslator
    {
        private static TranslationServiceClient _client;
        private static Regex _linkRegex = new Regex(@"@UUID\[([\p{L}\d\.\-#]*)\]\{([\p{L}\d\.\-\s']*)\}");
        private static Regex _linkRegexNoText = new Regex(@"@UUID\[([\p{L}\d\.\-#]*)\]");
        private static Regex _linkCompendiumRegex = new Regex(@"@Compendium\[([\p{L}\d\.\-#]*)\]\{([\p{L}\d\.\-\s']*)\}");
        private static Regex _linkTableRegex = new Regex(@"@Table\[([\p{L}\d\.\-#]*)\]");
        private static Regex _linkCorruptionRegex = new Regex(@"@Corruption\[([\p{L}\d\.\-#]*)\]");
        private static Regex _linkConditionRegex = new Regex(@"@Condition\[([\p{L}\d\.\-#]*)\]");

        private static List<Regex> regices = new List<Regex> {
            _linkRegex,
            _linkCompendiumRegex,
            _linkTableRegex,
            _linkCorruptionRegex,
            _linkRegexNoText,
            _linkConditionRegex
        };

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
            var dictionaryLsits = new List<Dictionary<string, string>>();
            for (int k = 0; k < regices.Count; k++)
            {
                Regex regex = regices[k];
                var uuidMatches = regex.Matches(entry);
                var dictionary = new Dictionary<string, string>();
                for (var i = 0; i < uuidMatches.Count; i++)
                {
                    var match = uuidMatches[i];
                    dictionary[match.Value] = $"@UUIDX{k}[{i}]";
                    entry = entry.Replace(match.Value, dictionary[match.Value]);
                }
                dictionaryLsits.Add(dictionary);

            }

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
            foreach(var replacements in dictionaryLsits)
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
