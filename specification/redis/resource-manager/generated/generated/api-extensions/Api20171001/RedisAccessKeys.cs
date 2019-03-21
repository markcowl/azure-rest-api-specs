namespace Sample.API.Models.Api20171001
{

    /// <summary>Redis cache access keys.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisAccessKeysTypeConverter))]
    public partial class RedisAccessKeys
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisAccessKeys" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisAccessKeys FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Redis cache access keys.
    [System.ComponentModel.TypeConverter(typeof(RedisAccessKeysTypeConverter))]
    public partial interface IRedisAccessKeys {

    }
}