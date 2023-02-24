namespace WFRP4e.Translator.Json.Entries
{
    public class Entry
    {
        public string OriginalName { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string GmDescription { get; set; }

        public string FoundryId { get; set; }

        public string Type { get; set; }

        public string OriginFoundryId { get; set; }

        public bool Translated { get; set; }

        public string InitializationFolder { get; set; }

        public override string ToString()
        {
            return $"{OriginFoundryId} - {OriginalName}   :   {Name}";
        }
    }
}