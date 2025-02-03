namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("disease")]
    public class DiseaseEntry : ItemEntry
    {
        public string Symptoms { get; set; }

        public string Duration { get; set; }

        public string DurationUnit { get; set; }

        public string Contraction { get; set; }

        public string Incubation { get; set; }

        public string IncubationUnit { get; set; }

        public string Permanent { get; set; }

        public string DurationText { get; set; }

        public string IncubationText { get; set; }
    }
}