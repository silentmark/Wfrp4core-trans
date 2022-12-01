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
    public class DiseasesParser : GenericParser<DiseaseEntry>
    {

        public override void TranslatePack(JObject pack)
        {
            TranslatePack(pack, Mappings.TypeToMappingDictonary["disease"].Values.OfType<DiseaseEntry>().ToList());
        }

        protected void TranslatePack(JObject pack, List<DiseaseEntry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, translations);
            if (trans != null)
            {
                var newSymptoms = trans.Symptoms.Split(',').Select(x => x.Trim()).ToList();

                var pathToData = "system";
                if (pack["data"] != null)
                {
                    pathToData = "data";
                }
                pack[pathToData]["contraction"]["value"] = trans.Contraction;
                pack[pathToData]["duration"]["value"] = trans.Duration;
                pack[pathToData]["duration"]["unit"] = trans.DurationUnit;
                pack[pathToData]["incubation"]["value"] = trans.Incubation;
                pack[pathToData]["incubation"]["unit"] = trans.IncubationUnit;
                pack[pathToData]["permanent"]["value"] = trans.Permanent;
                pack[pathToData]["symptoms"]["value"] = trans.Symptoms;


                if (pack["effects"] != null)
                {
                    foreach (var effect in (JArray) pack["effects"])
                    {
                        var symptom = effect["label"].Value<string>();
                        var keyValue = SymptompsTrans.FirstOrDefault(x => symptom.ToLower().StartsWith(x.Key));
                        if (keyValue.Key != null)
                        {
                            var newSymptom = newSymptoms.FirstOrDefault(x => x.ToLower().StartsWith(keyValue.Value.ToLower()));
                            if (newSymptom != null)
                            {
                                effect["label"] = newSymptom;
                            }
                            else
                            {
                                Console.WriteLine("NIE ODNALEZIONO TŁUMACZENIA: " + keyValue.Value + " W: " + trans.Symptoms);
                            }
                        }
                        else
                        {
                            Console.WriteLine("NIE ODNALEZIONO: " + symptom);
                        }
                    }
                }
            }

            TranslateDescriptions(pack, translations);
        }

        private Dictionary<string, string> SymptompsTrans = new Dictionary<string, string>
        {
            {"blight", "Uwiąd"},
            {"buboes", "Dymienica"},
            {"convulsions", "Konwulsje"},
            {"coughs and sneezes", "Kaszel i katar"},
            {"fever", "Gorączka"},
            {"flux", "Biegunka"},
            {"gangrene", "Gangrena"},
            {"lingering", "Nawroty"},
            {"malaise", "Apatia"},
            {"nausea", "Nudności"},
            {"pox", "Wysypka"},
            {"wounded", "Uciążliwa Rana"},
            {"delirium", "Delirium"},
            {"swelling", "Opuchlizna"}
        };
    }
}
