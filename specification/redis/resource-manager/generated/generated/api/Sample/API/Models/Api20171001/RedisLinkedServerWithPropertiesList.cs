namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>List of linked servers (with properties) of a Redis cache.</summary>
    public partial class RedisLinkedServerWithPropertiesList : Sample.API.Models.Api20171001.IRedisLinkedServerWithPropertiesList, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="NextLink" /> property.</summary>
        private string _nextLink;

        /// <summary>Link for next set.</summary>
        public string NextLink
        {
            get
            {
                return this._nextLink;
            }
            internal set
            {
                this._nextLink = value;
            }
        }
        /// <summary>Backing field for <see cref="Value" /> property.</summary>
        private Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties[] _value;

        /// <summary>List of linked servers (with properties) of a Redis cache.</summary>
        public Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties[] Value
        {
            get
            {
                return this._value;
            }
            set
            {
                this._value = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisLinkedServerWithPropertiesList" /> instance.</summary>
        public RedisLinkedServerWithPropertiesList()
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
            if (Value != null ) {
                    for (int __i = 0; __i < Value.Length; __i++) {
                      await eventListener.AssertObjectIsValid($"Value[{__i}]", Value[__i]);
                    }
                  }
        }
    }
    /// List of linked servers (with properties) of a Redis cache.
    public partial interface IRedisLinkedServerWithPropertiesList : Sample.API.Runtime.IJsonSerializable {
        string NextLink { get;  }
        Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties[] Value { get; set; }
    }
}