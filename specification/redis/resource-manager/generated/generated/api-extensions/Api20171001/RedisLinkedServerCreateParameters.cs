namespace Sample.API.Models.Api20171001
{

    /// <summary>Parameter required for creating a linked server to redis cache.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerCreateParametersTypeConverter))]
    public partial class RedisLinkedServerCreateParameters
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisLinkedServerCreateParameters" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisLinkedServerCreateParameters FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Parameter required for creating a linked server to redis cache.
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerCreateParametersTypeConverter))]
    public partial interface IRedisLinkedServerCreateParameters {

    }
}