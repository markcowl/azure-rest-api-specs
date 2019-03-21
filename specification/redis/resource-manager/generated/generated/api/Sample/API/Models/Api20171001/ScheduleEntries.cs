namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>List of patch schedules for a Redis cache.</summary>
    public partial class ScheduleEntries : Sample.API.Models.Api20171001.IScheduleEntries, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="Property" /> property.</summary>
        private Sample.API.Models.Api20171001.IScheduleEntry[] _property;

        /// <summary>List of patch schedules for a Redis cache.</summary>
        public Sample.API.Models.Api20171001.IScheduleEntry[] Property
        {
            get
            {
                return this._property;
            }
            set
            {
                this._property = value;
            }
        }
        /// <summary>Creates an new <see cref="ScheduleEntries" /> instance.</summary>
        public ScheduleEntries()
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
            await eventListener.AssertNotNull(nameof(Property), Property);
            if (Property != null ) {
                    for (int __i = 0; __i < Property.Length; __i++) {
                      await eventListener.AssertObjectIsValid($"Property[{__i}]", Property[__i]);
                    }
                  }
        }
    }
    /// List of patch schedules for a Redis cache.
    public partial interface IScheduleEntries : Sample.API.Runtime.IJsonSerializable {
        Sample.API.Models.Api20171001.IScheduleEntry[] Property { get; set; }
    }
}