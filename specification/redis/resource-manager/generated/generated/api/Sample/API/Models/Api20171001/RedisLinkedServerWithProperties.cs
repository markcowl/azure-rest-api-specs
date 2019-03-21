namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Response to put/get linked server (with properties) for Redis cache.</summary>
    public partial class RedisLinkedServerWithProperties : Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="RedisLinkedServerWithProperties" /></summary>
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
        private Sample.API.Models.Api20171001.IRedisLinkedServerProperties _properties;

        /// <summary>Properties of the linked server.</summary>
        public Sample.API.Models.Api20171001.IRedisLinkedServerProperties Properties
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
        /// <summary>Creates an new <see cref="RedisLinkedServerWithProperties" /> instance.</summary>
        public RedisLinkedServerWithProperties()
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
            await eventListener.AssertObjectIsValid(nameof(Properties), Properties);
        }
    }
    /// Response to put/get linked server (with properties) for Redis cache.
    public partial interface IRedisLinkedServerWithProperties : Sample.API.Runtime.IJsonSerializable, Sample.API.Models.Api20171001.IProxyResource {
        Sample.API.Models.Api20171001.IRedisLinkedServerProperties Properties { get; set; }
    }
}