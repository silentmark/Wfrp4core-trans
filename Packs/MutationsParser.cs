using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class MutationsParser : GenericParser<Entry>
    {
        protected override string DbName => "mutations.db";
    }
}