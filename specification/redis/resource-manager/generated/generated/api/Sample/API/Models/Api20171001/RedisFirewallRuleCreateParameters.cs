namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Parameters required for creating a firewall rule on redis cache.</summary>
    public partial class RedisFirewallRuleCreateParameters : Sample.API.Models.Api20171001.IRedisFirewallRuleCreateParameters, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="Properties" /> property.</summary>
        private Sample.API.Models.Api20171001.IRedisFirewallRuleProperties _properties;

        /// <summary>Properties required to create a firewall rule .</summary>
        public Sample.API.Models.Api20171001.IRedisFirewallRuleProperties Properties
        {
            get
            {
                return this._properties;
            }
            set
            {
                this._properties = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisFirewallRuleCreateParameters" /> instance.</summary>
        public RedisFirewallRuleCreateParameters()
        {
        }
        /// <summary>Validates that this object meets the validation criteria.</summary>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive validation
        /// events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when validation is completed.
        /// </returns>
        public async System.Threading.Tasks.Task Validate(Sample.API.Runtime.IEventListener eventListener)
        {
            await eventListener.AssertNotNull(nameof(Properties), Properties);
            await eventListener.AssertObjectIsValid(nameof(Properties), Properties);
        }
    }
    /// Parameters required for creating a firewall rule on redis cache.
    public partial interface IRedisFirewallRuleCreateParameters : Sample.API.Runtime.IJsonSerializable {
        Sample.API.Models.Api20171001.IRedisFirewallRuleProperties Properties { get; set; }
    }
}