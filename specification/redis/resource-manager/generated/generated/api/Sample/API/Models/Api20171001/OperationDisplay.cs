namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>The object that describes the operation.</summary>
    public partial class OperationDisplay : Sample.API.Models.Api20171001.IOperationDisplay
    {
        /// <summary>Backing field for <see cref="Description" /> property.</summary>
        private string _description;

        /// <summary>Friendly name of the operation</summary>
        public string Description
        {
            get
            {
                return this._description;
            }
            set
            {
                this._description = value;
            }
        }
        /// <summary>Backing field for <see cref="Operation" /> property.</summary>
        private string _operation;

        /// <summary>Operation type: read, write, delete, listKeys/action, etc.</summary>
        public string Operation
        {
            get
            {
                return this._operation;
            }
            set
            {
                this._operation = value;
            }
        }
        /// <summary>Backing field for <see cref="Provider" /> property.</summary>
        private string _provider;

        /// <summary>Friendly name of the resource provider</summary>
        public string Provider
        {
            get
            {
                return this._provider;
            }
            set
            {
                this._provider = value;
            }
        }
        /// <summary>Backing field for <see cref="Resource" /> property.</summary>
        private string _resource;

        /// <summary>Resource type on which the operation is performed.</summary>
        public string Resource
        {
            get
            {
                return this._resource;
            }
            set
            {
                this._resource = value;
            }
        }
        /// <summary>Creates an new <see cref="OperationDisplay" /> instance.</summary>
        public OperationDisplay()
        {
        }
    }
    /// The object that describes the operation.
    public partial interface IOperationDisplay : Sample.API.Runtime.IJsonSerializable {
        string Description { get; set; }
        string Operation { get; set; }
        string Provider { get; set; }
        string Resource { get; set; }
    }
}