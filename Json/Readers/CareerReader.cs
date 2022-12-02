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
    [FoundryType("career")]
    public class CareerReader : GenericReader
    { 
        public void UpdateEntry(JObject pack, CareerEntry mapping)
        {
            UpdateItemEntry(pack, mapping);

            var pathToData = GetPathToData(pack);
            mapping.CarrerGroup = pack[pathToData]?["careergroup"]?["value"]?.Value<string>();
            mapping.Class = pack[pathToData]?["class"]?["value"]?.Value<string>();
            mapping.Skills = ((JArray)pack[pathToData]["skills"]).Values<string>().ToArray();
            mapping.Talents = ((JArray)pack[pathToData]["talents"]).Values<string>().ToArray();
            mapping.Trappings = ((JArray)pack[pathToData]["trappings"]).Values<string>().ToArray();
        }
    }
}