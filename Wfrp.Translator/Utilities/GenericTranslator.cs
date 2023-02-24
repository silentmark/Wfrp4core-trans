using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Utilities
{
    public class GenericTranslator
    {
        protected static Regex _linkRegex = new Regex(@"@UUID\[([\p{L}\d\.\-#]*)\]\{([\p{L}\d\.\-\s']*)\}");
        protected static Regex _linkRegexNoText = new Regex(@"@UUID\[([\p{L}\d\.\-#]*)\]");
        protected static Regex _linkCompendiumRegex = new Regex(@"@Compendium\[([\p{L}\d\.\-#]*)\]\{([\p{L}\d\.\-\s']*)\}");
        protected static Regex _linkTableRegex = new Regex(@"@Table\[([\p{L}\d\.\-#]*)\]");
        protected static Regex _linkCorruptionRegex = new Regex(@"@Corruption\[([\p{L}\d\.\-#]*)\]");
        protected static Regex _linkConditionRegex = new Regex(@"@Condition\[([\p{L}\d\.\-#]*)\]");

        protected static List<Regex> regices = new List<Regex> {
            _linkRegex,
            _linkCompendiumRegex,
            _linkTableRegex,
            _linkCorruptionRegex,
            _linkRegexNoText,
            _linkConditionRegex
        };

        protected static List<Dictionary<string, string>> BuildUuidDictionary(ref string entry)
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
                    dictionary[match.Value] = $"@UIDX{k}[{i}]";
                    entry = entry.Replace(match.Value, dictionary[match.Value]);
                }
                dictionaryLsits.Add(dictionary);
            }

            return dictionaryLsits;
        }
    }
}
