namespace Sample.API.Models.Api20171001
{

    /// <summary>Linked server Id</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerTypeConverter))]
    public partial class RedisLinkedServer
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisLinkedServer" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisLinkedServer FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Linked server Id
    [System.ComponentModel.TypeConverter(typeof(RedisLinkedServerTypeConverter))]
    public partial interface IRedisLinkedServer {

    }
}