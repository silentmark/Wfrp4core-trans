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
    [FoundryType("money")]
    public class MoneyReader : GenericItemReader
    { 
        public void UpdateEntry(JObject pack, MoneyEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
        }
    }
}