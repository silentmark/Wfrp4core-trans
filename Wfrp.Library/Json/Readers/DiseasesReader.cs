using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("disease")]
    public class DiseasesReader : GenericReader
    {
        public void UpdateEntry(JObject pack, DiseaseEntry mapping)
        {
            UpdateItemEntry(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["contraction"]?["value"]?.ToString(), nameof(mapping.Contraction));
            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["value"]?.ToString(), nameof(mapping.Duration));
            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["unit"]?.ToString(), nameof(mapping.DurationUnit));
            UpdateIfDifferent(mapping, pack["system"]?["incubation"]?["value"]?.ToString(), nameof(mapping.Incubation));
            UpdateIfDifferent(mapping, pack["system"]?["incubation"]?["unit"]?.ToString(), nameof(mapping.IncubationUnit));
            UpdateIfDifferent(mapping, pack["system"]?["permanent"]?["value"]?.ToString(), nameof(mapping.Permanent));
            UpdateIfDifferent(mapping, pack["system"]?["symptoms"]?["value"]?.ToString(), nameof(mapping.Symptoms));
        }

        public void UpdateEntryFromBabele(JObject pack, DiseaseEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["duration_value"]?.ToString(), nameof(mapping.Duration));
            UpdateIfDifferent(mapping, pack["duration_unit"]?.ToString(), nameof(mapping.DurationUnit));
            UpdateIfDifferent(mapping, pack["incubation_value"]?.ToString(), nameof(mapping.Incubation));
            UpdateIfDifferent(mapping, pack["incubation_unit"]?.ToString(), nameof(mapping.IncubationUnit));
            UpdateIfDifferent(mapping, pack["contraction"]?.ToString(), nameof(mapping.Contraction));
            UpdateIfDifferent(mapping, pack["symptoms"]?.ToString(), nameof(mapping.Symptoms));
            UpdateIfDifferent(mapping, pack["permanent"]?.ToString(), nameof(mapping.Permanent));
        }
    }
}