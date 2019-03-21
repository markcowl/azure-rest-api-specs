namespace Sample.API.Models.Api20171001
{

    /// <summary>Properties of a linked server to be returned in get/put response</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerPropertiesTypeConverter))]
    public partial class RedisLinkedServerProperties
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisLinkedServerProperties" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisLinkedServerProperties FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Properties of a linked server to be returned in get/put response
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerPropertiesTypeConverter))]
    public partial interface IRedisLinkedServerProperties {

    }
}