using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class MixedCompendiumParser : GenericParser<Entry>
    {
        public override void TranslatePack(JObject pack)
        {
            switch (pack["type"].Value<string>())
            {
                case "trait":
                    {
                        new TraitsParser().TranslatePack(pack);
                        break;
                    }
                case "skill":
                    {
                        new SkillsParser().TranslatePack(pack);
                        break;
                    }
                case "talent":
                    {
                        new TalentsParser().TranslatePack(pack);
                        break;
                    }
                case "career":
                    {
                        new CareersParser().TranslatePack(pack);
                        break;
                    }
                case "trapping":
                    {
                        new TrappingsParser().TranslatePack(pack);
                        break;
                    }
                case "disease":
                    {
                        new DiseasesParser().TranslatePack(pack);
                        break;
                    }
                default:
                    {
                        Console.WriteLine("COS OMINALEM");
                        break;
                    }
            }
        }
    }
}