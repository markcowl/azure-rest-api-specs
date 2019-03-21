namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Parameters supplied to the Create Redis operation.</summary>
    public partial class RedisCreateParameters : Sample.API.Models.Api20171001.IRedisCreateParameters, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="Location" /> property.</summary>
        private string _location;

        /// <summary>The geo-location where the resource lives</summary>
        public string Location
        {
            get
            {
                return this._location;
            }
            set
            {
                this._location = value;
            }
        }
        /// <summary>Backing field for <see cref="Properties" /> property.</summary>
        private Sample.API.Models.Api20171001.IRedisCreateProperties _properties;

        /// <summary>Redis cache properties.</summary>
        public Sample.API.Models.Api20171001.IRedisCreateProperties Properties
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
        /// <summary>Backing field for <see cref="Zones" /> property.</summary>
        private string[] _zones;

        /// <summary>A list of availability zones denoting where the resource needs to come from.</summary>
        public string[] Zones
        {
            get
            {
                return this._zones;
            }
            set
            {
                this._zones = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisCreateParameters" /> instance.</summary>
        public RedisCreateParameters()
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
            await eventListener.AssertNotNull(nameof(Location),Location);
            await eventListener.AssertNotNull(nameof(Properties), Properties);
            await eventListener.AssertObjectIsValid(nameof(Properties), Properties);
        }
    }
    /// Parameters supplied to the Create Redis operation.
    public partial interface IRedisCreateParameters : Sample.API.Runtime.IJsonSerializable {
        string Location { get; set; }
        Sample.API.Models.Api20171001.IRedisCreateProperties Properties { get; set; }
        System.Collections.Hashtable Tag { get; set; }
        string[] Zones { get; set; }
    }
}