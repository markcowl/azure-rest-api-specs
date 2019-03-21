namespace Sample.API.Models.Api20180301
{
    using static Sample.API.Runtime.Extensions;
    public partial class RedisCommonProperties : Sample.API.Models.Api20180301.IRedisCommonProperties, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="RedisCommonProperties" /></summary>
        private Sample.API.Models.Api20171001.IRedisCommonProperties _redisCommonProperties = new Sample.API.Models.Api20171001.RedisCommonProperties();
        /// <summary>
        /// Inherited model <see cref="IRedisCommonProperties" /> - Create/Update/Get common properties of the redis cache.
        /// </summary>
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
        /// <summary>Backing field for <see cref="MinimumTlsVersion" /> property.</summary>
        private Sample.API.Support.TlsVersion _minimumTlsVersion;

        /// <summary>
        /// Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
        /// </summary>
        public Sample.API.Support.TlsVersion MinimumTlsVersion
        {
            get
            {
                return this._minimumTlsVersion;
            }
            set
            {
                this._minimumTlsVersion = value;
            }
        }
        /// <summary>
        /// Inherited model <see cref="IRedisCommonProperties" /> - Create/Update/Get common properties of the redis cache.
        /// </summary>
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
        /// <summary>
        /// Inherited model <see cref="IRedisCommonProperties" /> - Create/Update/Get common properties of the redis cache.
        /// </summary>
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
        /// <summary>
        /// Inherited model <see cref="IRedisCommonProperties" /> - Create/Update/Get common properties of the redis cache.
        /// </summary>
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
        /// <summary>Creates an new <see cref="RedisCommonProperties" /> instance.</summary>
        public RedisCommonProperties()
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
            await eventListener.AssertEnum(nameof(MinimumTlsVersion),MinimumTlsVersion,@"1.0", @"1.1", @"1.2");
        }
    }
    public partial interface IRedisCommonProperties : Sample.API.Runtime.IJsonSerializable, Sample.API.Models.Api20171001.IRedisCommonProperties {
        Sample.API.Support.TlsVersion MinimumTlsVersion { get; set; }
    }
}