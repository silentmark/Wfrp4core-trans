using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class DiseasesParser : GenericParser<DiseaseEntry>
    {
        protected override string DbName => "diseases.db";

        protected override void TranslatePack(JObject pack, List<DiseaseEntry> translations)
        {
            base.TranslatePack(pack, translations);

            var name = pack.Value<string>("name");
            var trans = translations.FirstOrDefault(x => x.Name == name);
            if (trans != null)
            {
                pack["data"]["contraction"]["value"] = trans.Contraction;
                pack["data"]["duration"]["value"] = trans.Duration;
                pack["data"]["duration"]["unit"] = trans.DurationUnit;
                pack["data"]["incubation"]["value"] = trans.Incubation;
                pack["data"]["incubation"]["unit"] = trans.IncubationUnit;
                pack["data"]["permanent"]["value"] = trans.Permanent;
                pack["data"]["symptoms"]["value"] = trans.Symptoms;
            }
        }
    }
}
