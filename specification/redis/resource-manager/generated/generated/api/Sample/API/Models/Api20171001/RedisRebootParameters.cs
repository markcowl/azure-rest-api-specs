namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Specifies which Redis node(s) to reboot.</summary>
    public partial class RedisRebootParameters : Sample.API.Models.Api20171001.IRedisRebootParameters, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="RebootType" /> property.</summary>
        private Sample.API.Support.RebootType _rebootType;

        /// <summary>Which Redis node(s) to reboot. Depending on this value data loss is possible.</summary>
        public Sample.API.Support.RebootType RebootType
        {
            get
            {
                return this._rebootType;
            }
            set
            {
                this._rebootType = value;
            }
        }
        /// <summary>Backing field for <see cref="ShardId" /> property.</summary>
        private int? _shardId;

        /// <summary>If clustering is enabled, the ID of the shard to be rebooted.</summary>
        public int? ShardId
        {
            get
            {
                return this._shardId;
            }
            set
            {
                this._shardId = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisRebootParameters" /> instance.</summary>
        public RedisRebootParameters()
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
            await eventListener.AssertNotNull(nameof(RebootType),RebootType);
            await eventListener.AssertEnum(nameof(RebootType),RebootType,@"PrimaryNode", @"SecondaryNode", @"AllNodes");
        }
    }
    /// Specifies which Redis node(s) to reboot.
    public partial interface IRedisRebootParameters : Sample.API.Runtime.IJsonSerializable {
        Sample.API.Support.RebootType RebootType { get; set; }
        int? ShardId { get; set; }
    }
}