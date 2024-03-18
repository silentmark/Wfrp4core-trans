namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("script")]
    public class MacroEntry : BaseEntry
    {
        public string Command { get; set; }

        public override string ToString()
        {
            return $"{OriginFoundryId} - {FoundryId} : {Name}";
        }
    }
}