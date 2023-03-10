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
        public override void Parse(JObject pack, BaseEntry entry)
        {
            base.Parse(pack, entry);

            var mapping = (CareerEntry)entry;

            pack["system"]["careergroup"]["value"] = mapping.CarrerGroup;
            pack["system"]["class"]["value"] = mapping.Class;
            var skills = new JArray();
            foreach (var itm in mapping.Skills) skills.Add(itm);
            pack["system"]["skills"] = skills;

            var talents = new JArray();
            foreach (var itm in mapping.Talents) talents.Add(itm);
            pack["system"]["talents"] = talents;

            var trappings = new JArray();
            foreach (var itm in mapping.Trappings) trappings.Add(itm);
            pack["system"]["trappings"] = trappings;
        }
    }
}