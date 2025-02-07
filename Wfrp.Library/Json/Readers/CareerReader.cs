using Newtonsoft.Json.Linq;
using System.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("career")]
    public class CareerReader : GenericReader
    {
        public void UpdateEntry(JObject pack, CareerEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);

            UpdateIfDifferent(mapping, pack["system"]?["careergroup"]?["value"]?.ToString(), nameof(mapping.CareerGroup), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["class"]?["value"]?.ToString(), nameof(mapping.Class), onlyNulls);

            if (!onlyNulls)
            {
                var skills = ((JArray)pack["system"]["skills"]).Values<string>().ToArray();
                if (!Enumerable.SequenceEqual(mapping.Skills ?? new string[] { }, skills))
                {
                    mapping.Skills = skills;
                }

                var talents = ((JArray)pack["system"]["talents"]).Values<string>().ToArray();
                if (!Enumerable.SequenceEqual(mapping.Talents ?? new string[] { }, talents))
                {
                    mapping.Talents = talents;
                }

                var trappings = ((JArray)pack["system"]["trappings"]).Values<string>().ToArray();
                if (!Enumerable.SequenceEqual(mapping.Trappings ?? new string[] { }, trappings))
                {
                    mapping.Trappings = trappings;
                }
            }
        }

        public void UpdateEntryFromBabele(JObject pack, CareerEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["careergroup"]?.ToString(), nameof(mapping.CareerGroup), false);
            UpdateIfDifferent(mapping, pack["class"]?.ToString(), nameof(mapping.Class), false);

            var skills = ((JArray)pack["skills"]).Values<string>().ToArray();
            if (!Enumerable.SequenceEqual(mapping.Skills ?? new string[] { }, skills))
            {
                mapping.Skills = skills;
            }

            var talents = ((JArray)pack["talents"]).Values<string>().ToArray();
            if (!Enumerable.SequenceEqual(mapping.Talents ?? new string[] { }, talents))
            {
                mapping.Talents = talents;
            }

            var trappings = ((JArray)pack["trappings"]).Values<string>().ToArray();
            if (!Enumerable.SequenceEqual(mapping.Trappings ?? new string[] { }, trappings))
            {
                mapping.Trappings = trappings;
            }
        }
    }
}