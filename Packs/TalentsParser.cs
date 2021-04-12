using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Pdf.Json;

namespace Pdf.Logic
{
    public class TalentsParser : GenericParser<TalentEntry>
    {
        protected override void TranslatePack(JObject pack, List<TalentEntry> translations)
        {
            base.TranslatePack(pack, translations);

            var name = pack.Value<string>("name");
            var trans = translations.FirstOrDefault(x => x.Id == name);
            if (trans != null)
            {
                pack["data"]["tests"]["value"] = trans.Tests;
            }
        }

        protected override string DbName => "talents.db";
    }
}