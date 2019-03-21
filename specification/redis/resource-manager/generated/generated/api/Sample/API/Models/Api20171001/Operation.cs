namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>REST API operation</summary>
    public partial class Operation : Sample.API.Models.Api20171001.IOperation, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="Display" /> property.</summary>
        private Sample.API.Models.Api20171001.IOperationDisplay _display;

        /// <summary>The object that describes the operation.</summary>
        public Sample.API.Models.Api20171001.IOperationDisplay Display
        {
            get
            {
                return this._display;
            }
            set
            {
                this._display = value;
            }
        }
        /// <summary>Backing field for <see cref="Name" /> property.</summary>
        private string _name;

        /// <summary>Operation name: {provider}/{resource}/{operation}</summary>
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
        /// <summary>Creates an new <see cref="Operation" /> instance.</summary>
        public Operation()
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
            await eventListener.AssertObjectIsValid(nameof(Display), Display);
        }
    }
    /// REST API operation
    public partial interface IOperation : Sample.API.Runtime.IJsonSerializable {
        Sample.API.Models.Api20171001.IOperationDisplay Display { get; set; }
        string Name { get; set; }
    }
}