using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Json
{
    public class RollTable
    {
        public string _id { get; set; }

        public string name { get; set; }

        public string img { get; set; }

        public List<RollTableResult> results { get; set; } = new List<RollTableResult>();

        public string formula { get; set; }

        public string folder { get; set; }

        public string flagsWfrp4eKey { get; set; }

        public string flagsWfrp4CoreInitializationFolder { get; set; }

        public string flagsCoreSourceId { get; set; }
    }

    public class RollTableResult
    {
        public string _id { get; set; }

        public string text { get; set; }

        public string img { get; set; }

        public int rangeL { get; set; }

        public int rangeH { get; set; }

        public int[] range { get; set; }

        public int type { get; set; }

        public string flags { get; set; }
    }
}
