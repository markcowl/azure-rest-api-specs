namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Response to force reboot for Redis cache.</summary>
    public partial class RedisForceRebootResponse : Sample.API.Models.Api20171001.IRedisForceRebootResponse
    {
        /// <summary>Backing field for <see cref="Message" /> property.</summary>
        private string _message;

        /// <summary>Status message</summary>
        public string Message
        {
            get
            {
                return this._message;
            }
            internal set
            {
                this._message = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisForceRebootResponse" /> instance.</summary>
        public RedisForceRebootResponse()
        {
        }
    }
    /// Response to force reboot for Redis cache.
    public partial interface IRedisForceRebootResponse : Sample.API.Runtime.IJsonSerializable {
        string Message { get;  }
    }
}