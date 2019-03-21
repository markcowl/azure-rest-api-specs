namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>The Resource definition.</summary>
    public partial class Resource : Sample.API.Models.Api20171001.IResource
    {
        /// <summary>Backing field for <see cref="Id" /> property.</summary>
        private string _id;

        /// <summary>Resource ID.</summary>
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
        /// <summary>Backing field for <see cref="Name" /> property.</summary>
        private string _name;

        /// <summary>Resource name.</summary>
        public string Name
        {
            get
            {
                return this._name;
            }
            internal set
            {
                this._name = value;
            }
        }
        /// <summary>Backing field for <see cref="Type" /> property.</summary>
        private string _type;

        /// <summary>Resource type.</summary>
        public string Type
        {
            get
            {
                return this._type;
            }
            internal set
            {
                this._type = value;
            }
        }
        /// <summary>Creates an new <see cref="Resource" /> instance.</summary>
        public Resource()
        {
        }
    }
    /// The Resource definition.
    public partial interface IResource : Sample.API.Runtime.IJsonSerializable {
        string Id { get;  }
        string Name { get;  }
        string Type { get;  }
    }
}