using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("disease")]
    public class DiseasesReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, DiseaseEntry mapping)
        {
            var result = UpdateItemEntry(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["contraction"]?["value"]?.ToString(), nameof(mapping.Contraction), ref result);
            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["value"]?.ToString(), nameof(mapping.Duration), ref result);
            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["unit"]?.ToString(), nameof(mapping.DurationUnit), ref result);
            UpdateIfDifferent(mapping, pack["system"]?["incubation"]?["value"]?.ToString(), nameof(mapping.Incubation), ref result);
            UpdateIfDifferent(mapping, pack["system"]?["incubation"]?["unit"]?.ToString(), nameof(mapping.IncubationUnit), ref result);
            UpdateIfDifferent(mapping, pack["system"]?["permanent"]?["value"]?.ToString(), nameof(mapping.Permanent), ref result);
            UpdateIfDifferent(mapping, pack["system"]?["symptoms"]?["value"]?.ToString(), nameof(mapping.Symptoms), ref result);

            return result;
        }
    }
}