namespace Sample.API.Models.Api20171001
{

    /// <summary>Specifies a range of IP addresses permitted to connect to the cache</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisFirewallRulePropertiesTypeConverter))]
    public partial class RedisFirewallRuleProperties
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisFirewallRuleProperties" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisFirewallRuleProperties FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Specifies a range of IP addresses permitted to connect to the cache
    [System.ComponentModel.TypeConverter(typeof(RedisFirewallRulePropertiesTypeConverter))]
    public partial interface IRedisFirewallRuleProperties {

    }
}