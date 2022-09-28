using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Effects
{
    public class EffectsExtractor
    {

        public static void ExtractEffects(string packName)
        {
            var scriptPath = Program.Configuration.GetSection("OutputPath").Value + "\\" + packName.Replace(".db", "");
            var packElements = File.ReadAllLines(Path.Combine(Program.Configuration.GetSection("OutputPath").Value, packName));
            var jsons = packElements.Select(pack => JObject.Parse(pack)).ToList();
            Console.WriteLine($"Processing {packName} with {jsons.Count} elements");
            foreach (var json in jsons)
            {
                var name = json["name"].Value<string>();
                var effects = json["effects"].ToArray();
                foreach(var effect in effects)
                {
                    Console.WriteLine($"Found {effect["label"].Value<string>()} - {effect["_id"].Value<string>()}");

                    if (!string.IsNullOrEmpty(effect["flags"]?["wfrp4e"]?["script"]?.ToString()))
                    {
                        if (!Directory.Exists(scriptPath))
                        {
                            Directory.CreateDirectory(scriptPath);
                        }
                        File.WriteAllText(scriptPath + "\\" + name + "_" + effect["_id"].Value<string>() + ".js", effect["flags"]["wfrp4e"]["script"].ToString());
                    }
                }
            }
        }
    }
}
