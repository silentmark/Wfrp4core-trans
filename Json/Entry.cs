namespace WFRP4e.Translator.Json
{
    public class Entry
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string FoundryId { get; set; }

        public override string ToString()
        {
            return $"{Id}   :   {Name}";
        }

    }
}