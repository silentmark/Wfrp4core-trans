namespace WFRP4e.Translator.Json.Entries
{
    public class EffectEntry : BaseEntry
    {
        public List<ScriptDataEntry> ScriptData { get; set; }

        public string Filter { get; set; }
    }

    public class ScriptDataEntry : BaseEntry
    {
        public string Script { get; set; }

        public string HideScript { get; set; }

        public string ActivationScript { get; set; }

        public string SubmissionScript { get; set; }
    }
}