﻿using System.Collections.Generic;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("table")]
    public class TableEntry : Entry
    {
        public List<TableResultEntry> TableResults { get; set; } = new List<TableResultEntry>();

        public string InitializationFolder { get; set; }

        public string SourceType { get; set; }
    }
}