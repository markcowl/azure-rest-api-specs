namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>The resource model definition for a ARM tracked top level resource</summary>
    public partial class TrackedResource : Sample.API.Models.Api20171001.ITrackedResource, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="TrackedResource" /></summary>
        private Sample.API.Models.Api20171001.IResource _resource = new Sample.API.Models.Api20171001.Resource();
        /// <summary>Inherited model <see cref="IResource" /> - The Resource definition.</summary>
        public string Id
        {
            get
            {
                return _resource.Id;
            }
        }
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
        /// <summary>Inherited model <see cref="IResource" /> - The Resource definition.</summary>
        public string Name
        {
            get
            {
                return _resource.Name;
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
        /// <summary>Inherited model <see cref="IResource" /> - The Resource definition.</summary>
        public string Type
        {
            get
            {
                return _resource.Type;
            }
        }
        /// <summary>Creates an new <see cref="TrackedResource" /> instance.</summary>
        public TrackedResource()
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
            await eventListener.AssertNotNull(nameof(_resource), _resource);
            await eventListener.AssertObjectIsValid(nameof(_resource), _resource);
            await eventListener.AssertNotNull(nameof(Location),Location);
        }
    }
    /// The resource model definition for a ARM tracked top level resource
    public partial interface ITrackedResource : Sample.API.Runtime.IJsonSerializable, Sample.API.Models.Api20171001.IResource {
        string Location { get; set; }
        System.Collections.Hashtable Tag { get; set; }
    }
}