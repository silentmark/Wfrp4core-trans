﻿using Wfrp.Library.Json.Entries;

namespace WFRP4e.Translator.Json.Entries
{
    [FoundryType("injury")]
    public class InjuryEntry : ItemEntry
    {
        public string Penalty { get; set; }
        public string Location { get; set; }
    }
}