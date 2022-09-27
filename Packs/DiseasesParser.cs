using System;
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
            var name = pack.Value<string>("name");
            var trans = translations.FirstOrDefault(x => x.Id == name);
            if (trans != null)
            {
                var newSymptoms = trans.Symptoms.Split(',').Select(x => x.Trim()).ToList();

                pack["system"]["contraction"]["value"] = trans.Contraction;
                pack["system"]["duration"]["value"] = trans.Duration;
                pack["system"]["duration"]["unit"] = trans.DurationUnit;
                pack["system"]["incubation"]["value"] = trans.Incubation;
                pack["system"]["incubation"]["unit"] = trans.IncubationUnit;
                pack["system"]["permanent"]["value"] = trans.Permanent;
                pack["system"]["symptoms"]["value"] = trans.Symptoms;


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

            base.TranslatePack(pack, translations);
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
            {"swelling", "Obrzęk"}
        };
    }
}
