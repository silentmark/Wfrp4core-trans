using WFRP4e.Translator.Json;

namespace WFRP4e.Translator.Packs
{
    public class PrayersParser : GenericParser<Entry>
    {
        protected override string DbName => "prayers.db";
    }
}