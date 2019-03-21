namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Properties of upgrade notification.</summary>
    public partial class UpgradeNotification : Sample.API.Models.Api20171001.IUpgradeNotification
    {
        /// <summary>Backing field for <see cref="Name" /> property.</summary>
        private string _name;

        /// <summary>Name of upgrade notification.</summary>
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
        /// <summary>Backing field for <see cref="Timestamp" /> property.</summary>
        private System.DateTime? _timestamp;

        /// <summary>Timestamp when upgrade notification occurred.</summary>
        public System.DateTime? Timestamp
        {
            get
            {
                return this._timestamp;
            }
            internal set
            {
                this._timestamp = value;
            }
        }
        /// <summary>Backing field for <see cref="UpsellNotification" /> property.</summary>
        private System.Collections.Hashtable _upsellNotification;

        /// <summary>Details about this upgrade notification</summary>
        public System.Collections.Hashtable UpsellNotification
        {
            get
            {
                return this._upsellNotification;
            }
            internal set
            {
                this._upsellNotification = value;
            }
        }
        /// <summary>Creates an new <see cref="UpgradeNotification" /> instance.</summary>
        public UpgradeNotification()
        {
        }
    }
    /// Properties of upgrade notification.
    public partial interface IUpgradeNotification : Sample.API.Runtime.IJsonSerializable {
        string Name { get;  }
        System.DateTime? Timestamp { get;  }
        System.Collections.Hashtable UpsellNotification { get;  }
    }
}