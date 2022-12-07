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
    public class CareersParser : GenericItemParser
    {
        public override void Parse(JObject pack, Entry entry)
        {
            base.Parse(pack, entry);

            var pathToData = GenericReader.GetPathToData(pack);
            var mapping = (CareerEntry)entry;

            pack[pathToData]["careergroup"]["value"] = mapping.CarrerGroup;
            pack[pathToData]["class"]["value"] = mapping.Class;
            var skills = new JArray();
            foreach (var itm in mapping.Skills) skills.Add(itm);
            pack[pathToData]["skills"] = skills;

            var talents = new JArray();
            foreach (var itm in mapping.Talents) talents.Add(itm);
            pack[pathToData]["talents"] = talents;

            var trappings = new JArray();
            foreach (var itm in mapping.Trappings) trappings.Add(itm);
            pack[pathToData]["trappings"] = trappings;

        }
    }
}
