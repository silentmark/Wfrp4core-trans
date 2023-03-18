using Newtonsoft.Json.Linq;
using System;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("scene")]
    public class SceneParser : GenericItemParser
    {
        public override void Parse(JObject pack, BaseEntry entry)
        {
            var mapping = (SceneEntry)entry;
            pack["name"] = mapping.Name;
            if (pack["flags"] == null)
            {
                pack["flags"] = new JObject();
            }
            if (pack["flags"]["core"] == null)
            {
                pack["flags"]["core"] = new JObject();
            }
            pack["flags"]["core"]["sourceId"] = mapping.OriginFoundryId;

            if (pack["flags"] == null)
            {
                pack["flags"] = new JObject();
            }
            if (pack["flags"]["wfrp4e-core"] == null)
            {
                pack["flags"]["wfrp4e-core"] = new JObject();
            }
            pack["flags"]["wfrp4e-core"]["scene-note"] = mapping.SceneNote;
            foreach (JProperty property in pack["flags"])
            {
                if (property.Value["initialization-folder"] != null)
                {
                    property.Value["initialization-folder"] = mapping.InitializationFolder;
                    break;
                }
            }
        }
    }
}