using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Pdf.Json;

namespace Pdf.Tables
{
    public class CareersTable
    {
        public void Translate()
        {
            var careersMapping = JsonConvert.DeserializeObject<List<Mapping>>(File.ReadAllText(@"Mappings\wfrp4e.careers.json"));

            var careersTable =
                JObject.Parse(File.ReadAllText(Path.Combine(Program.Configuration.GetSection("TablesPath").Value,
                    "career.json")));

            careersTable["name"] = "Losowe Profesje";
            foreach (JObject row in (JArray) careersTable["rows"])
            {
                var name = row["name"].Value<string>();
                var translation = careersMapping.FirstOrDefault(x => x.Id == name);
                if (translation != null)
                {
                    row["name"] = translation.Name;
                }
                else
                {
                    Console.WriteLine("NIE ODNALEZIONO PROFESJI: " + name);

                }
            }

            File.WriteAllText($@"{Program.Configuration.GetSection("OutputPath").Value}\career.json",
                JsonConvert.SerializeObject(careersTable, Formatting.None));

        }
    }
}
