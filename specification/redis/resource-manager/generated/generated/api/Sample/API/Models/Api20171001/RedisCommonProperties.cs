namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Create/Update/Get common properties of the redis cache.</summary>
    public partial class RedisCommonProperties : Sample.API.Models.Api20171001.IRedisCommonProperties
    {
        /// <summary>Backing field for <see cref="EnableNonSslPort" /> property.</summary>
        private bool? _enableNonSslPort;

        /// <summary>Specifies whether the non-ssl Redis server port (6379) is enabled.</summary>
        public bool? EnableNonSslPort
        {
            get
            {
                return this._enableNonSslPort;
            }
            set
            {
                this._enableNonSslPort = value;
            }
        }
        /// <summary>Backing field for <see cref="RedisConfiguration" /> property.</summary>
        private System.Collections.Hashtable _redisConfiguration;

        /// <summary>
        /// All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value
        /// etc.
        /// </summary>
        public System.Collections.Hashtable RedisConfiguration
        {
            get
            {
                return this._redisConfiguration;
            }
            set
            {
                this._redisConfiguration = value;
            }
        }
        /// <summary>Backing field for <see cref="ShardCount" /> property.</summary>
        private int? _shardCount;

        /// <summary>The number of shards to be created on a Premium Cluster Cache.</summary>
        public int? ShardCount
        {
            get
            {
                return this._shardCount;
            }
            set
            {
                this._shardCount = value;
            }
        }
        /// <summary>Backing field for <see cref="TenantSettings" /> property.</summary>
        private System.Collections.Hashtable _tenantSettings;

        /// <summary>A dictionary of tenant settings</summary>
        public System.Collections.Hashtable TenantSettings
        {
            get
            {
                return this._tenantSettings;
            }
            set
            {
                this._tenantSettings = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisCommonProperties" /> instance.</summary>
        public RedisCommonProperties()
        {
        }
    }
    /// Create/Update/Get common properties of the redis cache.
    public partial interface IRedisCommonProperties : Sample.API.Runtime.IJsonSerializable {
        bool? EnableNonSslPort { get; set; }
        System.Collections.Hashtable RedisConfiguration { get; set; }
        int? ShardCount { get; set; }
        System.Collections.Hashtable TenantSettings { get; set; }
    }
}