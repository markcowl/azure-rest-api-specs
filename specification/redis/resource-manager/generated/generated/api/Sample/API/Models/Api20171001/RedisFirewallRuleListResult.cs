namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>The response of list firewall rules Redis operation.</summary>
    public partial class RedisFirewallRuleListResult : Sample.API.Models.Api20171001.IRedisFirewallRuleListResult, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="NextLink" /> property.</summary>
        private string _nextLink;

        /// <summary>Link for next page of results.</summary>
        public string NextLink
        {
            get
            {
                return this._nextLink;
            }
            internal set
            {
                this._nextLink = value;
            }
        }
        /// <summary>Backing field for <see cref="Value" /> property.</summary>
        private Sample.API.Models.Api20171001.IRedisFirewallRule[] _value;

        /// <summary>Results of the list firewall rules operation.</summary>
        public Sample.API.Models.Api20171001.IRedisFirewallRule[] Value
        {
            get
            {
                return this._value;
            }
            set
            {
                this._value = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisFirewallRuleListResult" /> instance.</summary>
        public RedisFirewallRuleListResult()
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
            if (Value != null ) {
                    for (int __i = 0; __i < Value.Length; __i++) {
                      await eventListener.AssertObjectIsValid($"Value[{__i}]", Value[__i]);
                    }
                  }
        }
    }
    /// The response of list firewall rules Redis operation.
    public partial interface IRedisFirewallRuleListResult : Sample.API.Runtime.IJsonSerializable {
        string NextLink { get;  }
        Sample.API.Models.Api20171001.IRedisFirewallRule[] Value { get; set; }
    }
}