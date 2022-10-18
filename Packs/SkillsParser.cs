using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class SkillsParser : GenericParser<Entry>
    {

        public override void TranslatePack(JObject pack)
        {
            TranslatePack(pack, Mappings.Skills.Values.ToList());
        }

        protected void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, translations);

            if (trans != null)
            {
                Console.WriteLine($"Obiekt {name.PadRight(30)} tłumaczę na: {trans.Name}");
                if (pack["system"] != null)
                {
                    pack["system"]["description"]["value"] = trans.Description;
                }
                else
                {
                    pack["data"]["description"]["value"] = trans.Description;
                }
                pack["name"] = trans.Name;
            }
        }
    }
}