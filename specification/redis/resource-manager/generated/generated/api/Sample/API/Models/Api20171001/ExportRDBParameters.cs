namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Parameters for Redis export operation.</summary>
    public partial class ExportRDBParameters : Sample.API.Models.Api20171001.IExportRDBParameters, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="Container" /> property.</summary>
        private string _container;

        /// <summary>Container name to export to.</summary>
        public string Container
        {
            get
            {
                return this._container;
            }
            set
            {
                this._container = value;
            }
        }
        /// <summary>Backing field for <see cref="Format" /> property.</summary>
        private string _format;

        /// <summary>File format.</summary>
        public string Format
        {
            get
            {
                return this._format;
            }
            set
            {
                this._format = value;
            }
        }
        /// <summary>Backing field for <see cref="Prefix" /> property.</summary>
        private string _prefix;

        /// <summary>Prefix to use for exported files.</summary>
        public string Prefix
        {
            get
            {
                return this._prefix;
            }
            set
            {
                this._prefix = value;
            }
        }
        /// <summary>Creates an new <see cref="ExportRDBParameters" /> instance.</summary>
        public ExportRDBParameters()
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
            await eventListener.AssertNotNull(nameof(Container),Container);
            await eventListener.AssertNotNull(nameof(Prefix),Prefix);
        }
    }
    /// Parameters for Redis export operation.
    public partial interface IExportRDBParameters : Sample.API.Runtime.IJsonSerializable {
        string Container { get; set; }
        string Format { get; set; }
        string Prefix { get; set; }
    }
}