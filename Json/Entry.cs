using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Pdf.Json
{
    public class Entry
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public override string ToString()
        {
            return $"{Id}   :   {Name}";
        }

    }
}