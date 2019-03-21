namespace Sample.API.Models.Api20171001
{

    /// <summary>Parameters required for creating a firewall rule on redis cache.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisFirewallRuleCreateParametersTypeConverter))]
    public partial class RedisFirewallRuleCreateParameters
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisFirewallRuleCreateParameters" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisFirewallRuleCreateParameters FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Parameters required for creating a firewall rule on redis cache.
    [System.ComponentModel.TypeConverter(typeof(RedisFirewallRuleCreateParametersTypeConverter))]
    public partial interface IRedisFirewallRuleCreateParameters {

    }
}