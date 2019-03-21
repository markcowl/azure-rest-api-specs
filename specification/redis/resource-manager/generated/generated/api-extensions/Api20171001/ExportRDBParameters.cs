namespace Sample.API.Models.Api20171001
{

    /// <summary>Parameters for Redis export operation.</summary>
    [System.ComponentModel.TypeConverter(typeof(ExportRDBParametersTypeConverter))]
    public partial class ExportRDBParameters
    {

        /// <summary>
        /// Creates a new instance of <see cref="ExportRDBParameters" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IExportRDBParameters FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Parameters for Redis export operation.
    [System.ComponentModel.TypeConverter(typeof(ExportRDBParametersTypeConverter))]
    public partial interface IExportRDBParameters {

    }
}