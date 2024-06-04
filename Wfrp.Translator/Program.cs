global using WFRP4e.Translator.Utilities;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Packs;
using System.Reflection;
using DeepL;
using WFRP4e.Translator.Json.Entries;
using System.Text;
using Wfrp.Library.Services;
using Config = WFRP4e.Translator.Utilities.Config;

namespace WFRP4e.Translator
{
    internal class Program
    {
        private static Random random = new Random();

        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        private static void Main(string[] args)
        {
            Console.SetWindowSize(Convert.ToInt32(Console.LargestWindowWidth * 0.9), Convert.ToInt32(Console.LargestWindowHeight * 0.9));

            Config.Configuration = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetParent(AppContext.BaseDirectory).FullName)
                 .AddJsonFile("appsettings-wfrp4e.json", false)
                 .Build();
            //var journals = JObject.Parse(File.ReadAllText("C:\\source-code\\WFRP\\wfrp4e-core-pl-source\\locales\\pl\\wfrp4e-core.journal-entries.json"));
            //var entries = (JObject)journals["entries"];
            //foreach (JProperty entryProp in entries.Properties())
            //{
            //    var entry = (JObject)entries[entryProp.Name]["pages"];
            //    foreach (JProperty page in entry.Properties())
            //    {
            //        var html = entry[page.Name].Value<string>("text");
            //        var htmlDoc = new HtmlDocument
            //        {
            //            OptionFixNestedTags = true,
            //            OptionCheckSyntax = true,
            //            OptionOutputAsXml = true,
            //            OptionAutoCloseOnEnd = true
            //        };
            //        htmlDoc.LoadHtml(html);
            //        html = htmlDoc.DocumentNode.OuterHtml;
            //        entry[page.Name]["text"] = html;
            //    }
            //}

            //using FileStream fs = File.Open("C:\\source-code\\WFRP\\wfrp4e-core-pl-source\\locales\\pl\\wfrp4e-core.journal-entries.json", FileMode.Create);
            //using StreamWriter sw = new StreamWriter(fs);
            //using JsonTextWriter jw = new JsonTextWriter(sw);

            //jw.Formatting = Formatting.Indented;
            //jw.IndentChar = ' ';
            //jw.Indentation = 4;

            //journals.WriteTo(jw);

            Console.WriteLine(
                        $"Konfiguracja:\nŚcieżka do plików .db: {Config.PacksPath}\n");
            Console.WriteLine($"Ogarniam mapowanie");
            PackageUpdater.ProgressUpdated += (sender, message) => Console.WriteLine(message.EventData);
            PackageUpdater.InitAllMappings(Config.SourceJsonsEn, Mappings.OriginalTypeToMappingDictonary);
            PackageUpdater.InitAllMappings(Config.SourceJsonsPl, Mappings.TranslatedTypeToMappingDictonary);

            Wfrp.Library.Services.Config.SourceJsonsEn = Config.SourceJsonsEn;
            Wfrp.Library.Services.Config.SourceJsonsPl = Config.SourceJsonsPl;
            Wfrp.Library.Services.Config.BabeleLocationEn = Config.BabeleLocationEn;
            Wfrp.Library.Services.Config.BabeleLocationPl = Config.BabeleLocationPl;

