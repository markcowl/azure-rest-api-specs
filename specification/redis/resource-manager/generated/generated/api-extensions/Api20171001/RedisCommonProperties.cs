namespace Sample.API.Models.Api20171001
{

    /// <summary>Create/Update/Get common properties of the redis cache.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisCommonPropertiesTypeConverter))]
    public partial class RedisCommonProperties
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisCommonProperties" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisCommonProperties FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Create/Update/Get common properties of the redis cache.
    [System.ComponentModel.TypeConverter(typeof(RedisCommonPropertiesTypeConverter))]
    public partial interface IRedisCommonProperties {

    }
}