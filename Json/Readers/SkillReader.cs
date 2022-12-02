using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("skill")]
    public class SkillReader : GenericItemReader
    { 
        public void UpdateEntry(JObject pack, SkillEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
        }
    }
}