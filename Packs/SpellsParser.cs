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
    public class SpellsParser : GenericParser<Entry>
    {

        public override void TranslatePack(JObject pack)
        {
            TranslatePack(pack, Mappings.TypeToMappingDictonary["spell"].Values.ToList());
        }

        protected void TranslatePack(JObject pack, List<Entry> translations)
        {
            var name = pack.Value<string>("name");
            var trans = GetEntry(pack, translations);
            if (trans != null)
            {
                if (pack["effects"] != null)
                {
                    foreach (var effect in (JArray) pack["effects"])
                    {
                        if (effect["label"].Value<string>() == name)
                        {
                            effect["label"] = trans.Name;
                        }
                        else
                        {
                            effect["label"] = TranslateEffectLabel(effect["label"].ToString());
                        }
                    }
                }
            }

            TranslateDescriptions(pack, translations);
        }

        private JToken TranslateEffectLabel(string label)
        {
            switch (label.ToLower())
            {
                case "lore of beasts": return "Tradycja Zwierząt";
                case "lore of death": return "Tradycja Śmierci";
                case "lore of fire": return "Tradycja Ognia";
                case "lore of heavens": return "Tradycja Niebios";
                case "lore of metal": return "Tradycja Metalu";
                case "lore of life": return "Tradycja Życia";
                case "lore of light": return "Tradycja Światła";
                case "lore of shadow": return "Tradycja Cieni";
                case "lore of hedgecraft": return "Tradycja Guślarstwa";
                case "lore of witchcraft": return "Tradycja Czarownictwa";
                case "cerulean damage": return "Niebiańskie Obrażenia";
                case "feather of lead - unburdened": return "Pancerz z Ołowiu - nieobciążony";
                case "feather of lead - overburdened": return "Pancerz z Ołowiu - przeciążony";
                case "transmutation (ap increase)": return "Transmutacja (wzrost PP)";
                case "lore of tzeentch": return "Tradycja Tzeentcha";
                case "stunned": return "Oszołomienie";
                case "blinded": return "Oślepienie";
                case "fear": return "Strach";
                case "broken": return "Panika";
                case "primary target": return "Główny Cel";
                case "characteristic bonus": return "Bonus do Atrybutu";
                case "fortune point restriction": return "Ograniczenie Punktów Szczęścia";
                default:
                {
                    Console.WriteLine("NIE ODNALEZIONO: " + label);
                    return label;
                }
            }
        }
    }
}