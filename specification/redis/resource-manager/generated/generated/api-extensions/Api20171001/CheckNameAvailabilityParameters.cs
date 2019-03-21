namespace Sample.API.Models.Api20171001
{

    /// <summary>Parameters body to pass for resource name availability check.</summary>
    [System.ComponentModel.TypeConverter(typeof(CheckNameAvailabilityParametersTypeConverter))]
    public partial class CheckNameAvailabilityParameters
    {

        /// <summary>
        /// Creates a new instance of <see cref="CheckNameAvailabilityParameters" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.ICheckNameAvailabilityParameters FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Parameters body to pass for resource name availability check.
    [System.ComponentModel.TypeConverter(typeof(CheckNameAvailabilityParametersTypeConverter))]
    public partial interface ICheckNameAvailabilityParameters {

    }
}