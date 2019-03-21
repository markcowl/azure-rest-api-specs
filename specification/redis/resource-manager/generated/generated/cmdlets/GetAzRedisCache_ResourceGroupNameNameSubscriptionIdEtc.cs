namespace Sample.API.Cmdlets
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>Gets a Redis cache (resource description).</summary>
    [System.Management.Automation.Cmdlet(System.Management.Automation.VerbsCommon.Get, @"AzRedisCache_ResourceGroupNameNameSubscriptionIdEtc")]
    [System.Management.Automation.OutputType(typeof(Sample.API.Models.Api20171001.IRedisResource))]
    [Sample.API.Description(@"Gets a Redis cache (resource description).")]
    [Sample.API.Generated]
    [Sample.API.Profile("hybrid-2019")]
    public partial class GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc : System.Management.Automation.PSCmdlet, Sample.API.Runtime.IEventListener
    {
        /// <summary>A unique id generatd for the this cmdlet when it is instantiated.</summary>
        private string __correlationId = System.Guid.NewGuid().ToString();
        /// <summary>A copy of the Invocation Info (necessary to allow asJob to clone this cmdlet)</summary>
         private System.Management.Automation.InvocationInfo __invocationInfo;
        /// <summary>A unique id generatd for the this cmdlet when ProcessRecord() is called.</summary>
         private string __processRecordId;
        /// <summary>The <see cref="System.Threading.CancellationTokenSource" /> for this operation.</summary>
        private System.Threading.CancellationTokenSource _cancellationTokenSource = new System.Threading.CancellationTokenSource();
        /// <summary>Wait for .NET debugger to attach</summary>
        [System.Management.Automation.Parameter(Mandatory = false, DontShow = true, HelpMessage = "Wait for .NET debugger to attach")]
        [Sample.API.Category(Sample.API.ParameterCategory.Runtime)]
        public System.Management.Automation.SwitchParameter Break {get;set;}
        /// <summary>The reference to the client API class.</summary>
        public Sample.API.RedisManagementClient Client => Sample.API.Module.Instance.ClientAPI;
        /// <summary>
        /// The credentials, account, tenant, and subscription used for communication with Azure
        /// </summary>
        [System.Management.Automation.Parameter(Mandatory = false, HelpMessage = "The credentials, account, tenant, and subscription used for communication with Azure.")]
        [System.Management.Automation.ValidateNotNull]
        [System.Management.Automation.Alias("AzureRMContext", "AzureCredential")]
        [Sample.API.Category(Sample.API.ParameterCategory.Azure)]
        public System.Management.Automation.PSObject DefaultProfile {get;set;}
        /// <summary>SendAsync Pipeline Steps to be appended to the front of the pipeline</summary>
        [System.Management.Automation.Parameter(Mandatory = false, DontShow = true, HelpMessage = "SendAsync Pipeline Steps to be appended to the front of the pipeline")]
        [System.Management.Automation.ValidateNotNull]
        [Sample.API.Category(Sample.API.ParameterCategory.Runtime)]
        public Sample.API.Runtime.SendAsyncStep[] HttpPipelineAppend {get;set;}
        /// <summary>SendAsync Pipeline Steps to be prepended to the front of the pipeline</summary>
        [System.Management.Automation.Parameter(Mandatory = false, DontShow = true, HelpMessage = "SendAsync Pipeline Steps to be prepended to the front of the pipeline")]
        [System.Management.Automation.ValidateNotNull]
        [Sample.API.Category(Sample.API.ParameterCategory.Runtime)]
        public Sample.API.Runtime.SendAsyncStep[] HttpPipelinePrepend {get;set;}
        /// <summary>Accessor for our copy of the InvocationInfo.</summary>
        public System.Management.Automation.InvocationInfo InvocationInformation
        {
            get
            {
                return __invocationInfo = __invocationInfo ?? this.MyInvocation ;
            }
            set
            {
                __invocationInfo = value;
            }
        }
        /// <summary>
        /// <see cref="IEventListener" /> cancellation delegate. Stops the cmdlet when called.
        /// </summary>
         System.Action Sample.API.Runtime.IEventListener.Cancel => _cancellationTokenSource.Cancel;
        /// <summary><see cref="IEventListener" /> cancellation token.</summary>
         System.Threading.CancellationToken Sample.API.Runtime.IEventListener.Token => _cancellationTokenSource.Token;
        /// <summary>Backing field for <see cref="Name" /> property.</summary>
        private string _name;

        /// <summary>The name of the Redis cache.</summary>
        [System.Management.Automation.Parameter(Mandatory = true, HelpMessage = "The name of the Redis cache.")]
        public string Name
        {
            get
            {
                return this._name;
            }
            set
            {
                this._name = value;
            }
        }
        /// <summary>
        /// The instance of the <see cref="Sample.API.Runtime.HttpPipeline" /> that the remote call will use.
        /// </summary>
        private Sample.API.Runtime.HttpPipeline Pipeline {get;set;}
        /// <summary>The URI for the proxy server to use</summary>
        [System.Management.Automation.Parameter(Mandatory = false, DontShow = true, HelpMessage = "The URI for the proxy server to use")]
        [Sample.API.Category(Sample.API.ParameterCategory.Runtime)]
        public System.Uri Proxy {get;set;}
        /// <summary>Credentials for a proxy server to use for the remote call</summary>
        [System.Management.Automation.Parameter(Mandatory = false, DontShow = true, HelpMessage = "Credentials for a proxy server to use for the remote call")]
        [System.Management.Automation.ValidateNotNull]
        [Sample.API.Category(Sample.API.ParameterCategory.Runtime)]
        public System.Management.Automation.PSCredential ProxyCredential {get;set;}
        /// <summary>Use the default credentials for the proxy</summary>
        [System.Management.Automation.Parameter(Mandatory = false, DontShow = true, HelpMessage = "Use the default credentials for the proxy")]
        [Sample.API.Category(Sample.API.ParameterCategory.Runtime)]
        public System.Management.Automation.SwitchParameter ProxyUseDefaultCredentials {get;set;}
        /// <summary>Backing field for <see cref="ResourceGroupName" /> property.</summary>
        private string _resourceGroupName;

        /// <summary>The name of the resource group.</summary>
        [System.Management.Automation.Parameter(Mandatory = true, HelpMessage = "The name of the resource group.")]
        public string ResourceGroupName
        {
            get
            {
                return this._resourceGroupName;
            }
            set
            {
                this._resourceGroupName = value;
            }
        }
        /// <summary>Backing field for <see cref="SubscriptionId" /> property.</summary>
        private string _subscriptionId;

        /// <summary>
        /// Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part
        /// of the URI for every service call.
        /// </summary>
        [System.Management.Automation.Parameter(Mandatory = true, HelpMessage = "Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.")]
        public string SubscriptionId
        {
            get
            {
                return this._subscriptionId;
            }
            set
            {
                this._subscriptionId = value;
            }
        }
        /// <summary>
        /// (overrides the default BeginProcessing method in System.Management.Automation.PSCmdlet)
        /// </summary>

        protected override void BeginProcessing()
        {
            Module.Instance.SetProxyConfiguration(Proxy, ProxyCredential, ProxyUseDefaultCredentials);
            if (Break)
            {
                Sample.API.Runtime.AttachDebugger.Break();
            }
            ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletBeginProcessing).Wait(); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
        }
        /// <summary>Creates a duplicate instance of this cmdlet (via JSON serialization).</summary>
        /// <returns>a duplicate instance of GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc</returns>
        public Sample.API.Cmdlets.GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc Clone()
        {
            var clone = FromJson(this.ToJson(null, Sample.API.Runtime.SerializationMode.IncludeAll));
            clone.HttpPipelinePrepend = this.HttpPipelinePrepend;
            clone.HttpPipelineAppend = this.HttpPipelineAppend;
            return clone;
        }
        /// <summary>Performs clean-up after the command execution</summary>

        protected override void EndProcessing()
        {
            ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletEndProcessing).Wait(); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
        }
        /// <summary>
        /// Deserializes a <see cref="Sample.API.Runtime.Json.JsonNode" /> into a new instance of this class.
        /// </summary>
        /// <param name="node">a <see cref="Sample.API.Runtime.Json.JsonNode" /> to deserialize from.</param>
        /// <returns>an instance of GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc.</returns>
        public static Sample.API.Cmdlets.GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc FromJson(Sample.API.Runtime.Json.JsonNode node)
        {
            return node is Sample.API.Runtime.Json.JsonObject json ? new GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc(json) : null;
        }
        /// <summary>
        /// Creates a new instance of this cmdlet, deserializing the content from a json string.
        /// </summary>
        /// <param name="jsonText">a string containing a JSON serialized instance of this cmdlet.</param>
        /// <returns>
        /// returns a new instance of the <see cref="GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc" /> cmdlet
        /// </returns>
        public static Sample.API.Cmdlets.GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc FromJsonString(string jsonText) => string.IsNullOrEmpty(jsonText) ? null : FromJson(Sample.API.Runtime.Json.JsonObject.Parse(jsonText));
        /// <summary>
        /// Intializes a new instance of the <see cref="GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc" /> cmdlet class.
        /// </summary>
        public GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc()
        {
        }
        /// <summary>Constructor for deserialization.</summary>
        /// <param name="json">a <see cref="Sample.API.Runtime.Json.JsonObject" /> to deserialize from.</param>
        internal GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc(Sample.API.Runtime.Json.JsonObject json)
        {
            // deserialize the contents
            {_resourceGroupName = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("ResourceGroupName"), out var __jsonResourceGroupName) ? (string)__jsonResourceGroupName : (string)ResourceGroupName;}
            {_name = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("Name"), out var __jsonName) ? (string)__jsonName : (string)Name;}
            {_subscriptionId = If( json?.PropertyT<Sample.API.Runtime.Json.JsonString>("SubscriptionId"), out var __jsonSubscriptionId) ? (string)__jsonSubscriptionId : (string)SubscriptionId;}
        }
        /// <summary>Handles/Dispatches events during the call to the REST service.</summary>
        /// <param name="id">The message id</param>
        /// <param name="token">The message cancellation token. When this call is cancelled, this should be <c>true</c></param>
        /// <param name="messageData">Detailed message data for the message event.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the message is completed.
        /// </returns>
         async System.Threading.Tasks.Task Sample.API.Runtime.IEventListener.Signal(string id, System.Threading.CancellationToken token, System.Func<Sample.API.Runtime.EventData> messageData)
        {
            using( NoSynchronizationContext )
            {
                if (token.IsCancellationRequested)
                {
                    return ;
                }
                switch ( id )
                {
                    case Sample.API.Runtime.Events.Verbose:
                    {
                        WriteVerbose($"{messageData().Message ?? System.String.Empty}");
                        return ;
                    }
                    case Sample.API.Runtime.Events.Warning:
                    {
                        WriteWarning($"{messageData().Message ?? System.String.Empty}");
                        return ;
                    }
                    case Sample.API.Runtime.Events.Information:
                    {
                        var data = messageData();
                        WriteInformation(data, new[] { data.Message });
                        return ;
                    }
                    case Sample.API.Runtime.Events.Debug:
                    {
                        WriteDebug($"{messageData().Message ?? System.String.Empty}");
                        return ;
                    }
                    case Sample.API.Runtime.Events.Error:
                    {
                        WriteError(new System.Management.Automation.ErrorRecord( new System.Exception(messageData().Message), string.Empty, System.Management.Automation.ErrorCategory.NotSpecified, null ) );
                        return ;
                    }
                }
                await Sample.API.Module.Instance.Signal(id, token, messageData, (i,t,m) => ((Sample.API.Runtime.IEventListener)this).Signal(i,t,()=> Sample.API.Runtime.EventDataConverter.ConvertFrom( m() ) as Sample.API.Runtime.EventData ), InvocationInformation, this.ParameterSetName, __correlationId, __processRecordId, null );
                if (token.IsCancellationRequested)
                {
                    return ;
                }
                WriteDebug($"{id}: {messageData().Message ?? System.String.Empty}");
            }
        }
        /// <summary>Performs execution of the command.</summary>

        protected override void ProcessRecord()
        {
            ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletProcessRecordStart).Wait(); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
            __processRecordId = System.Guid.NewGuid().ToString();
            try
            {
                // work
                using( var asyncCommandRuntime = new Sample.API.Runtime.PowerShell.AsyncCommandRuntime(this, ((Sample.API.Runtime.IEventListener)this).Token) )
                {
                    asyncCommandRuntime.Wait( ProcessRecordAsync(),((Sample.API.Runtime.IEventListener)this).Token);
                }
            }
            catch (System.AggregateException aggregateException)
            {
                // unroll the inner exceptions to get the root cause
                foreach( var innerException in aggregateException.Flatten().InnerExceptions )
                {
                    ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletException, $"{innerException.GetType().Name} - {innerException.Message} : {innerException.StackTrace}").Wait(); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
                    // Write exception out to error channel.
                    WriteError( new System.Management.Automation.ErrorRecord(innerException,string.Empty, System.Management.Automation.ErrorCategory.NotSpecified, null) );
                }
            }
            catch (System.Exception exception) when ((exception as System.Management.Automation.PipelineStoppedException)!= null && (exception as System.Management.Automation.PipelineStoppedException).InnerException == null)
            {
                ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletException, $"{exception.GetType().Name} - {exception.Message} : {exception.StackTrace}").Wait(); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
                ThrowTerminatingError( new System.Management.Automation.ErrorRecord(exception,string.Empty, System.Management.Automation.ErrorCategory.NotSpecified, null) );
            }
            catch (System.Exception exception)
            {
                ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletException, $"{exception.GetType().Name} - {exception.Message} : {exception.StackTrace}").Wait(); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
                // Write exception out to error channel.
                WriteError( new System.Management.Automation.ErrorRecord(exception,string.Empty, System.Management.Automation.ErrorCategory.NotSpecified, null) );
            }
            finally
            {
                ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletProcessRecordEnd).Wait();
            }
        }
        /// <summary>Performs execution of the command, working asynchronously if required.</summary>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the method is completed.
        /// </returns>
        protected async System.Threading.Tasks.Task ProcessRecordAsync()
        {
            using( NoSynchronizationContext )
            {
                await ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletProcessRecordAsyncStart); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
                await ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletGetPipeline); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
                Pipeline = Sample.API.Module.Instance.CreatePipeline(InvocationInformation, __correlationId, __processRecordId);
                Pipeline.Prepend(HttpPipelinePrepend);
                Pipeline.Append(HttpPipelineAppend);
                // get the client instance
                try
                {
                    await ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletBeforeAPICall); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
                    await this.Client.RedisGet(ResourceGroupName, Name, SubscriptionId, onOK, this, Pipeline);
                    await ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletAfterAPICall); if( ((Sample.API.Runtime.IEventListener)this).Token.IsCancellationRequested ) { return; }
                }
                finally
                {
                    await ((Sample.API.Runtime.IEventListener)this).Signal(Sample.API.Runtime.Events.CmdletProcessRecordAsyncEnd);
                }
            }
        }
        /// <summary>Interrupts currently running code within the command.</summary>

        protected override void StopProcessing()
        {
            ((Sample.API.Runtime.IEventListener)this).Cancel();
            base.StopProcessing();
        }
        /// <summary>
        /// Serializes the state of this cmdlet to a <see cref="Sample.API.Runtime.Json.JsonNode" /> object.
        /// </summary>
        /// <param name="container">The <see cref="Sample.API.Runtime.Json.JsonObject"/> container to serialize this object into. If the caller
        /// passes in <c>null</c>, a new instance will be created and returned to the caller.</param>
        /// <param name="serializationMode">Allows the caller to choose the depth of the serialization. See <see cref="Sample.API.Runtime.SerializationMode"/>.</param>
        /// <returns>
        /// a serialized instance of <see cref="GetAzRedisCache_ResourceGroupNameNameSubscriptionIdEtc" /> as a <see cref="Sample.API.Runtime.Json.JsonNode"
        /// />.
        /// </returns>
        public Sample.API.Runtime.Json.JsonNode ToJson(Sample.API.Runtime.Json.JsonObject container, Sample.API.Runtime.SerializationMode serializationMode)
        {
            // serialization method
            container = container ?? new Sample.API.Runtime.Json.JsonObject();
            AddIf( null != (((object)ResourceGroupName)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(ResourceGroupName.ToString()) : null, "ResourceGroupName" ,container.Add );
            AddIf( null != (((object)Name)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(Name.ToString()) : null, "Name" ,container.Add );
            AddIf( null != (((object)SubscriptionId)?.ToString()) ? (Sample.API.Runtime.Json.JsonNode) new Sample.API.Runtime.Json.JsonString(SubscriptionId.ToString()) : null, "SubscriptionId" ,container.Add );
            return container;
        }
        /// <summary>a delegate that is called when the remote service returns 200 (OK).</summary>
        /// <param name="responseMessage">the raw response message as an System.Net.Http.HttpResponseMessage.</param>
        /// <param name="response">the body result as a <see cref="Sample.API.Models.Api20171001.IRedisResource" /> from the remote
        /// call</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the method is completed.
        /// </returns>
        private async System.Threading.Tasks.Task onOK(System.Net.Http.HttpResponseMessage responseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisResource> response)
        {
            using( NoSynchronizationContext )
            {
                // onOK - response for 200 / application/json
                // (await response) // should be Sample.API.Models.Api20171001.IRedisResource
                WriteObject(await response);
            }
        }
    }
}