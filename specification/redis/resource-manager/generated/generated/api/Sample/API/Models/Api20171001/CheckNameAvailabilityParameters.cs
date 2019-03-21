namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Parameters body to pass for resource name availability check.</summary>
    public partial class CheckNameAvailabilityParameters : Sample.API.Models.Api20171001.ICheckNameAvailabilityParameters, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="Name" /> property.</summary>
        private string _name;

        /// <summary>Resource name.</summary>
        public string Name
        {
            get
            {
                return this._name;
            }
            set
            {
                this._name = value;
            }
        }
        /// <summary>Backing field for <see cref="Type" /> property.</summary>
        private string _type;

        /// <summary>
        /// Resource type. The only legal value of this property for checking redis cache name availability is 'Microsoft.Cache/redis'.
        /// </summary>
        public string Type
        {
            get
            {
                return this._type;
            }
            set
            {
                this._type = value;
            }
        }
        /// <summary>Creates an new <see cref="CheckNameAvailabilityParameters" /> instance.</summary>
        public CheckNameAvailabilityParameters()
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
            await eventListener.AssertNotNull(nameof(Name),Name);
            await eventListener.AssertNotNull(nameof(Type),Type);
        }
    }
    /// Parameters body to pass for resource name availability check.
    public partial interface ICheckNameAvailabilityParameters : Sample.API.Runtime.IJsonSerializable {
        string Name { get; set; }
        string Type { get; set; }
    }
}