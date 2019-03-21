namespace Sample.API.Models.Api20171001
{

    /// <summary>
    /// Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next
    /// set of results.
    /// </summary>
    [System.ComponentModel.TypeConverter(typeof(OperationListResultTypeConverter))]
    public partial class OperationListResult
    {

        /// <summary>
        /// Creates a new instance of <see cref="OperationListResult" />, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this model.</param>
        /// <returns>an instance of the <see cref="className" /> model class.</returns>
        public static Sample.API.Models.Api20171001.IOperationListResult FromJsonString(string jsonText) => FromJson(Sample.API.Runtime.Json.JsonNode.Parse(jsonText));
        /// <summary>Serializes this instance to a json string.</summary>
        /// <returns>a <see cref="System.String" /> containing this model serialized to JSON text.</returns>
        public string ToJsonString() => ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll)?.ToString();
    }
    /// Result of the request to list REST API operations. It contains a list of operations and a URL nextLink to get the next
    /// set of results.
    [System.ComponentModel.TypeConverter(typeof(OperationListResultTypeConverter))]
    public partial interface IOperationListResult {

    }
}