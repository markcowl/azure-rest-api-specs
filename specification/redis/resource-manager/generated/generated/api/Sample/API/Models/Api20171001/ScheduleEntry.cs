namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Patch schedule entry for a Premium Redis Cache.</summary>
    public partial class ScheduleEntry : Sample.API.Models.Api20171001.IScheduleEntry, Sample.API.Runtime.IValidates
    {
        /// <summary>Backing field for <see cref="DayOfWeek" /> property.</summary>
        private Sample.API.Support.DayOfWeek _dayOfWeek;

        /// <summary>Day of the week when a cache can be patched.</summary>
        public Sample.API.Support.DayOfWeek DayOfWeek
        {
            get
            {
                return this._dayOfWeek;
            }
            set
            {
                this._dayOfWeek = value;
            }
        }
        /// <summary>Backing field for <see cref="MaintenanceWindow" /> property.</summary>
        private System.TimeSpan? _maintenanceWindow;

        /// <summary>ISO8601 timespan specifying how much time cache patching can take.</summary>
        public System.TimeSpan? MaintenanceWindow
        {
            get
            {
                return this._maintenanceWindow;
            }
            set
            {
                this._maintenanceWindow = value;
            }
        }
        /// <summary>Backing field for <see cref="StartHourUtc" /> property.</summary>
        private int _startHourUtc;

        /// <summary>Start hour after which cache patching can start.</summary>
        public int StartHourUtc
        {
            get
            {
                return this._startHourUtc;
            }
            set
            {
                this._startHourUtc = value;
            }
        }
        /// <summary>Creates an new <see cref="ScheduleEntry" /> instance.</summary>
        public ScheduleEntry()
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
            await eventListener.AssertNotNull(nameof(DayOfWeek),DayOfWeek);
            await eventListener.AssertEnum(nameof(DayOfWeek),DayOfWeek,@"Monday", @"Tuesday", @"Wednesday", @"Thursday", @"Friday", @"Saturday", @"Sunday", @"Everyday", @"Weekend");
        }
    }
    /// Patch schedule entry for a Premium Redis Cache.
    public partial interface IScheduleEntry : Sample.API.Runtime.IJsonSerializable {
        Sample.API.Support.DayOfWeek DayOfWeek { get; set; }
        System.TimeSpan? MaintenanceWindow { get; set; }
        int StartHourUtc { get; set; }
    }
}