            ConsoleKeyInfo input;
            do
            {
                foreach (var module in Config.PacksPath.Split(';'))
                {
                    Console.WriteLine($"Generuję json dla: {module}");
                    PackageUpdater.ExtractJsonsToFilesAndCorrectIds(module);
                }

                Console.WriteLine(
                    @"
                  Wciśnij 1. wygeneruj pośredni JSONMAPPING z leveldb EN.
                  Wciśnij 2. wygeneruj Babele EN z LevelDB EN.
                  Wciśnij 3. zaktualizuj JSONMAPPING EN na podstawie Babele.
                  Wciśnij 4. zaktualizuj JSONMAPPING PL na podstawie Babele.
                  "
    );
                input = Console.ReadKey();
                Console.WriteLine();

                if (input.KeyChar == '1')
                {
                    foreach(var module in Config.PacksPath.Split(';'))
                    {
                        UpdateJsonMappingFiles(module, Config.SourceJsonsEn, Mappings.OriginalTypeToMappingDictonary, Config.SourceJsonsPl, Mappings.TranslatedTypeToMappingDictonary);
                    }
                }
                else if (input.KeyChar == '2')
                {
                    foreach (var module in Config.PacksPath.Split(';'))
                    {
                        PackageUpdater.GenerateBabeleJsonFiles(module, Config.BabeleLocationEn, Mappings.OriginalTypeToMappingDictonary);
                        PackageUpdater.CompareBabeleJsonFiles(Config.BabeleLocationEn, Config.BabeleLocationPl);
                    }
                }
                else if (input.KeyChar == '3')
                {
                    PackageUpdater.GenerateJsonFilesFromBabele(Config.SourceJsonsEn, Config.BabeleLocationEn, Mappings.OriginalTypeToMappingDictonary);
                }
                else if (input.KeyChar == '4')
                {
                    PackageUpdater.GenerateJsonFilesFromBabele(Config.SourceJsonsPl, Config.BabeleLocationPl, Mappings.TranslatedTypeToMappingDictonary);
                }
            }
            while (input.KeyChar != 'x');
            Console.WriteLine("Zakończono");
        }

