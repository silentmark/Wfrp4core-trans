using System.Collections.Generic;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("table")]
    public class TableEntry : BaseEntry
    {
        public List<TableResultEntry> TableResults { get; set; } = new List<TableResultEntry>();
    }
}