using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Linq;
using WFRP4e.Translator.Json;
using WFRP4e.Translator.Json.Entries;

namespace WFRP4e.Translator.Packs
{
    [FoundryType("scene")]
    public class SceneReader : GenericReader
    {
        public void UpdateEntry(JObject pack, SceneEntry mapping)
        {
            mapping.Name = pack.Value<string>("name");
            mapping.Type = "scene";
            UpdateIfDifferent(mapping, pack["_id"].ToString(), nameof(mapping.FoundryId));
            UpdateIfDifferent(mapping, pack["flags"]["core"]["sourceId"].ToString(), nameof(mapping.OriginFoundryId));
            UpdateIfDifferent(mapping, pack["flags"]["wfrp4e-core"]["scene-note"].ToString(), nameof(mapping.SceneNote));

            UpdateInitializationFolder(pack, mapping);
        }
    }
}