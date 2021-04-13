using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class TraitsParser : GenericParser<Entry>
    {
        protected override string DbName => "traits.db";
    }
}