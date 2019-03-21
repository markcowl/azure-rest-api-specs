namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Parameter required for creating a linked server to redis cache.</summary>
    public partial class RedisLinkedServerCreateParameters : Sample.API.Models.Api20171001.IRedisLinkedServerCreateParameters, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="Properties" /> property.</summary>
        private Sample.API.Models.Api20171001.IRedisLinkedServerCreateProperties _properties;

        /// <summary>Properties required to create a linked server.</summary>
        public Sample.API.Models.Api20171001.IRedisLinkedServerCreateProperties Properties
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
        /// <summary>Creates an new <see cref="RedisLinkedServerCreateParameters" /> instance.</summary>
        public RedisLinkedServerCreateParameters()
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
    /// Parameter required for creating a linked server to redis cache.
    public partial interface IRedisLinkedServerCreateParameters : Sample.API.Runtime.IJsonSerializable {
        Sample.API.Models.Api20171001.IRedisLinkedServerCreateProperties Properties { get; set; }
    }
}