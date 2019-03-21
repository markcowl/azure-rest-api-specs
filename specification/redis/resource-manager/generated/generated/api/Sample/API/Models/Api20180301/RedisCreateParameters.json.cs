namespace Sample.API.Models.Api20180301
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Parameters supplied to the Create Redis operation.</summary>
    public partial class RedisCreateParameters
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
        /// Deserializes a <see cref="Sample.API.Runtime.Json.JsonNode"/> into an instance of Sample.API.Models.Api20180301.IRedisCreateParameters.
        /// </summary>
        /// <param name="node">a <see cref="Sample.API.Runtime.Json.JsonNode" /> to deserialize from.</param>
        /// <returns>an instance of Sample.API.Models.Api20180301.IRedisCreateParameters.</returns>
        public static Sample.API.Models.Api20180301.IRedisCreateParameters FromJson(Sample.API.Runtime.Json.JsonNode node)
        {
            return node is Sample.API.Runtime.Json.JsonObject json ? new RedisCreateParameters(json) : null;
        }
        /// <summary>
        /// Deserializes a Sample.API.Runtime.Json.JsonObject into a new instance of <see cref="RedisCreateParameters" />.
        /// </summary>
        /// <param name="json">A Sample.API.Runtime.Json.JsonObject instance to deserialize from.</param>
        internal RedisCreateParameters(Sample.API.Runtime.Json.JsonObject json)
        {
            bool returnNow = false;
            BeforeFromJson(json, ref returnNow);
            if (returnNow)
            {
                return;
            }
            {_location = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("location"), out var __jsonLocation) ? (string)__jsonLocation : (string)Location;}
            {_properties = If( json?.PropertyT<Sample.API.Runtime.Json.JsonObject>("properties"), out var __jsonProperties) ? Sample.API.Models.Api20180301.RedisCreateProperties.FromJson(__jsonProperties) : Properties;}
            {_tag = /* 1 */ new System.Collections.Hashtable( System.Linq.Enumerable.ToDictionary<string,string, string>( json.Property("tags")?.Keys ?? System.Linq.Enumerable.Empty<string>(), each => each, each => json.Property("tags").PropertyT<Sample.API.Runtime.Json.JsonNode>(each) is Sample.API.Runtime.Json.JsonString __t ? (string)__t : null ));}
            {_zones = If( json?.PropertyT<Sample.API.Runtime.Json.JsonArray>("zones"), out var __jsonZones) ? If( __jsonZones, out var __q) ? new System.Func<string[]>(()=> System.Linq.Enumerable.ToArray(System.Linq.Enumerable.Select( __q, (__p)=>(string) (__p is Sample.API.Runtime.Json.JsonString __o ? (string)__o : null) ) ) )() : null : Zones;}
            AfterFromJson(json);
        }
        /// <summary>
        /// Serializes this instance of <see cref="RedisCreateParameters" /> into a <see cref="Sample.API.Runtime.Json.JsonNode" />.
        /// </summary>
        /// <param name="container">The <see cref="Sample.API.Runtime.Json.JsonObject"/> container to serialize this object into. If the caller
        /// passes in <c>null</c>, a new instance will be created and returned to the caller.</param>
        /// <param name="serializationMode">Allows the caller to choose the depth of the serialization. See <see cref="Sample.API.Runtime.SerializationMode"/>.</param>
        /// <returns>
        /// a serialized instance of <see cref="RedisCreateParameters" /> as a <see cref="Sample.API.Runtime.Json.JsonNode" />.
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
            AddIf( null != (((object)Location)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(Location.ToString()) : null, "location" ,container.Add );
            AddIf( null != Properties ? (Sample.API.Runtime.Json.JsonNode) Properties.ToJson(null) : null, "properties" ,container.Add );
            if (null != Tag)
            {
                var __u = new Sample.API.Runtime.Json.JsonObject();
                container.Add("tags", __u);
                foreach( var __x in Tag.Keys )
                {
                    if ((null != Tag[__x] && Tag[__x] is string __v))
                    {
                        AddIf( null != (((object)__v)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(__v.ToString()) : null,(__w) => __u.Add(__x as string,__w ) );
                    }
                }
            }
            if (null != Zones)
            {
                var __r = new Sample.API.Runtime.Json.XNodeArray();
                foreach( var __s in Zones )
                {
                    AddIf(null != (((object)__s)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(__s.ToString()) : null ,__r.Add);
                }
                container.Add("zones",__r);
            }
            AfterToJson(ref container);
            return container;
        }
    }
}