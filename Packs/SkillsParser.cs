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
        protected override string DbName => "skills.db";

        protected override void TranslatePack(JObject pack, List<Entry> translations)
        {
            var skills = JsonConvert.DeserializeObject<List<Mapping>>(File.ReadAllText(@"Mappings\wfrp4e.skills.json"));
            var name = pack.Value<string>("name");
            var mapping = skills.FirstOrDefault(x => x.Id == name) ?? skills.FirstOrDefault(x => x.Id.StartsWith(name) || name.StartsWith(x.Id));

            if (mapping == null)
            {
                Console.WriteLine($"NIE ODNALEZIONO: {name}");
            }
            else
            {
                Console.WriteLine($"Obiekt {name.PadRight(30)} tłumaczę na: {mapping.Name}");
                var trans = translations.FirstOrDefault(x => x.Name == mapping.Name || x.Id.StartsWith(name) || name.StartsWith(x.Id));
                pack["data"]["description"]["value"] = trans.Description;
                pack["name"] = mapping.Name;
            }
        }
    }
}