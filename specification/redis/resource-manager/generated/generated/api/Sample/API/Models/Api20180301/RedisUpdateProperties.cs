namespace Sample.API.Models.Api20180301
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Patchable properties of the redis cache.</summary>
    public partial class RedisUpdateProperties : Sample.API.Models.Api20180301.IRedisUpdateProperties, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="RedisUpdateProperties" /></summary>
        private Sample.API.Models.Api20180301.IRedisCommonProperties _redisCommonProperties = new Sample.API.Models.Api20180301.RedisCommonProperties();
        /// <summary>Inherited model <see cref="IRedisCommonProperties" /> -</summary>
        public bool? EnableNonSslPort
        {
            get
            {
                return _redisCommonProperties.EnableNonSslPort;
            }
            set
            {
                _redisCommonProperties.EnableNonSslPort = value;
            }
        }
        /// <summary>Inherited model <see cref="IRedisCommonProperties" /> -</summary>
        public Sample.API.Support.TlsVersion MinimumTlsVersion
        {
            get
            {
                return _redisCommonProperties.MinimumTlsVersion;
            }
            set
            {
                _redisCommonProperties.MinimumTlsVersion = value;
            }
        }
        /// <summary>Inherited model <see cref="IRedisCommonProperties" /> -</summary>
        public System.Collections.Hashtable RedisConfiguration
        {
            get
            {
                return _redisCommonProperties.RedisConfiguration;
            }
            set
            {
                _redisCommonProperties.RedisConfiguration = value;
            }
        }
        /// <summary>Inherited model <see cref="IRedisCommonProperties" /> -</summary>
        public int? ShardCount
        {
            get
            {
                return _redisCommonProperties.ShardCount;
            }
            set
            {
                _redisCommonProperties.ShardCount = value;
            }
        }
        /// <summary>Backing field for <see cref="Sku" /> property.</summary>
        private Sample.API.Models.Api20171001.ISku _sku;

        /// <summary>The SKU of the Redis cache to deploy.</summary>
        public Sample.API.Models.Api20171001.ISku Sku
        {
            get
            {
                return this._sku;
            }
            set
            {
                this._sku = value;
            }
        }
        /// <summary>Inherited model <see cref="IRedisCommonProperties" /> -</summary>
        public System.Collections.Hashtable TenantSettings
        {
            get
            {
                return _redisCommonProperties.TenantSettings;
            }
            set
            {
                _redisCommonProperties.TenantSettings = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisUpdateProperties" /> instance.</summary>
        public RedisUpdateProperties()
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
            await eventListener.AssertNotNull(nameof(_redisCommonProperties), _redisCommonProperties);
            await eventListener.AssertObjectIsValid(nameof(_redisCommonProperties), _redisCommonProperties);
            await eventListener.AssertObjectIsValid(nameof(Sku), Sku);
        }
    }
    /// Patchable properties of the redis cache.
    public partial interface IRedisUpdateProperties : Sample.API.Runtime.IJsonSerializable, Sample.API.Models.Api20180301.IRedisCommonProperties {
        Sample.API.Models.Api20171001.ISku Sku { get; set; }
    }
}