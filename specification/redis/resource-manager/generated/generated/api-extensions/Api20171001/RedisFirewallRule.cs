namespace Sample.API.Models.Api20171001
{

    /// <summary>
    /// A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
    /// </summary>
    [System.ComponentModel.TypeConverter(typeof(RedisFirewallRuleTypeConverter))]
    public partial class RedisFirewallRule
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisFirewallRule" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisFirewallRule FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
    [System.ComponentModel.TypeConverter(typeof(RedisFirewallRuleTypeConverter))]
    public partial interface IRedisFirewallRule {

    }
}