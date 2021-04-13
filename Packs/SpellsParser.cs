using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class SpellsParser : GenericParser<Entry>
    {
        protected override string DbName => "spells.db";
    }
}