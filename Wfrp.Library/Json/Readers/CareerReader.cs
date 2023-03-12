using Newtonsoft.Json.Linq;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("career")]
    public class CareerReader : GenericReader
    {
        public void UpdateEntry(JObject pack, CareerEntry mapping)
        {
            UpdateItemEntry(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["careergroup"]?["value"]?.ToString(), nameof(mapping.CareerGroup));
            UpdateIfDifferent(mapping, pack["system"]?["class"]?["value"]?.ToString(), nameof(mapping.Class));

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
}