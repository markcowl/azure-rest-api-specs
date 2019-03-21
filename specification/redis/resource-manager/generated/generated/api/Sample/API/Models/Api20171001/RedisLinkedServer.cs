namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Linked server Id</summary>
    public partial class RedisLinkedServer : Sample.API.Models.Api20171001.IRedisLinkedServer
    {
        /// <summary>Backing field for <see cref="Id" /> property.</summary>
        private string _id;

        /// <summary>Linked server Id.</summary>
        public string Id
        {
            get
            {
                return this._id;
            }
            internal set
            {
                this._id = value;
            }
        }
        /// <summary>Creates an new <see cref="RedisLinkedServer" /> instance.</summary>
        public RedisLinkedServer()
        {
        }
    }
    /// Linked server Id
    public partial interface IRedisLinkedServer : Sample.API.Runtime.IJsonSerializable {
        string Id { get;  }
    }
}