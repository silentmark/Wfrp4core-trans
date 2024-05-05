using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("disease")]
    public class DiseasesReader : GenericReader
    {
        public void UpdateEntry(JObject pack, DiseaseEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);

            UpdateIfDifferent(mapping, pack["system"]?["contraction"]?["value"]?.ToString(), nameof(mapping.Contraction), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["value"]?.ToString(), nameof(mapping.Duration), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["duration"]?["unit"]?.ToString(), nameof(mapping.DurationUnit), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["incubation"]?["value"]?.ToString(), nameof(mapping.Incubation), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["incubation"]?["unit"]?.ToString(), nameof(mapping.IncubationUnit), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["permanent"]?["value"]?.ToString(), nameof(mapping.Permanent), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["symptoms"]?["value"]?.ToString(), nameof(mapping.Symptoms), onlyNulls);
        }

        public void UpdateEntryFromBabele(JObject pack, DiseaseEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);
            UpdateIfDifferent(mapping, pack["duration_value"]?.ToString(), nameof(mapping.Duration), false);
            UpdateIfDifferent(mapping, pack["duration_unit"]?.ToString(), nameof(mapping.DurationUnit), false);
            UpdateIfDifferent(mapping, pack["incubation_value"]?.ToString(), nameof(mapping.Incubation), false);
            UpdateIfDifferent(mapping, pack["incubation_unit"]?.ToString(), nameof(mapping.IncubationUnit), false);
            UpdateIfDifferent(mapping, pack["contraction"]?.ToString(), nameof(mapping.Contraction), false);
            UpdateIfDifferent(mapping, pack["symptoms"]?.ToString(), nameof(mapping.Symptoms), false);
            UpdateIfDifferent(mapping, pack["permanent"]?.ToString(), nameof(mapping.Permanent), false);
        }
    }
}