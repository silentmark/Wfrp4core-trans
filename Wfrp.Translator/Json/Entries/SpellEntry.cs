namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("spell")]
    public class SpellEntry : ItemEntry
    {
        public string Range { get; set; }

        public string Duration { get; set; }

        public string Target { get; set; }
        public string Lore { get; set; }
        public string Wind { get; set; }
    }
}