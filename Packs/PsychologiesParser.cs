using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class PsychologiesParser : GenericParser<Entry>
    {
        protected override string DbName => "psychologies.db";
    }
}