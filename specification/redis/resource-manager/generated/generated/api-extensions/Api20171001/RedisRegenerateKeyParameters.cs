namespace Sample.API.Models.Api20171001
{

    /// <summary>Specifies which Redis access keys to reset.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisRegenerateKeyParametersTypeConverter))]
    public partial class RedisRegenerateKeyParameters
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisRegenerateKeyParameters" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisRegenerateKeyParameters FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Specifies which Redis access keys to reset.
    [System.ComponentModel.TypeConverter(typeof(RedisRegenerateKeyParametersTypeConverter))]
    public partial interface IRedisRegenerateKeyParameters {

    }
}