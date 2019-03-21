namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>
    /// A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
    /// </summary>
    public partial class RedisFirewallRule : Sample.API.Models.Api20171001.IRedisFirewallRule, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="RedisFirewallRule" /></summary>
        private Sample.API.Models.Api20171001.IProxyResource _proxyResource = new Sample.API.Models.Api20171001.ProxyResource();
        /// <summary>
        /// Inherited model <see cref="IProxyResource" /> - The resource model definition for a ARM proxy resource. It will have everything
        /// other than required location and tags
        /// </summary>
        public string Id
        {
            get
            {
                return _proxyResource.Id;
            }
        }
        /// <summary>
        /// Inherited model <see cref="IProxyResource" /> - The resource model definition for a ARM proxy resource. It will have everything
        /// other than required location and tags
        /// </summary>
        public string Name
        {
            get
            {
                return _proxyResource.Name;
            }
        }
        /// <summary>Backing field for <see cref="Properties" /> property.</summary>
        private Sample.API.Models.Api20171001.IRedisFirewallRuleProperties _properties;

        /// <summary>redis cache firewall rule properties</summary>
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
        /// <summary>
        /// Inherited model <see cref="IProxyResource" /> - The resource model definition for a ARM proxy resource. It will have everything
        /// other than required location and tags
        /// </summary>
        public string Type
        {
            get
            {
                return _proxyResource.Type;
            }
        }
        /// <summary>Creates an new <see cref="RedisFirewallRule" /> instance.</summary>
        public RedisFirewallRule()
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
            await eventListener.AssertNotNull(nameof(_proxyResource), _proxyResource);
            await eventListener.AssertObjectIsValid(nameof(_proxyResource), _proxyResource);
            await eventListener.AssertNotNull(nameof(Properties), Properties);
            await eventListener.AssertObjectIsValid(nameof(Properties), Properties);
        }
    }
    /// A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
    public partial interface IRedisFirewallRule : Sample.API.Runtime.IJsonSerializable, Sample.API.Models.Api20171001.IProxyResource {
        Sample.API.Models.Api20171001.IRedisFirewallRuleProperties Properties { get; set; }
    }
}