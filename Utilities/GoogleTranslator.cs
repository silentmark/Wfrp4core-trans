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
            var uuidMatches = _linkRegex.Matches(entry);
            var replacements = new Dictionary<string, string>();
            
            for (var i = 0; i < uuidMatches.Count; i++)
            {
                var match = uuidMatches[i];
                replacements[match.Value] = $"@DUMMYUUID[{i}]";
                entry = entry.Replace(match.Value, replacements[match.Value]);
            }

            var replacementsNoText = new Dictionary<string, string>();
            uuidMatches = _linkRegexNoText.Matches(entry);
            for (var i = 0; i < uuidMatches.Count; i++)
            {
                var match = uuidMatches[i];
                replacementsNoText[match.Value] = $"@DUMMYUUIDNOTEXT[{i}]";
                entry = entry.Replace(match.Value, replacementsNoText[match.Value]);
            }


            var replacementsCompendium = new Dictionary<string, string>();
            uuidMatches = _linkCompendiumRegex.Matches(entry);
            for (var i = 0; i < uuidMatches.Count; i++)
            {
                var match = uuidMatches[i];
                replacementsCompendium[match.Value] = $"@DUMMYCOMPENDIUMUUID[{i}]";
                entry = entry.Replace(match.Value, replacementsCompendium[match.Value]);
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
            foreach(var uuidLink in replacements)
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

            foreach (var uuidLink in replacementsCompendium)
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

            foreach (var uuidLink in replacementsNoText)
            {
                translation = translation.Replace(uuidLink.Value, uuidLink.Key);
            }
            return translation;
        }
    }
}
