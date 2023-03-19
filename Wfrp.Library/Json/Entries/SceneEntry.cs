namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("scene")]
    public class SceneEntry : BaseEntry
    {
        public SceneEntry()
        {
            Type = "scene";
        }

        public string SceneNote { get; set; }

        public List<NoteEntry> Notes { get; set; } = new List<NoteEntry>();
    }

    public class NoteEntry : Entry
    {
        public NoteEntry()
        {
            Type = "note";
        }

        public string Text { get; set; }
    }
}