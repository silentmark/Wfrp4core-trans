﻿using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("trapping")]
    public class TrappingReader : GenericReader
    {
        public bool UpdateEntry(JObject pack, TrappingEntry mapping)
        {
            return UpdateItemEntry(pack, mapping);
        }
    }
}