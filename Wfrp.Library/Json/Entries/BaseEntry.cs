namespace WFRP4e.Translator.Json.Entries
{
    public class BaseEntry : Entry
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public override string ToString()
        {
            return $"{OriginFoundryId} - {FoundryId} : {Name}";
        }
    }
}