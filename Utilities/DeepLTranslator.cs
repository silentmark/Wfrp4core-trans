using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Utilities
{
    public class DeepLTranslator : GenericTranslator
    {
        private static DeepL.Translator _client;
        public static DeepL.Translator Client
        {
            get
            {
                if (_client == null)
                {
                    _client = new DeepL.Translator(Config.DeepLAuthKey);
                }
                return _client;
            }
        }


        public static string Translate(string entry)
        {
            List<Dictionary<string, string>> dictionaryLsits = BuildUuidDictionary(ref entry);

            // Functions to get, list, and delete glossaries from DeepL servers are also provided
            var glossaries = Client.ListGlossariesAsync().Result;
            var resultWithGlossary = Client.TranslateTextAsync(entry, "EN", "PL", new DeepL.TextTranslateOptions { GlossaryId = glossaries.First().GlossaryId }).Result;

            // response.Translations will have one entry, because request.Contents has one entry.
            var translation = resultWithGlossary.Text;
            foreach (var replacements in dictionaryLsits)
            {
                foreach (var uuidLink in replacements)
                {
                    if (uuidLink.Key.Contains("{"))
                    {
                        resultWithGlossary = Client.TranslateTextAsync(uuidLink.Key.Substring(uuidLink.Key.IndexOf("{") + 1).TrimEnd('}'), "EN", "PL", new DeepL.TextTranslateOptions { GlossaryId = glossaries.First().GlossaryId }).Result;
                        translation = translation.Replace(uuidLink.Value, uuidLink.Key.Substring(0, uuidLink.Key.IndexOf("{")) + "{" + resultWithGlossary.Text + "}");
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
