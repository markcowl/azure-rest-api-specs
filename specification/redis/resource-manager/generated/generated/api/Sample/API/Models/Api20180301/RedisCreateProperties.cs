namespace Sample.API.Models.Api20180301
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Properties supplied to Create Redis operation.</summary>
    public partial class RedisCreateProperties : Sample.API.Models.Api20180301.IRedisCreateProperties, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="RedisCreateProperties" /></summary>
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
        /// <summary>Backing field for <see cref="StaticIP" /> property.</summary>
        private string _staticIP;

        /// <summary>
        /// Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network.
        /// </summary>
        public string StaticIP
        {
            get
            {
                return this._staticIP;
            }
            set
            {
                this._staticIP = value;
            }
        }
        /// <summary>Backing field for <see cref="SubnetId" /> property.</summary>
        private string _subnetId;

        /// <summary>
        /// The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
        /// </summary>
        public string SubnetId
        {
            get
            {
                return this._subnetId;
            }
            set
            {
                this._subnetId = value;
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
        /// <summary>Creates an new <see cref="RedisCreateProperties" /> instance.</summary>
        public RedisCreateProperties()
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
            await eventListener.AssertNotNull(nameof(Sku), Sku);
            await eventListener.AssertObjectIsValid(nameof(Sku), Sku);
            await eventListener.AssertRegEx(nameof(StaticIP),StaticIP,@"^\d+\.\d+\.\d+\.\d+$");
            await eventListener.AssertRegEx(nameof(SubnetId),SubnetId,@"^/subscriptions/[^/]*/resourceGroups/[^/]*/providers/Microsoft.(ClassicNetwork|Network)/virtualNetworks/[^/]*/subnets/[^/]*$");
        }
    }
    /// Properties supplied to Create Redis operation.
    public partial interface IRedisCreateProperties : Sample.API.Runtime.IJsonSerializable, Sample.API.Models.Api20180301.IRedisCommonProperties {
        Sample.API.Models.Api20171001.ISku Sku { get; set; }
        string StaticIP { get; set; }
        string SubnetId { get; set; }
    }
}