        private static void somerandomstufftofixeffects()
        {
            try
            {
                var files = Directory.EnumerateFiles(Wfrp.Library.Services.Config.BabeleLocationPl, "*.json", SearchOption.AllDirectories).ToList();
                files = files.Where(x => !x.Contains("forien")).ToList();
                files = files.Where(x => !x.Contains("actor")).ToList();
                foreach (var file in files)
                {
                    var originalBabele = JObject.Parse(File.ReadAllText(file));
                    foreach (var entry in originalBabele["entries"])
                    {
                        JObject jEntry = null;
                        if (entry is JObject)
                        {
                            jEntry = entry as JObject;
                        }
                        if (entry is JProperty)
                        {
                            jEntry = originalBabele["entries"][(entry as JProperty).Name] as JObject;
                        }
                        if (jEntry != null && jEntry["effects"] != null)
                        {
                            foreach (var effect in jEntry["effects"].ToList())
                            {
                                if (effect is JProperty)
                                {
                                    var jEffect = effect as JProperty;
                                    if (jEntry["effects"][jEffect.Name][jEffect.Name] != null)
                                    {
                                        var dupadupa = jEntry["effects"][jEffect.Name][jEffect.Name].ToList();
                                        foreach (var dupaProperty in dupadupa.OfType<JProperty>())
                                        {
                                            jEntry["effects"][jEffect.Name][dupaProperty.Name] = jEntry["effects"][jEffect.Name][jEffect.Name][dupaProperty.Name].ToString();
                                        }

                                        (jEntry["effects"][jEffect.Name] as JObject).Remove(jEffect.Name);
                                    }
                                }
                            }
                        }
                    }
                    using FileStream fs = File.Open(file, FileMode.Create);
                    using StreamWriter sw = new StreamWriter(fs);
                    using JsonTextWriter jw = new JsonTextWriter(sw);

                    jw.Formatting = Formatting.Indented;
                    jw.IndentChar = ' ';
                    jw.Indentation = 4;

                    originalBabele.WriteTo(jw);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("somerandomstuff" + ex);
            }
        }

        private static void UpdateJsonMappingFiles(string dbPath, string sourceJsonPath, Dictionary<string, Dictionary<string, BaseEntry>> typeToMappingDirectory, string sourceJsonsPl, Dictionary<string, Dictionary<string, BaseEntry>> translatedTypeToMappingDictonary)
        {
            var packs = Directory.EnumerateDirectories(dbPath, "_source", SearchOption.AllDirectories).ToList();
            //packs = packs.Where(x => !x.Contains("armoury")).ToList();
            //packs = packs.Where(x => !x.Contains("actor")).ToList();

            var newTypeToJsonListDic = new Dictionary<string, List<BaseEntry>>();
            var newTypeToJsonListDicPL = new Dictionary<string, List<BaseEntry>>();

            foreach (var pack in packs)
            {
                var jsonsPaths = Directory.EnumerateFiles(pack, "*.json").ToList();
                foreach (var dbJsonPath in jsonsPaths)
                {
                    var itemJson = JObject.Parse(File.ReadAllText(dbJsonPath));
                    if (!(itemJson["type"] == null ||
                                itemJson["type"].ToString() != "npc" &&
                                itemJson["type"].ToString() != "creature" &&
                                itemJson["type"].ToString() != "character" &&
                                itemJson["type"].ToString() != "vehicle"))
                    {
                        continue;
                    }
                    if (itemJson["_key"].ToString().Contains("."))
                    {
                        continue;
                    }
                    if (itemJson["type"]?.ToString() == "Item" ||
                        itemJson["type"]?.ToString() == "RollTable" ||
                        itemJson["type"]?.ToString() == "Macro")
                    {
                        continue;
                    }
                    var id = itemJson.GetValue("_id").Value<string>();
                    var type = GenericReader.GetTypeFromJson(itemJson);
                    var targtetType = GenericReader.GetEntryType(type, typeof(BaseEntry));

                    var name = itemJson.GetValue("name").Value<string>();

                    var sourceCompendium = pack.Replace(dbPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[0];
                    var packName = pack.Replace(dbPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[2];
                    var originalSourceId = itemJson["flags"]?["core"]?["sourceId"]?.ToString();
                    var correctSourceId = originalSourceId.Contains(".items.Item.") ? $"Compendium.{sourceCompendium}.{packName}.Item.{id}" : $"Compendium.{sourceCompendium}.{packName}.{id}";
                    if (originalSourceId != correctSourceId)
                    {
                        itemJson["flags"] = itemJson["flags"] ?? new JObject();
                        itemJson["flags"]["core"] = itemJson["flags"]["core"] ?? new JObject();
                        itemJson["flags"]["core"]["sourceId"] = correctSourceId;
                        Console.WriteLine($"SOMETHING IS WRONG: {originalSourceId} VS: {correctSourceId}");
                        originalSourceId = correctSourceId;
                    }

                    if (!typeToMappingDirectory.ContainsKey(type))
                    {
                        typeToMappingDirectory[type] = new Dictionary<string, BaseEntry>();
                    }
                    if (!translatedTypeToMappingDictonary.ContainsKey(type))
                    {
                        translatedTypeToMappingDictonary[type] = new Dictionary<string, BaseEntry>();
                    }

                    var dic = typeToMappingDirectory[type];
                    var dicPL = translatedTypeToMappingDictonary[type];

                    if (!dic.ContainsKey(originalSourceId) && originalSourceId.Contains(".items.Item."))
                    {
                        //temporary fix for item id replacement.
                        originalSourceId = originalSourceId.Replace(".items.Item.", ".items.");
                    }

                    if (!dic.ContainsKey(originalSourceId))
                    {
                        //TRY CREATE EMPTY:
                        Console.WriteLine($"Nie odnalazłem wpisu dla: {originalSourceId} - {type} - {name}");
                        var entry = targtetType.GetConstructor(new Type[] { }).Invoke(new object[] { }) as BaseEntry;
                        var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                        if (readerType != null)
                        {
                            var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                            var method = readerType.GetMethod("UpdateEntry");
                            method.Invoke(reader, new object[] { itemJson, entry, false });

                            dic.Add(entry.OriginFoundryId, entry);
                            if (!newTypeToJsonListDic.ContainsKey(type))
                            {
                                newTypeToJsonListDic[type] = new List<BaseEntry>();
                            }
                            newTypeToJsonListDic[type].Add(entry);

                            if (!newTypeToJsonListDicPL.ContainsKey(type))
                            {
                                newTypeToJsonListDicPL[type] = new List<BaseEntry>();
                            }
                            newTypeToJsonListDicPL[type].Add(entry);
                        }
                    }
                    else
                    {
                        //GET AND UPDATE IF NEEDED;
                        var entry = dic[originalSourceId];
                        var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                        if (readerType != null)
                        {
                            var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                            var method = readerType.GetMethod("UpdateEntry");
                            method.Invoke(reader, new object[] { itemJson, entry, false });
                            if (!newTypeToJsonListDic.ContainsKey(type))
                            {
                                newTypeToJsonListDic[type] = new List<BaseEntry>();
                            }
                            newTypeToJsonListDic[type].Add(entry);

                            if (!newTypeToJsonListDicPL.ContainsKey(type))
                            {
                                newTypeToJsonListDicPL[type] = new List<BaseEntry>();
                            }


                            if (!dicPL.ContainsKey(originalSourceId) && originalSourceId.Contains(".items.Item."))
                            {
                                //temporary fix for item id replacement.
                                originalSourceId = originalSourceId.Replace(".items.Item.", ".items.");
                            }

                            if (dicPL.ContainsKey(originalSourceId))
                            {
                                var entryPL = dicPL[originalSourceId];
                                method.Invoke(reader, new object[] { itemJson, entryPL, true });
                                entryPL.OriginFoundryId = entry.OriginFoundryId;
                                newTypeToJsonListDicPL[type].Add(entryPL);
                            }
                            else
                            {
                                Console.WriteLine($"Nie odnalazłem POLSKIEGO wpisu dla: {originalSourceId} - {type} - {name}");
                            }
                        }
                    }
                }
            }

            foreach (var pack in packs)
            {
                var jsonsPaths = Directory.EnumerateFiles(pack, "*.json").ToList();
                foreach (var dbJsonPath in jsonsPaths)
                {
                    var actorJson = JObject.Parse(File.ReadAllText(dbJsonPath));
                    if (actorJson["type"] == null ||
                                actorJson["type"].ToString() != "npc" &&
                                actorJson["type"].ToString() != "creature" &&
                                actorJson["type"].ToString() != "character" &&
                                actorJson["type"].ToString() != "vehicle")
                    {
                        continue;
                    }
                    var id = actorJson.GetValue("_id").Value<string>();
                    var type = GenericReader.GetTypeFromJson(actorJson);
                    var targtetType = GenericReader.GetEntryType(type, typeof(BaseEntry));

                    var name = actorJson.GetValue("name").Value<string>();

                    var sourceCompendium = pack.Replace(dbPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[0];
                    var packName = pack.Replace(dbPath, "").Split('\\', StringSplitOptions.RemoveEmptyEntries)[2];
                    var originalSourceId = actorJson["flags"]["core"]["sourceId"].ToString();
                    var correctSourceId = $"Compendium.{sourceCompendium}.{packName}.{id}";
                    if (originalSourceId != correctSourceId) // && !originalSourceId.Contains(".items.Item."))
                    {
                        actorJson["flags"] = actorJson["flags"] ?? new JObject();
                        actorJson["flags"]["core"] = actorJson["flags"]["core"] ?? new JObject();
                        actorJson["flags"]["core"]["sourceId"] = correctSourceId;
                        Console.WriteLine($"SOMETHING IS WRONG: {originalSourceId} VS: {correctSourceId}");
                        originalSourceId = correctSourceId;
                    }

                    if (!typeToMappingDirectory.ContainsKey(type))
                    {
                        typeToMappingDirectory[type] = new Dictionary<string, BaseEntry>();
                    }
                    if (!translatedTypeToMappingDictonary.ContainsKey(type))
                    {
                        translatedTypeToMappingDictonary[type] = new Dictionary<string, BaseEntry>();
                    }

                    var dic = typeToMappingDirectory[type];
                    var dicPL = translatedTypeToMappingDictonary[type];
                    if (!dic.ContainsKey(originalSourceId))
                    {
                        //TRY CREATE EMPTY:
                        Console.WriteLine($"Nie odnalazłem wpisu dla: {originalSourceId} - {type} - {name}");
                        var entry = targtetType.GetConstructor(new Type[] { }).Invoke(new object[] { }) as ActorEntry;
                        var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                        if (readerType != null)
                        {
                            var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                            var method = readerType.GetMethod("UpdateEntry");
                            method.Invoke(reader, new object[] { actorJson, entry });

                            dic.Add(entry.OriginFoundryId, entry);
                            if (!newTypeToJsonListDic.ContainsKey(type))
                            {
                                newTypeToJsonListDic[type] = new List<BaseEntry>();
                            }
                            newTypeToJsonListDic[type].Add(entry);
                            if (!newTypeToJsonListDicPL.ContainsKey(type))
                            {
                                newTypeToJsonListDicPL[type] = new List<BaseEntry>();
                            }
                            newTypeToJsonListDicPL[type].Add(entry);
                        }
                    }
                    else
                    {
                        //GET AND UPDATE IF NEEDED;
                        var entry = dic[originalSourceId];
                        var readerType = GenericReader.GetEntryType(type, typeof(GenericReader));
                        if (readerType != null)
                        {
                            var reader = readerType.GetConstructor(new Type[] { }).Invoke(new object[] { });
                            var method = readerType.GetMethod("UpdateEntry");
                            method.Invoke(reader, new object[] { actorJson, entry, false});
                            if (!newTypeToJsonListDic.ContainsKey(type))
                            {
                                newTypeToJsonListDic[type] = new List<BaseEntry>();
                            }
                            newTypeToJsonListDic[type].Add(entry);
                            if (!newTypeToJsonListDicPL.ContainsKey(type))
                            {
                                newTypeToJsonListDicPL[type] = new List<BaseEntry>();
                            }

                            if (dicPL.ContainsKey(originalSourceId))
                            {
                                var entryPL = dicPL[originalSourceId];
                                method.Invoke(reader, new object[] { actorJson, entryPL, true });
                                newTypeToJsonListDicPL[type].Add(entryPL);
                            }
                            else
                            {
                                Console.WriteLine($"Nie odnalazłem POLSKIEGO wpisu dla: {originalSourceId} - {type} - {name}");
                            }
                        }
                    }
                }
            }

            foreach (var type in newTypeToJsonListDic.Keys)
            {
                foreach (var newItem in newTypeToJsonListDic[type])
                {
                    var folder = newItem.OriginFoundryId.Split('.')[1];
                    var dictionaryPath = Path.Combine(sourceJsonPath, folder, type);
                    if (!Directory.Exists(dictionaryPath))
                    {
                        Directory.CreateDirectory(dictionaryPath);
                    }

                    var path = sourceJsonPath + "\\" + newItem.OriginFoundryId.Split(".")[1] + "\\" + type;
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    var fileName = string.Join("-", newItem.Name.Split(Path.GetInvalidFileNameChars()));
                    var filePath = Path.Combine(path, $"{newItem.FoundryId}.json");
                    File.WriteAllText(filePath, JsonConvert.SerializeObject(newItem, Formatting.Indented));
                }
            }
            foreach (var type in newTypeToJsonListDicPL.Keys)
            {
                foreach (var newItem in newTypeToJsonListDicPL[type])
                {
                    var folder = newItem.OriginFoundryId.Split('.')[1];
                    var dictionaryPath = Path.Combine(sourceJsonsPl, folder, type);
                    if (!Directory.Exists(dictionaryPath))
                    {
                        Directory.CreateDirectory(dictionaryPath);
                    }

                    var path = sourceJsonsPl + "\\" + newItem.OriginFoundryId.Split(".")[1] + "\\" + type;
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    var fileName = string.Join("-", newItem.Name.Split(Path.GetInvalidFileNameChars()));
                    var filePath = Path.Combine(path, $"{newItem.FoundryId}.json");
                    File.WriteAllText(filePath, JsonConvert.SerializeObject(newItem, Formatting.Indented));
                }
            }
        }

        #region Various

        private static void CreateDeeplGlossary()
        {
            var translator = DeepLTranslator.Client;

            var entriesDictionary = new Dictionary<string, string>();
            var props = typeof(Mappings).GetFields(BindingFlags.Public | BindingFlags.Static).ToList();
            foreach (var prop in props)
            {
                var dic = prop.GetValue(null) as Dictionary<string, BaseEntry>;
                if (dic != null)
                {
                    foreach (var value in dic.Keys)
                    {
                        entriesDictionary[value] = dic[value].Name;
                    }
                }
            }

            entriesDictionary.Add("roll", "rzut");
            entriesDictionary.Add("Foundry", "Foundry");

            var glossaries = translator.ListGlossariesAsync().Result;
            foreach (var glossary in glossaries)
            {
                translator.DeleteGlossaryAsync(glossary).Wait();
            }
            var glossaryEnToDe = translator.CreateGlossaryAsync("Wfrp Glossary", "EN", "PL", new GlossaryEntries(entriesDictionary)).Result;
        }

        private static void ValidatingCareerTranslatiosn()
        {
            var careers = JArray.Parse(File.ReadAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.career.desc.json"));
            var skills = JArray.Parse(File.ReadAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.skill.desc.json"));
            foreach (JObject career in careers)
            {
                var skillsText = ((JArray)career["Skills"]).Select(x => x.Value<string>()).ToList();
                foreach (var skillText in skillsText)
                {
                    var skill = skills.FirstOrDefault(x => skillText == x.Value<string>("Name"));
                    if (skill == null)
                    {
                        var trimmedSkillText = skillText;
                        if (skillText.IndexOf("(") > 0)
                        {
                            trimmedSkillText = skillText.Substring(0, skillText.IndexOf("(") - 1).Trim();
                        }

                        skill = skills.FirstOrDefault(x => x.Value<string>("Name").StartsWith(trimmedSkillText));
                        if (skill == null)
                        {
                            Console.WriteLine("NIE ODNALEZIONO UMIEJĘTNOŚCI: " + skillText + " DLA: " + career.Value<string>("Name"));
                        }
                        else
                        {
                            var randomtext = RandomString(16);
                            var newSkill = skill.DeepClone();
                            newSkill["Name"] = skillText;
                            newSkill["OriginalName"] = skill.Value<string>("OriginalName").Split("(")[0].Trim() + " (" + randomtext + ")";
                            newSkill["FoundryId"] = randomtext;
                            newSkill["OriginFoundryId"] = "Compendium.wfrp4e-core.skills." + randomtext;
                            skills.Add(newSkill);
                        }
                    }
                }
            }
            File.WriteAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.skill.desc.json", JsonConvert.SerializeObject(skills, Formatting.Indented));
        }

        private static void FixStyling()
        {
            foreach (var file in Directory.GetFiles("Final"))
            {
                if (file.Contains("wfrp4e") && file.Contains("json"))
                {
                    var list = JsonConvert.DeserializeObject<List<BaseEntry>>(File.ReadAllText(file));

                    foreach (var entry in list)
                    {
                        if (entry.Description != null && !entry.Description.StartsWith("<p>"))
                        {
                            entry.Description = "<p>" + entry.Description + "</p>";
                        }
                    }

                    var text = JsonConvert.SerializeObject(list, Formatting.Indented);
                    File.WriteAllText(file, text);
                }
            }
        }

        private static void FixCriticals()
        {
            var critArm = JObject.Parse(File.ReadAllText("Tables\\critarm.json"));
            var critBody = JObject.Parse(File.ReadAllText("Tables\\critbody.json"));
            var critHead = JObject.Parse(File.ReadAllText("Tables\\crithead.json"));
            var critLeg = JObject.Parse(File.ReadAllText("Tables\\critleg.json"));
            var list = new List<JObject> { critArm, critBody, critHead, critLeg };

            var entries = JsonConvert.DeserializeObject<List<BaseEntry>>(File.ReadAllText("Final\\wfrp4e.critical.desc.json"));
            foreach (var entry in entries)
            {
                JObject row = null;
                foreach (var jObj in list)
                {
                    if (row == null)
                    {
                        row = (JObject)((JArray)jObj["rows"]).FirstOrDefault(x =>
                          x["name"].Value<string>() == entry.Name);
                    }
                }

                if (row == null)
                {
                    Console.WriteLine("NIE ODNALEZIOJNO: " + entry);
                }
                else
                {
                    entry.Description = row["description"].Value<string>();
                    if (!entry.Description.StartsWith("<p>"))
                    {
                        entry.Description = "<p>" + entry.Description + "</p>";
                    }
                }
            }

            foreach (var jObj in list)
            {
                foreach (JObject row in ((JArray)jObj["rows"]))
                {
                    var name = row["name"].Value<string>();
                    var entry = entries.SingleOrDefault(x => x.Name == name);
                    if (entry == null)
                    {
                        Console.WriteLine("NIE ODNALEZIONO WPISU: " + name);
                    }
                }
            }
            var text = JsonConvert.SerializeObject(entries, Formatting.Indented);
            File.WriteAllText("Final\\wfrp4e.critical.desc.json", text);
        }

        private static void SomeTransformationsOverTables()
        {
            var entries = JArray.Parse(File.ReadAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.table.desc.json"));
            var critcs = File.ReadAllLines("C:\\Code\\wfrp4e-core\\wfrp4e-core\\packs\\tables.db").Select(x => JObject.Parse(x)).ToList();
            critcs.AddRange(File.ReadAllLines("C:\\Code\\wfrp4e-core\\wfrp4e-eis\\packs\\tables.db").Select(x => JObject.Parse(x)));
            foreach (JObject entry in entries)
            {
                foreach (JObject result in (JArray)(entry["TableResults"]))
                {
                    if (result.Value<string>("Name") == null)
                    {
                        result["Name"] = result["OriginalName"];
                        var entryId = entry.Value<string>("FoundryId");
                        var resultId = result.Value<string>("FoundryId");

                        var table = critcs.FirstOrDefault(x => x.Value<string>("_id") == entryId);
                        if (table != null)
                        {
                            var resultDb = ((JArray)table["results"]).FirstOrDefault(x => x.Value<string>("_id") == resultId);
                            if (resultDb != null)
                            {
                                var text = resultDb.Value<string>("text");
                                result["OriginalName"] = text;
                                if (text.StartsWith("@UUID[Compendium."))
                                {
                                    text = text.Substring(0, text.IndexOf("{")) + "{" + result["Name"] + "}";
                                    result["Name"] = text;
                                }
                            }
                            else
                            {
                                Console.WriteLine("NIE ODNALEZIONO RESULTATU: " + result["Name"] + " Z TABELI: " + entry["Name"]);
                            }
                        }
                        else
                        {
                            Console.WriteLine("NIE ODNALEZIONO TABELI: " + entry["Name"]);
                            break;
                        }
                    }
                }
            }

            File.WriteAllText("C:\\Code\\wfrp4core-pl\\wfrp4e-jsons\\wfrp4e.table.desc.json", JsonConvert.SerializeObject(entries, Formatting.Indented));
            // File.WriteAllText(targetPath, JsonConvert.SerializeObject(arr, Formatting.Indented));
        }

        #endregion Various
    }
}