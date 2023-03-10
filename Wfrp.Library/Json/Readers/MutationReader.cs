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
    [FoundryType("mutation")]
    public class MutationReader : GenericReader
    {
        public void UpdateEntry(JObject pack, MutationEntry mapping)
        {
            UpdateItemEntry(pack, mapping);
        }
    }
}