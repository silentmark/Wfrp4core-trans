using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class InjuriesParser : GenericParser<Entry>
    {
        protected override string DbName => "injuries.db";
    }
}
