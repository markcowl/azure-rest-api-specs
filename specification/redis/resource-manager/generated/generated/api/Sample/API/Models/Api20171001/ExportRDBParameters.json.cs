namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Parameters for Redis export operation.</summary>
    public partial class ExportRDBParameters
    {

        /// <summary>
        /// <c>AfterFromJson</c> will be called after the json deserialization has finished, allowing customization of the object
        /// before it is returned. Implement this method in a partial class to enable this behavior
        /// </summary>
        /// <param name="json">The JsonNode that should be deserialized into this object.</param>
        partial void AfterFromJson(Sample.API.Runtime.Json.JsonObject json);
        /// <summary>
        /// <c>AfterToJson</c> will be called after the json erialization has finished, allowing customization of the <see cref="Sample.API.Runtime.Json.JsonObject"
        /// /> before it is returned. Implement this method in a partial class to enable this behavior
        /// </summary>
        /// <param name="container">The JSON container that the serialization result will be placed in.</param>
        partial void AfterToJson(ref Sample.API.Runtime.Json.JsonObject container);
        /// <summary>
        /// <c>BeforeFromJson</c> will be called before the json deserialization has commenced, allowing complete customization of
        /// the object before it is deserialized.
        /// If you wish to disable the default deserialization entirely, return <c>true</c> in the <see "returnNow" /> output parameter.
        /// Implement this method in a partial class to enable this behavior.
        /// </summary>
        /// <param name="json">The JsonNode that should be deserialized into this object.</param>
        /// <param name="returnNow">Determines if the rest of the deserialization should be processed, or if the method should return
        /// instantly.</param>
        partial void BeforeFromJson(Sample.API.Runtime.Json.JsonObject json, ref bool returnNow);
        /// <summary>
        /// <c>BeforeToJson</c> will be called before the json serialization has commenced, allowing complete customization of the
        /// object before it is serialized.
        /// If you wish to disable the default serialization entirely, return <c>true</c> in the <see "returnNow" /> output parameter.
        /// Implement this method in a partial class to enable this behavior.
        /// </summary>
        /// <param name="container">The JSON container that the serialization result will be placed in.</param>
        /// <param name="returnNow">Determines if the rest of the serialization should be processed, or if the method should return
        /// instantly.</param>
        partial void BeforeToJson(ref Sample.API.Runtime.Json.JsonObject container, ref bool returnNow);
        /// <summary>
        /// Deserializes a Sample.API.Runtime.Json.JsonObject into a new instance of <see cref="ExportRDBParameters" />.
        /// </summary>
        /// <param name="json">A Sample.API.Runtime.Json.JsonObject instance to deserialize from.</param>
        internal ExportRDBParameters(Sample.API.Runtime.Json.JsonObject json)
        {
            bool returnNow = false;
            BeforeFromJson(json, ref returnNow);
            if (returnNow)
            {
                return;
            }
            {_format = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("format"), out var __jsonFormat) ? (string)__jsonFormat : (string)Format;}
            {_container = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("container"), out var __jsonContainer) ? (string)__jsonContainer : (string)Container;}
            {_prefix = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("prefix"), out var __jsonPrefix) ? (string)__jsonPrefix : (string)Prefix;}
            AfterFromJson(json);
        }
        /// <summary>
        /// Deserializes a <see cref="Sample.API.Runtime.Json.JsonNode"/> into an instance of Sample.API.Models.Api20171001.IExportRDBParameters.
        /// </summary>
        /// <param name="node">a <see cref="Sample.API.Runtime.Json.JsonNode" /> to deserialize from.</param>
        /// <returns>an instance of Sample.API.Models.Api20171001.IExportRDBParameters.</returns>
        public static Sample.API.Models.Api20171001.IExportRDBParameters FromJson(Sample.API.Runtime.Json.JsonNode node)
        {
            return node is Sample.API.Runtime.Json.JsonObject json ? new ExportRDBParameters(json) : null;
        }
        /// <summary>
        /// Serializes this instance of <see cref="ExportRDBParameters" /> into a <see cref="Sample.API.Runtime.Json.JsonNode" />.
        /// </summary>
        /// <param name="container">The <see cref="Sample.API.Runtime.Json.JsonObject"/> container to serialize this object into. If the caller
        /// passes in <c>null</c>, a new instance will be created and returned to the caller.</param>
        /// <param name="serializationMode">Allows the caller to choose the depth of the serialization. See <see cref="Sample.API.Runtime.SerializationMode"/>.</param>
        /// <returns>
        /// a serialized instance of <see cref="ExportRDBParameters" /> as a <see cref="Sample.API.Runtime.Json.JsonNode" />.
        /// </returns>
        public Sample.API.Runtime.Json.JsonNode ToJson(Sample.API.Runtime.Json.JsonObject container, Sample.API.Runtime.SerializationMode serializationMode)
        {
            container = container ?? new Sample.API.Runtime.Json.JsonObject();

            bool returnNow = false;
            BeforeToJson(ref container, ref returnNow);
            if (returnNow)
            {
                return container;
            }
            AddIf( null != (((object)Format)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(Format.ToString()) : null, "format" ,container.Add );
            AddIf( null != (((object)Container)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(Container.ToString()) : null, "container" ,container.Add );
            AddIf( null != (((object)Prefix)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(Prefix.ToString()) : null, "prefix" ,container.Add );
            AfterToJson(ref container);
            return container;
        }
    }
}