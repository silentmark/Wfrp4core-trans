using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using WFRP4e.Translator.Json.Entries;
using WFRP4e.Translator.Packs;

namespace WFRP4e.Translator.Json
{
    public class ItemEntryJsonConverter : JsonConverter
    {
        public ItemEntryJsonConverter()
        {
        }


        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            serializer.Serialize(writer, value);
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var result = new List<ItemEntry>();

            // deserialze the array
            if (reader.TokenType != JsonToken.Null)
            {
                if (reader.TokenType == JsonToken.StartArray)
                {
                    var token = (JArray)JToken.Load(reader);
                    foreach (var item in token)
                    {
                        var foundryType = item.Value<string>("Type");

                        var type = GenericReader.GetEntryType(foundryType, typeof(ItemEntry));
                        var entry = (ItemEntry)item.ToObject(type);
                        result.Add(entry);
                    }
                }
            }
            return result;
        }

        public override bool CanRead
        {
            get { return true; }
        }

        public override bool CanConvert(Type objectType)
        {
            return objectType.IsArray && objectType.GetElementType().BaseType == typeof(ItemEntry);
        }
    }

    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IList<string> Roles { get; set; }
    }
}
