namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("Referenced")]
    public class ReferenceEntry : Entry
    {
        public ReferenceEntry()
        {
            Type = "Referenced";
        }

        public override string ToString()
        {
            return $"{OriginFoundryId} - {FoundryId} : Referenced";
        }
    }
}