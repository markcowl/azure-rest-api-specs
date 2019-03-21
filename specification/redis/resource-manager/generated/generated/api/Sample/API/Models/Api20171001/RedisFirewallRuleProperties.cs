namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Specifies a range of IP addresses permitted to connect to the cache</summary>
    public partial class RedisFirewallRuleProperties : Sample.API.Models.Api20171001.IRedisFirewallRuleProperties, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="EndIP" /> property.</summary>
        private string _endIP;

        /// <summary>highest IP address included in the range</summary>
        public string EndIP
        {
            get
            {
                return this._endIP;
            }
            set
            {
                this._endIP = value;
            }
        }
        /// <summary>Backing field for <see cref="StartIP" /> property.</summary>
        private string _startIP;

        /// <summary>lowest IP address included in the range</summary>
        public string StartIP
        {
            get
            {
                return this._startIP;
            }
            set
            {
                this._startIP = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisFirewallRuleProperties" /> instance.</summary>
        public RedisFirewallRuleProperties()
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
            await eventListener.AssertNotNull(nameof(EndIP),EndIP);
            await eventListener.AssertNotNull(nameof(StartIP),StartIP);
        }
    }
    /// Specifies a range of IP addresses permitted to connect to the cache
    public partial interface IRedisFirewallRuleProperties : Sample.API.Runtime.IJsonSerializable {
        string EndIP { get; set; }
        string StartIP { get; set; }
    }
}