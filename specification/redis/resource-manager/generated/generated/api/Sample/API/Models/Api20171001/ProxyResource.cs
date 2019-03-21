namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>
    /// The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
    /// </summary>
    public partial class ProxyResource : Sample.API.Models.Api20171001.IProxyResource, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="ProxyResource" /></summary>
        private Sample.API.Models.Api20171001.IResource _resource = new Sample.API.Models.Api20171001.Resource();
        /// <summary>Inherited model <see cref="IResource" /> - The Resource definition.</summary>
        public string Id
        {
            get
            {
                return _resource.Id;
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
        /// <summary>Inherited model <see cref="IResource" /> - The Resource definition.</summary>
        public string Type
        {
            get
            {
                return _resource.Type;
            }
        }
        /// <summary>Creates an new <see cref="ProxyResource" /> instance.</summary>
        public ProxyResource()
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
        }
    }
    /// The resource model definition for a ARM proxy resource. It will have everything other than required location and tags
    public partial interface IProxyResource : Sample.API.Runtime.IJsonSerializable, Sample.API.Models.Api20171001.IResource {

    }
}