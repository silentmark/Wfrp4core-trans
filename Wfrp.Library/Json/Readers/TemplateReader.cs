using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("template")]
    public class TemplateReader : GenericReader
    {
        public void UpdateEntry(JObject pack, TemplateEntry mapping, bool onlyNulls = false)
        {
            UpdateItemEntry(pack, mapping, onlyNulls);

            UpdateIfDifferent(mapping, pack["system"]?["gmdescription"]?["value"]?.ToString(), nameof(mapping.GmDescription), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["alterName"]?["pre"]?.ToString(), nameof(mapping.AlterNamePre), onlyNulls);
            UpdateIfDifferent(mapping, pack["system"]?["alterName"]?["post"]?.ToString(), nameof(mapping.AlterNamePost), onlyNulls);

            var skills = pack["system"]?["skills"]?["list"]?.ToArray();
            if (skills != null)
            {
                mapping.Skills.Clear();
                foreach (var skill in skills)
                {
                    mapping.Skills.Add(skill["name"].ToString());
                }
            }
            var talents = pack["system"]?["talents"]?["list"]?.ToArray();
            if (talents != null)
            {
                mapping.Talents.Clear();
                foreach (var talent in talents)
                {
                    mapping.Talents.Add(talent["name"].ToString());
                }
            }
            var traits = pack["system"]?["traits"]?["list"]?.ToArray();
            if (traits != null)
            {
                mapping.Traits.Clear();
                foreach (var trait in traits)
                {
                    mapping.Traits.Add(trait["name"].ToString());
                }
            }
            var options = pack["system"]?["trappings"]?["options"].ToArray();
            if (options != null)
            {
                mapping.Options.Clear();
                foreach (var option in options)
                {
                    mapping.Options.Add(new TemplateOption
                    {
                        Name = option["name"].ToString(),
                        Id = option["id"].ToString()
                    });
                }
            }
        }

        public void UpdateEntryFromBabele(JObject pack, TemplateEntry mapping)
        {
            UpdateItemEntryFromBabele(pack, mapping);

            UpdateIfDifferent(mapping, pack["system"]?["gmdescription"]?["value"]?.ToString(), nameof(mapping.GmDescription), false);
            UpdateIfDifferent(mapping, pack["system"]?["alterName"]?["pre"]?.ToString(), nameof(mapping.AlterNamePre), false);
            UpdateIfDifferent(mapping, pack["system"]?["alterName"]?["post"]?.ToString(), nameof(mapping.AlterNamePost), false);

            var skills = pack["system"]?["skills"]?["list"]?.ToArray();
            if (skills != null)
            {
                mapping.Skills.Clear();
                foreach (var skill in skills)
                {
                    mapping.Skills.Add(skill["name"].ToString());
                }
            }
            var talents = pack["system"]?["talents"]?["list"]?.ToArray();
            if (talents != null)
            {
                mapping.Talents.Clear();
                foreach (var talent in talents)
                {
                    mapping.Talents.Add(talent["name"].ToString());
                }
            }
            var traits = pack["system"]?["traits"]?["list"]?.ToArray();
            if (traits != null)
            {
                mapping.Traits.Clear();
                foreach (var trait in traits)
                {
                    mapping.Traits.Add(trait["name"].ToString());
                }
            }
            var options = pack["system"]?["trappings"]?["options"].ToArray();
            if (options != null)
            {
                mapping.Options.Clear();
                foreach (var option in options)
                {
                    mapping.Options.Add(new TemplateOption
                    {
                        Name = option["name"].ToString(),
                        Id = option["id"].ToString()
                    });
                }
            }
        }
    }
}