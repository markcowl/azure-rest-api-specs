namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Parameters supplied to the Update Redis operation.</summary>
    public partial class RedisUpdateParameters : Sample.API.Models.Api20171001.IRedisUpdateParameters, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="Properties" /> property.</summary>
        private Sample.API.Models.Api20171001.IRedisUpdateProperties _properties;

        /// <summary>Redis cache properties.</summary>
        public Sample.API.Models.Api20171001.IRedisUpdateProperties Properties
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
        /// <summary>Backing field for <see cref="Tag" /> property.</summary>
        private System.Collections.Hashtable _tag;

        /// <summary>Resource tags.</summary>
        public System.Collections.Hashtable Tag
        {
            get
            {
                return this._tag;
            }
            set
            {
                this._tag = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisUpdateParameters" /> instance.</summary>
        public RedisUpdateParameters()
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
            await eventListener.AssertObjectIsValid(nameof(Properties), Properties);
        }
    }
    /// Parameters supplied to the Update Redis operation.
    public partial interface IRedisUpdateParameters : Sample.API.Runtime.IJsonSerializable {
        Sample.API.Models.Api20171001.IRedisUpdateProperties Properties { get; set; }
        System.Collections.Hashtable Tag { get; set; }
    }
}