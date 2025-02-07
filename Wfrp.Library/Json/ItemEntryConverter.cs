using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Wfrp.Library.Json.Entries;
using Wfrp.Library.Json.Readers;
using WFRP4e.Translator.Json.Entries;

namespace Wfrp.Library.Json
{
    public class ItemEntryJsonConverter : JsonConverter
    {
        public ItemEntryJsonConverter()
        {
        }

        public override void WriteJson(JsonWriter writer, object? value, JsonSerializer serializer) => serializer.Serialize(writer, value);

        public override object ReadJson(JsonReader reader, Type objectType, object? existingValue, JsonSerializer serializer)
        {
            var result = new List<Entry>();

            // deserialze the array
            if (reader.TokenType != JsonToken.Null)
            {
                if (reader.TokenType == JsonToken.StartArray)
                {
                    var token = (JArray)JToken.Load(reader);
                    foreach (var item in token)
                    {
                        var foundryType = item.Value<string>("Type");

                        var type = GenericReader.GetEntryType(foundryType, typeof(Entry));
                        var entry = (Entry)item.ToObject(type);
                        result.Add(entry);
                    }
                }
            }
            return result;
        }

        public override bool CanRead => true;

        public override bool CanConvert(Type objectType) => objectType.IsArray && objectType.GetElementType().BaseType == typeof(ItemEntry);
    }

    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IList<string> Roles { get; set; }
    }
}