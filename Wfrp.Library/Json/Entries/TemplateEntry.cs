namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("template")]
    public class TemplateEntry : ItemEntry
    {
        public string GmDescription { get; set; }

        public string AlterNamePre { get; set; }

        public string AlterNamePost { get; set; }

        public List<string> Skills { get; set; } = [];

        public List<string> Talents { get; set; } = [];

        public List<string> Traits { get; set; } = [];

        public List<TemplateOption> Options { get; set; } = [];
    }

    public class TemplateOption
    {
        public string Name { get; set; }

        public string Id { get; set; }
    }
}