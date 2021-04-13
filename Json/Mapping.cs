namespace WFRP4e.Translator.Json
{
    public class Mapping
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public override string ToString()
        {
            return $"{Id}   :   {Name}";
        }
    }
}