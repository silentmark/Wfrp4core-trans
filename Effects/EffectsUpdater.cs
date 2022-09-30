using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFRP4e.Translator.Effects
{
    public class EffectsUpdater
    {
        public static Dictionary<string, string> Effects = new Dictionary<string, string>();
        public static Dictionary<string, string> EffectsWithName = new Dictionary<string, string>();
        public static Dictionary<string, JObject> ItemNamesToObjects = new Dictionary<string, JObject>();

        public static void BuildEffectsDictionary()
        {
            Effects.Clear();
            EffectsWithName.Clear();

            var scriptPath = Program.Configuration.GetSection("OutputPath").Value;
            var scriptDirectoriees = Directory.GetDirectories(scriptPath);
            foreach(var scriptDir in scriptDirectoriees)
            {
                var files = Directory.GetFiles(scriptDir);
                foreach(var file in files)
                {
                    var effectId = file.Split("_")[1].Replace(".js", "");
                    var effectName = Path.GetFileName(file).Replace(".js", "");
                    var script = File.ReadAllText(file);
                    if (Effects.ContainsKey(effectId))
                    {
                        Console.WriteLine("BŁĄD, ZDUPLIKOWANY EFFECT ID: " + effectId);
                        Console.WriteLine(file);
                        Console.WriteLine(script);
                        Console.WriteLine("ISTNIEJĄCY SKRYPT:");
                        Console.WriteLine(Effects[effectId]);
                        Console.WriteLine();
                        Console.WriteLine();
                        Console.WriteLine();
                    }
                    else
                    {
                        Effects[effectId] = script;
                    }
                    EffectsWithName[effectName] = script;
                }
            }
        }

        public static void EffectsUpdate(string packName, bool actors = false)
        {
            var scriptPath = Program.Configuration.GetSection("OutputPath").Value + "\\" + packName.Replace(".db", "");
            var packElements = File.ReadAllLines(Path.Combine(Program.Configuration.GetSection("OutputPath").Value, packName));
            var jsons = packElements.Select(pack => JObject.Parse(pack)).ToList();
            Console.WriteLine($"Processing {packName} with {jsons.Count} elements");
            foreach (var json in jsons)
            {
                if (!actors)
                {
                    UpdateItemScripts(json);
                }
                else
                {
                    UpdateActorScripts(json);
                }
            }
            File.Delete($@"{scriptPath}.db");
            foreach (var pack in jsons.OrderBy(x => x["name"].ToString()))
            {
                File.AppendAllLines($@"{scriptPath}.db", new[] { JsonConvert.SerializeObject(pack, Formatting.None) });
            }
        }

        private static void UpdateActorScripts(JObject json)
        {
            var name = json["name"].Value<string>();
            var type = json["type"].Value<string>();
            var items = json["items"].ToArray();
            foreach (var item in items)
            {
                var postSubMessage = true;
                var objectType = item["type"].Value<string>();
                var objectName = item["name"].Value<string>();
                bool requiresFix = false;
                if (item["effects"] != null)
                {
                    var effects = item["effects"].ToArray();
                    foreach (var effect in effects)
                    {
                        var label = effect["label"].Value<string>();
                        var id = effect["_id"].Value<string>();
                        if (!string.IsNullOrEmpty(effect["flags"]?["wfrp4e"]?["script"]?.ToString()))
                        {
                            if (postSubMessage)
                            {
                                Console.WriteLine($"Aktualizacja przedmiotu {objectType} - {objectName}");
                                postSubMessage = false;
                            }
                            if (Effects.ContainsKey(id))
                            {
                                Console.WriteLine($"Aktualizuję skrypt dla: {label}");
                                effect["flags"]["wfrp4e"]["script"] = Effects[id];
                            }
                            else
                            {
                                var effectKeys = EffectsWithName.Keys.Where(x => x.StartsWith(label + "_")).ToList();
                                if (effectKeys.Count == 1)
                                {
                                    Console.WriteLine($"Aktualizuję skrypt dla: {label}");
                                    effect["flags"]["wfrp4e"]["script"] = EffectsWithName[effectKeys[0]];
                                }
                                else
                                {
                                    requiresFix = true;
                                    Console.WriteLine($"NIE ODNALEZIONO SKRYPTU (LICZBA EFEKTÓW: {effectKeys.Count}) DLA: {effect["_id"]} - {effect["label"]}");
                                }
                            }
                        }
                    }
                }
                if (requiresFix)
                {
                    if (ItemNamesToObjects.ContainsKey(objectType + "." + objectName))
                    {
                        Console.WriteLine($"Kopiowanie efektów ze źródła: {objectName}");
                        item["effects"] = ItemNamesToObjects[objectType + "." + objectName]["effects"].DeepClone();
                    }
                    else
                    {
                        Console.WriteLine($"NIE UDAŁO SIĘ NAPRAWIĆ SKRYPTÓ DLA: {objectName} W AKTORZE: {name}");
                    }
                }

            }
        }

        private static bool UpdateItemScripts(JObject json)
        {
            var name = json["name"].Value<string>();
            var type = json["type"].Value<string>();
            bool postMessage = true;
            ItemNamesToObjects[type + "." + name] = json;
            if (json["effects"] != null)
            {
                var effects = json["effects"].ToArray();
                foreach (var effect in effects)
                {
                    var label = effect["label"].Value<string>();
                    var id = effect["_id"].Value<string>();
                    if (!string.IsNullOrEmpty(effect["flags"]?["wfrp4e"]?["script"]?.ToString()))
                    {
                        if (postMessage)
                        {
                            Console.WriteLine($"Aktualizacja {type} - {name}");
                            postMessage = false;
                        }
                        if (Effects.ContainsKey(id))
                        {
                            Console.WriteLine($"Aktualizuję skrypt dla: {label}");
                            effect["flags"]["wfrp4e"]["script"] = Effects[id];
                        }
                        else
                        {
                            var effectKeys = EffectsWithName.Keys.Where(x => x.StartsWith(label + "_")).ToList();
                            if (effectKeys.Count == 1)
                            {
                                Console.WriteLine($"Aktualizuję skrypt dla: {label}");
                                effect["flags"]["wfrp4e"]["script"] = EffectsWithName[effectKeys[0]];
                            }
                            else
                            {
                                Console.WriteLine($"NIE ODNALEZIONO SKRYPTU (LICZBA EFEKTÓW: {effectKeys.Count}) DLA: {effect["_id"]} - {effect["label"]}");
                            }
                        }
                    }
                }
            }

            return postMessage;
        }
    }
}
