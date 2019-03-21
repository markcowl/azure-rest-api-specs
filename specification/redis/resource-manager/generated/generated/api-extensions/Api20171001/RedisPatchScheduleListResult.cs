namespace Sample.API.Models.Api20171001
{

    /// <summary>The response of list patch schedules Redis operation.</summary>
    [System.ComponentModel.TypeConverter(typeof(RedisPatchScheduleListResultTypeConverter))]
    public partial class RedisPatchScheduleListResult
    {

        /// <summary>
        /// Creates a new instance of <see cref="RedisPatchScheduleListResult" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IRedisPatchScheduleListResult FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// The response of list patch schedules Redis operation.
    [System.ComponentModel.TypeConverter(typeof(RedisPatchScheduleListResultTypeConverter))]
    public partial interface IRedisPatchScheduleListResult {

    }
}