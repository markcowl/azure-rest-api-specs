namespace Sample.API.Models.Api20180301
{

    /// <summary>A single Redis item in List or Get Operation.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisResourceTypeConverter))]
    public partial class RedisResource
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisResource" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20180301.IRedisResource FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// A single Redis item in List or Get Operation.
    [System.ComponentModel.TypeConverter(typeof(RedisResourceTypeConverter))]
    public partial interface IRedisResource {

    }
}