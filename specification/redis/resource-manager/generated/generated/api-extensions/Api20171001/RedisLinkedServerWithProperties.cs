namespace Sample.API.Models.Api20171001
{

    /// <summary>Response to put/get linked server (with properties) for Redis cache.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerWithPropertiesTypeConverter))]
    public partial class RedisLinkedServerWithProperties
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisLinkedServerWithProperties" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Response to put/get linked server (with properties) for Redis cache.
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerWithPropertiesTypeConverter))]
    public partial interface IRedisLinkedServerWithProperties {

    }
}