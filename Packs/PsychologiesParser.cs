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
    public class PsychologiesParser : GenericParser<Entry>
    {
        public override void TranslatePack(JObject pack)
        {
            TranslatePack(pack, Mappings.TypeToMappingDictonary["psychology"].Values.ToList());
        }

        protected void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, translations);
            if (trans != null)
            {
                if (pack["effects"] != null)
                {
                    foreach (var effect in (JArray)pack["effects"])
                    {
                        if (effect["label"].Value<string>() == name)
                        {
                            effect["label"] = trans.Name;
                        }
                        else
                        {
                            Console.WriteLine("NIE ODNALEZIONO: " + effect["label"]);
                        }
                    }
                }
            }

            TranslateDescriptions(pack, translations);
        }

    }
}