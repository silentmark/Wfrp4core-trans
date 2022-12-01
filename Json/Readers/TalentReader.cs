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
    [FoundryType("talent")]
    public class TalentReader : GenericItemReader
    { 
        public void UpdateEntry(JObject pack, TalentEntry mapping)
        {
            UpdateItemEntry(pack, mapping);

            var pathToData = GetPathToData(pack);
            mapping.Tests = mapping.Tests ?? pack[pathToData]["tests"]["value"].Value<string>();
        }
    }
}