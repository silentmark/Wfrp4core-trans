using System.Collections.Generic;

namespace WFRP4e.Translator.Json.Entries
{
    public class ItemEntry : Entry
    {
        public List<EffectEntry> Effects { get; set; } = new List<EffectEntry>();
    }
}