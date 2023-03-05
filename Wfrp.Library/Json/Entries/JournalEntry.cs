using System.Collections.Generic;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("journal")]
    public class JournalEntry : Entry
    {
        public List<JournalEntryPage> Pages { get; set; }
    }
}