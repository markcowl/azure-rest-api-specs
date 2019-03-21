namespace Sample.API.Models.Api20171001
{

    /// <summary>List of linked servers (with properties) of a Redis cache.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerWithPropertiesListTypeConverter))]
    public partial class RedisLinkedServerWithPropertiesList
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisLinkedServerWithPropertiesList" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisLinkedServerWithPropertiesList FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// List of linked servers (with properties) of a Redis cache.
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerWithPropertiesListTypeConverter))]
    public partial interface IRedisLinkedServerWithPropertiesList {

    }
}