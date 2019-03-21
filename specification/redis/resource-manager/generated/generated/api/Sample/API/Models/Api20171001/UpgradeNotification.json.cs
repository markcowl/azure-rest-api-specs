namespace Sample.API.Models.Api20171001
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Properties of upgrade notification.</summary>
    public partial class UpgradeNotification
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
        /// Deserializes a <see cref="Sample.API.Runtime.Json.JsonNode"/> into an instance of Sample.API.Models.Api20171001.IUpgradeNotification.
        /// </summary>
        /// <param name="node">a <see cref="Sample.API.Runtime.Json.JsonNode" /> to deserialize from.</param>
        /// <returns>an instance of Sample.API.Models.Api20171001.IUpgradeNotification.</returns>
        public static Sample.API.Models.Api20171001.IUpgradeNotification FromJson(Sample.API.Runtime.Json.JsonNode node)
        {
            return node is Sample.API.Runtime.Json.JsonObject json ? new UpgradeNotification(json) : null;
        }
        /// <summary>
        /// Serializes this instance of <see cref="UpgradeNotification" /> into a <see cref="Sample.API.Runtime.Json.JsonNode" />.
        /// </summary>
        /// <param name="container">The <see cref="Sample.API.Runtime.Json.JsonObject"/> container to serialize this object into. If the caller
        /// passes in <c>null</c>, a new instance will be created and returned to the caller.</param>
        /// <param name="serializationMode">Allows the caller to choose the depth of the serialization. See <see cref="Sample.API.Runtime.SerializationMode"/>.</param>
        /// <returns>
        /// a serialized instance of <see cref="UpgradeNotification" /> as a <see cref="Sample.API.Runtime.Json.JsonNode" />.
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
            if (serializationMode.HasFlag(Sample.API.Runtime.SerializationMode.IncludeReadOnly))
            {
                AddIf( null != (((object)Name)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(Name.ToString()) : null, "name" ,container.Add );
            }
            if (serializationMode.HasFlag(Sample.API.Runtime.SerializationMode.IncludeReadOnly))
            {
                AddIf( null != Timestamp ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(Timestamp?.ToString(@"yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffK",System.Globalization.CultureInfo.InvariantCulture)) : null, "timestamp" ,container.Add );
            }
            if (serializationMode.HasFlag(Sample.API.Runtime.SerializationMode.IncludeReadOnly))
            {
                if (null != UpsellNotification)
                {
                    var __u = new Sample.API.Runtime.Json.JsonObject();
                    container.Add("upsellNotification", __u);
                    foreach( var __x in UpsellNotification.Keys )
                    {
                        if ((null != UpsellNotification[__x] && UpsellNotification[__x] is string __v))
                        {
                            AddIf( null != (((object)__v)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(__v.ToString()) : null,(__w) => __u.Add(__x as string,__w ) );
                        }
                    }
                }
            }
            AfterToJson(ref container);
            return container;
        }
        /// <summary>
        /// Deserializes a Sample.API.Runtime.Json.JsonObject into a new instance of <see cref="UpgradeNotification" />.
        /// </summary>
        /// <param name="json">A Sample.API.Runtime.Json.JsonObject instance to deserialize from.</param>
        internal UpgradeNotification(Sample.API.Runtime.Json.JsonObject json)
        {
            bool returnNow = false;
            BeforeFromJson(json, ref returnNow);
            if (returnNow)
            {
                return;
            }
            {_name = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("name"), out var __jsonName) ? (string)__jsonName : (string)Name;}
            {_timestamp = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("timestamp"), out var __jsonTimestamp) ? System.DateTime.TryParse((string)__jsonTimestamp, System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.AdjustToUniversal, out var __jsonTimestampValue) ? __jsonTimestampValue : Timestamp : Timestamp;}
            {_upsellNotification = /* 1 */ new System.Collections.Hashtable( System.Linq.Enumerable.ToDictionary<string,string, string>( json.Property("upsellNotification")?.Keys ?? System.Linq.Enumerable.Empty<string>(), each => each, each => json.Property("upsellNotification").PropertyT<Sample.API.Runtime.Json.JsonNode>(each) is Sample.API.Runtime.Json.JsonString __t ? (string)__t : null ));}
            AfterFromJson(json);
        }
    }
}