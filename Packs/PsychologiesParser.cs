using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Pdf.Json;

namespace Pdf.Logic
{
    public class PsychologiesParser : GenericParser<Entry>
    {
        protected override string DbName => "psychologies.db";
    }
}