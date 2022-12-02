namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("career")]
    public class CareerEntry : ItemEntry
    {
        public string CarrerGroup { get; set; } 
        
        public string Class { get; set; }
        public string[] Skills { get; set; }
        public string[] Talents { get; set; }

        public string[] Trappings { get; set; }
    }
}