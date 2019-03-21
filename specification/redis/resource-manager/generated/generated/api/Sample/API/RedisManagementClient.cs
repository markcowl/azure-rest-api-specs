namespace Sample.API
{
    using static Sample.API.Runtime.Extensions;
    /// <summary>
    /// Low-level API implementation for the RedisManagementClient service.
    /// </summary>
    public partial class RedisManagementClient
    {

        /// <summary>Create or update a redis cache firewall rule</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="ruleName">The name of the firewall rule.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the create or update redis firewall rule operation.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onCreated">a delegate that is called when the remote service returns 201 (Created).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task FirewallRulesCreateOrUpdate(string resourceGroupName, string cacheName, string ruleName, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisFirewallRuleCreateParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisFirewallRule>, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisFirewallRule>, System.Threading.Tasks.Task> onCreated, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(cacheName)
                        + "/firewallRules/"
                        + System.Uri.EscapeDataString(ruleName)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Put, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.FirewallRulesCreateOrUpdate_Call(request,onOK,onCreated,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="FirewallRulesCreateOrUpdate" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onCreated">a delegate that is called when the remote service returns 201 (Created).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task FirewallRulesCreateOrUpdate_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisFirewallRule>, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisFirewallRule>, System.Threading.Tasks.Task> onCreated, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisFirewallRule.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        case System.Net.HttpStatusCode.Created:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onCreated(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisFirewallRule.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="FirewallRulesCreateOrUpdate" /> method. Call this like the actual call, but you will
        /// get validation events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="ruleName">The name of the firewall rule.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the create or update redis firewall rule operation.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task FirewallRulesCreateOrUpdate_Validate(string resourceGroupName, string cacheName, string ruleName, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisFirewallRuleCreateParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(cacheName),cacheName);
                await eventListener.AssertNotNull(nameof(ruleName),ruleName);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>Deletes a single firewall rule in a specified redis cache.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="ruleName">The name of the firewall rule.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task FirewallRulesDelete(string resourceGroupName, string cacheName, string ruleName, string apiVersion, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(cacheName)
                        + "/firewallRules/"
                        + System.Uri.EscapeDataString(ruleName)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Delete, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.FirewallRulesDelete_Call(request,onOK,onNoContent,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="FirewallRulesDelete" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task FirewallRulesDelete_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response);
                            break;
                        }
                        case System.Net.HttpStatusCode.NoContent:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onNoContent(_response);
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="FirewallRulesDelete" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="ruleName">The name of the firewall rule.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task FirewallRulesDelete_Validate(string resourceGroupName, string cacheName, string ruleName, string apiVersion, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(cacheName),cacheName);
                await eventListener.AssertNotNull(nameof(ruleName),ruleName);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Gets a single firewall rule in a specified redis cache.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="ruleName">The name of the firewall rule.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task FirewallRulesGet(string resourceGroupName, string cacheName, string ruleName, string apiVersion, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisFirewallRule>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(cacheName)
                        + "/firewallRules/"
                        + System.Uri.EscapeDataString(ruleName)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.FirewallRulesGet_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="FirewallRulesGet" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task FirewallRulesGet_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisFirewallRule>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisFirewallRule.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="FirewallRulesGet" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="ruleName">The name of the firewall rule.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task FirewallRulesGet_Validate(string resourceGroupName, string cacheName, string ruleName, string apiVersion, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(cacheName),cacheName);
                await eventListener.AssertNotNull(nameof(ruleName),ruleName);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Gets all firewall rules in the specified redis cache.</summary>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task FirewallRulesListByRedisResource(string apiVersion, string subscriptionId, string resourceGroupName, string cacheName, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisFirewallRuleListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(cacheName)
                        + "/firewallRules"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.FirewallRulesListByRedisResource_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="FirewallRulesListByRedisResource" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task FirewallRulesListByRedisResource_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisFirewallRuleListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisFirewallRuleListResult.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="FirewallRulesListByRedisResource" /> method. Call this like the actual call, but you
        /// will get validation events back.
        /// </summary>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task FirewallRulesListByRedisResource_Validate(string apiVersion, string subscriptionId, string resourceGroupName, string cacheName, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(cacheName),cacheName);
            }
        }
        /// <summary>Adds a linked server to the Redis cache (requires Premium SKU).</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="linkedServerName">The name of the linked server that is being added to the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Create Linked server operation.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task LinkedServerCreate(string resourceGroupName, string name, string linkedServerName, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisLinkedServerCreateParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/linkedServers/"
                        + System.Uri.EscapeDataString(linkedServerName)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Put, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.LinkedServerCreate_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="LinkedServerCreate" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task LinkedServerCreate_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    // this operation supports x-ms-long-running-operation
                    var _originalUri = request.RequestUri.AbsoluteUri;
                    while (_response.StatusCode == System.Net.HttpStatusCode.Created || _response.StatusCode == System.Net.HttpStatusCode.Accepted )
                    {

                        // get the delay before polling.
                        if (!int.TryParse( _response.GetFirstHeader(@"RetryAfter"), out int delay))
                        {
                            delay = 30;
                        }
                        await eventListener.Signal(Sample.API.Runtime.Events.DelayBeforePolling, $"Delaying {delay} seconds before polling.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // start the delay timer (we'll await later...)
                        var waiting = System.Threading.Tasks.Task.Delay(delay * 1000, eventListener.Token );

                        // while we wait, let's grab the headers and get ready to poll.
                        var asyncOperation = _response.GetFirstHeader(@"Azure-AsyncOperation");
                        var location = _response.GetFirstHeader(@"Location");
                        var _uri = System.String.IsNullOrEmpty(asyncOperation) ? System.String.IsNullOrEmpty(location) ? _originalUri : location : asyncOperation;
                        request = request.CloneAndDispose(new System.Uri(_uri), Sample.API.Runtime.Method.Get);

                        // and let's look at the current response body and see if we have some information we can give back to the listener
                        var content = _response.Content.ReadAsStringAsync();
                        await waiting;

                        // check for cancellation
                        if( eventListener.Token.IsCancellationRequested ) { return; }
                        await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polling {_uri}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // drop the old response
                        _response?.Dispose();

                        // make the polling call
                        _response = await sender.SendAsync(request, eventListener);

                        if( _response.StatusCode == System.Net.HttpStatusCode.OK && string.IsNullOrEmpty(asyncOperation))
                        {
                            try {
                                // we have a 200, and a should have a provisioning state.
                                if( Sample.API.Runtime.Json.JsonNode.Parse(await _response.Content.ReadAsStringAsync()) is Sample.API.Runtime.Json.JsonObject json)
                                {
                                    var state = json.Property("properties")?.PropertyT<Sample.API.Runtime.Json.JsonString>("provisioningState");
                                    await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polled {_uri} provisioning state  {state}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                                    if( state?.ToString() != "Succeeded")
                                    {
                                        _response.StatusCode = System.Net.HttpStatusCode.Created;
                                    }
                                }
                            } catch {
                                // um.. whatever.
                            }
                        }

                        // check for terminal status code
                        if (_response.StatusCode != System.Net.HttpStatusCode.Created && _response.StatusCode != System.Net.HttpStatusCode.Accepted )
                        {
                            // we're done polling, do a request on final target?
                            // declared final-state-via: default
                            // final get on the original URI
                            request = request.CloneAndDispose(new System.Uri(_originalUri), Sample.API.Runtime.Method.Get);

                            // drop the old response
                            _response?.Dispose();

                            // make the final call
                            _response = await sender.SendAsync(request,  eventListener);
                            break;
                        }
                    }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisLinkedServerWithProperties.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="LinkedServerCreate" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="linkedServerName">The name of the linked server that is being added to the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Create Linked server operation.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task LinkedServerCreate_Validate(string resourceGroupName, string name, string linkedServerName, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisLinkedServerCreateParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(linkedServerName),linkedServerName);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>Deletes the linked server from a redis cache (requires Premium SKU).</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="linkedServerName">The name of the linked server that is being added to the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task LinkedServerDelete(string resourceGroupName, string name, string linkedServerName, string apiVersion, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/linkedServers/"
                        + System.Uri.EscapeDataString(linkedServerName)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Delete, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.LinkedServerDelete_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="LinkedServerDelete" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task LinkedServerDelete_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response);
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="LinkedServerDelete" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="linkedServerName">The name of the linked server that is being added to the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task LinkedServerDelete_Validate(string resourceGroupName, string name, string linkedServerName, string apiVersion, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(linkedServerName),linkedServerName);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>
        /// Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="linkedServerName">The name of the linked server.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task LinkedServerGet(string resourceGroupName, string name, string linkedServerName, string apiVersion, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/linkedServers/"
                        + System.Uri.EscapeDataString(linkedServerName)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.LinkedServerGet_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="LinkedServerGet" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task LinkedServerGet_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisLinkedServerWithProperties.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="LinkedServerGet" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="linkedServerName">The name of the linked server.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task LinkedServerGet_Validate(string resourceGroupName, string name, string linkedServerName, string apiVersion, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(linkedServerName),linkedServerName);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>
        /// Gets the list of linked servers associated with this redis cache (requires Premium SKU).
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task LinkedServerList(string resourceGroupName, string name, string apiVersion, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisLinkedServerWithPropertiesList>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/linkedServers"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.LinkedServerList_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="LinkedServerList" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task LinkedServerList_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisLinkedServerWithPropertiesList>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisLinkedServerWithPropertiesList.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="LinkedServerList" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task LinkedServerList_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Lists all of the available REST API operations of the Microsoft.Cache provider.</summary>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task OperationsList(string apiVersion, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IOperationListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//providers/Microsoft.Cache/operations"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.OperationsList_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="OperationsList" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task OperationsList_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IOperationListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.OperationListResult.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="OperationsList" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task OperationsList_Validate(string apiVersion, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
            }
        }
        /// <summary>Create or replace the patching schedule for Redis cache (requires Premium SKU).</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters to set the patching schedule for Redis cache.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onCreated">a delegate that is called when the remote service returns 201 (Created).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task PatchSchedulesCreateOrUpdate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisPatchSchedule body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisPatchSchedule>, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisPatchSchedule>, System.Threading.Tasks.Task> onCreated, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            Sample.API.Support.DefaultName @default = @"default";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/patchSchedules/"
                        + System.Uri.EscapeDataString(@default)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Put, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.PatchSchedulesCreateOrUpdate_Call(request,onOK,onCreated,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="PatchSchedulesCreateOrUpdate" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onCreated">a delegate that is called when the remote service returns 201 (Created).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task PatchSchedulesCreateOrUpdate_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisPatchSchedule>, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisPatchSchedule>, System.Threading.Tasks.Task> onCreated, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisPatchSchedule.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        case System.Net.HttpStatusCode.Created:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onCreated(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisPatchSchedule.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="PatchSchedulesCreateOrUpdate" /> method. Call this like the actual call, but you will
        /// get validation events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters to set the patching schedule for Redis cache.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task PatchSchedulesCreateOrUpdate_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisPatchSchedule body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>Deletes the patching schedule of a redis cache (requires Premium SKU).</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task PatchSchedulesDelete(string resourceGroupName, string name, string apiVersion, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            Sample.API.Support.DefaultName @default = @"default";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/patchSchedules/"
                        + System.Uri.EscapeDataString(@default)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Delete, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.PatchSchedulesDelete_Call(request,onOK,onNoContent,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="PatchSchedulesDelete" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task PatchSchedulesDelete_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response);
                            break;
                        }
                        case System.Net.HttpStatusCode.NoContent:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onNoContent(_response);
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="PatchSchedulesDelete" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task PatchSchedulesDelete_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Gets the patching schedule of a redis cache (requires Premium SKU).</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task PatchSchedulesGet(string resourceGroupName, string name, string apiVersion, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisPatchSchedule>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            Sample.API.Support.DefaultName @default = @"default";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/patchSchedules/"
                        + System.Uri.EscapeDataString(@default)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.PatchSchedulesGet_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="PatchSchedulesGet" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task PatchSchedulesGet_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisPatchSchedule>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisPatchSchedule.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="PatchSchedulesGet" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task PatchSchedulesGet_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Gets all patch schedules in the specified redis cache (there is only one).</summary>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task PatchSchedulesListByRedisResource(string apiVersion, string subscriptionId, string resourceGroupName, string cacheName, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisPatchScheduleListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(cacheName)
                        + "/patchSchedules"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.PatchSchedulesListByRedisResource_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="PatchSchedulesListByRedisResource" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task PatchSchedulesListByRedisResource_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisPatchScheduleListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisPatchScheduleListResult.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="PatchSchedulesListByRedisResource" /> method. Call this like the actual call, but you
        /// will get validation events back.
        /// </summary>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="cacheName">The name of the Redis cache.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task PatchSchedulesListByRedisResource_Validate(string apiVersion, string subscriptionId, string resourceGroupName, string cacheName, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(cacheName),cacheName);
            }
        }
        /// <summary>Checks that the redis cache name is valid and is not already in use.</summary>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the CheckNameAvailability Redis operation. The only supported resource type
        /// is 'Microsoft.Cache/redis'</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisCheckNameAvailability(string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.ICheckNameAvailabilityParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/providers/Microsoft.Cache/CheckNameAvailability"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Post, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisCheckNameAvailability_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisCheckNameAvailability" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisCheckNameAvailability_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response);
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisCheckNameAvailability" /> method. Call this like the actual call, but you will get
        /// validation events back.
        /// </summary>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the CheckNameAvailability Redis operation. The only supported resource type
        /// is 'Microsoft.Cache/redis'</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisCheckNameAvailability_Validate(string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.ICheckNameAvailabilityParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>
        /// Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Create Redis operation.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisCreate(string resourceGroupName, string name, string subscriptionId, Sample.API.Models.Api20180301.IRedisCreateParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2018-03-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Put, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisCreate_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>
        /// Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Create Redis operation.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisCreate(string resourceGroupName, string name, string subscriptionId, Sample.API.Models.Api20171001.IRedisCreateParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2017-10-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Put, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisCreate_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisCreate" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisCreate_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    // this operation supports x-ms-long-running-operation
                    var _originalUri = request.RequestUri.AbsoluteUri;
                    while (_response.StatusCode == System.Net.HttpStatusCode.Created || _response.StatusCode == System.Net.HttpStatusCode.Accepted )
                    {

                        // get the delay before polling.
                        if (!int.TryParse( _response.GetFirstHeader(@"RetryAfter"), out int delay))
                        {
                            delay = 30;
                        }
                        await eventListener.Signal(Sample.API.Runtime.Events.DelayBeforePolling, $"Delaying {delay} seconds before polling.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // start the delay timer (we'll await later...)
                        var waiting = System.Threading.Tasks.Task.Delay(delay * 1000, eventListener.Token );

                        // while we wait, let's grab the headers and get ready to poll.
                        var asyncOperation = _response.GetFirstHeader(@"Azure-AsyncOperation");
                        var location = _response.GetFirstHeader(@"Location");
                        var _uri = System.String.IsNullOrEmpty(asyncOperation) ? System.String.IsNullOrEmpty(location) ? _originalUri : location : asyncOperation;
                        request = request.CloneAndDispose(new System.Uri(_uri), Sample.API.Runtime.Method.Get);

                        // and let's look at the current response body and see if we have some information we can give back to the listener
                        var content = _response.Content.ReadAsStringAsync();
                        await waiting;

                        // check for cancellation
                        if( eventListener.Token.IsCancellationRequested ) { return; }
                        await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polling {_uri}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // drop the old response
                        _response?.Dispose();

                        // make the polling call
                        _response = await sender.SendAsync(request, eventListener);

                        if( _response.StatusCode == System.Net.HttpStatusCode.OK && string.IsNullOrEmpty(asyncOperation))
                        {
                            try {
                                // we have a 200, and a should have a provisioning state.
                                if( Sample.API.Runtime.Json.JsonNode.Parse(await _response.Content.ReadAsStringAsync()) is Sample.API.Runtime.Json.JsonObject json)
                                {
                                    var state = json.Property("properties")?.PropertyT<Sample.API.Runtime.Json.JsonString>("provisioningState");
                                    await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polled {_uri} provisioning state  {state}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                                    if( state?.ToString() != "Succeeded")
                                    {
                                        _response.StatusCode = System.Net.HttpStatusCode.Created;
                                    }
                                }
                            } catch {
                                // um.. whatever.
                            }
                        }

                        // check for terminal status code
                        if (_response.StatusCode != System.Net.HttpStatusCode.Created && _response.StatusCode != System.Net.HttpStatusCode.Accepted )
                        {
                            // we're done polling, do a request on final target?
                            // declared final-state-via: default
                            // final get on the original URI
                            request = request.CloneAndDispose(new System.Uri(_originalUri), Sample.API.Runtime.Method.Get);

                            // drop the old response
                            _response?.Dispose();

                            // make the final call
                            _response = await sender.SendAsync(request,  eventListener);
                            break;
                        }
                    }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisResource.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>Actual wire call for <see cref="RedisCreate" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisCreate_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    // this operation supports x-ms-long-running-operation
                    var _originalUri = request.RequestUri.AbsoluteUri;
                    while (_response.StatusCode == System.Net.HttpStatusCode.Created || _response.StatusCode == System.Net.HttpStatusCode.Accepted )
                    {

                        // get the delay before polling.
                        if (!int.TryParse( _response.GetFirstHeader(@"RetryAfter"), out int delay))
                        {
                            delay = 30;
                        }
                        await eventListener.Signal(Sample.API.Runtime.Events.DelayBeforePolling, $"Delaying {delay} seconds before polling.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // start the delay timer (we'll await later...)
                        var waiting = System.Threading.Tasks.Task.Delay(delay * 1000, eventListener.Token );

                        // while we wait, let's grab the headers and get ready to poll.
                        var asyncOperation = _response.GetFirstHeader(@"Azure-AsyncOperation");
                        var location = _response.GetFirstHeader(@"Location");
                        var _uri = System.String.IsNullOrEmpty(asyncOperation) ? System.String.IsNullOrEmpty(location) ? _originalUri : location : asyncOperation;
                        request = request.CloneAndDispose(new System.Uri(_uri), Sample.API.Runtime.Method.Get);

                        // and let's look at the current response body and see if we have some information we can give back to the listener
                        var content = _response.Content.ReadAsStringAsync();
                        await waiting;

                        // check for cancellation
                        if( eventListener.Token.IsCancellationRequested ) { return; }
                        await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polling {_uri}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // drop the old response
                        _response?.Dispose();

                        // make the polling call
                        _response = await sender.SendAsync(request, eventListener);

                        if( _response.StatusCode == System.Net.HttpStatusCode.OK && string.IsNullOrEmpty(asyncOperation))
                        {
                            try {
                                // we have a 200, and a should have a provisioning state.
                                if( Sample.API.Runtime.Json.JsonNode.Parse(await _response.Content.ReadAsStringAsync()) is Sample.API.Runtime.Json.JsonObject json)
                                {
                                    var state = json.Property("properties")?.PropertyT<Sample.API.Runtime.Json.JsonString>("provisioningState");
                                    await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polled {_uri} provisioning state  {state}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                                    if( state?.ToString() != "Succeeded")
                                    {
                                        _response.StatusCode = System.Net.HttpStatusCode.Created;
                                    }
                                }
                            } catch {
                                // um.. whatever.
                            }
                        }

                        // check for terminal status code
                        if (_response.StatusCode != System.Net.HttpStatusCode.Created && _response.StatusCode != System.Net.HttpStatusCode.Accepted )
                        {
                            // we're done polling, do a request on final target?
                            // declared final-state-via: default
                            // final get on the original URI
                            request = request.CloneAndDispose(new System.Uri(_originalUri), Sample.API.Runtime.Method.Get);

                            // drop the old response
                            _response?.Dispose();

                            // make the final call
                            _response = await sender.SendAsync(request,  eventListener);
                            break;
                        }
                    }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20180301.RedisResource.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisCreate" /> method. Call this like the actual call, but you will get validation events
        /// back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Create Redis operation.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisCreate_Validate(string resourceGroupName, string name, string subscriptionId, Sample.API.Models.Api20180301.IRedisCreateParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisCreate" /> method. Call this like the actual call, but you will get validation events
        /// back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Create Redis operation.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisCreate_Validate(string resourceGroupName, string name, string subscriptionId, Sample.API.Models.Api20171001.IRedisCreateParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>Deletes a Redis cache.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisDelete(string resourceGroupName, string name, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2017-10-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Delete, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisDelete_Call(request,onOK,onNoContent,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisDelete" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisDelete_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    // this operation supports x-ms-long-running-operation
                    var _originalUri = request.RequestUri.AbsoluteUri;
                    while (_response.StatusCode == System.Net.HttpStatusCode.Created || _response.StatusCode == System.Net.HttpStatusCode.Accepted )
                    {

                        // get the delay before polling.
                        if (!int.TryParse( _response.GetFirstHeader(@"RetryAfter"), out int delay))
                        {
                            delay = 30;
                        }
                        await eventListener.Signal(Sample.API.Runtime.Events.DelayBeforePolling, $"Delaying {delay} seconds before polling.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // start the delay timer (we'll await later...)
                        var waiting = System.Threading.Tasks.Task.Delay(delay * 1000, eventListener.Token );

                        // while we wait, let's grab the headers and get ready to poll.
                        var asyncOperation = _response.GetFirstHeader(@"Azure-AsyncOperation");
                        var location = _response.GetFirstHeader(@"Location");
                        var _uri = System.String.IsNullOrEmpty(asyncOperation) ? System.String.IsNullOrEmpty(location) ? _originalUri : location : asyncOperation;
                        request = request.CloneAndDispose(new System.Uri(_uri), Sample.API.Runtime.Method.Get);

                        // and let's look at the current response body and see if we have some information we can give back to the listener
                        var content = _response.Content.ReadAsStringAsync();
                        await waiting;

                        // check for cancellation
                        if( eventListener.Token.IsCancellationRequested ) { return; }
                        await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polling {_uri}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // drop the old response
                        _response?.Dispose();

                        // make the polling call
                        _response = await sender.SendAsync(request, eventListener);

                        if( _response.StatusCode == System.Net.HttpStatusCode.OK && string.IsNullOrEmpty(asyncOperation))
                        {
                            try {
                                // we have a 200, and a should have a provisioning state.
                                if( Sample.API.Runtime.Json.JsonNode.Parse(await _response.Content.ReadAsStringAsync()) is Sample.API.Runtime.Json.JsonObject json)
                                {
                                    var state = json.Property("properties")?.PropertyT<Sample.API.Runtime.Json.JsonString>("provisioningState");
                                    await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polled {_uri} provisioning state  {state}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                                    if( state?.ToString() != "Succeeded")
                                    {
                                        _response.StatusCode = System.Net.HttpStatusCode.Created;
                                    }
                                }
                            } catch {
                                // um.. whatever.
                            }
                        }

                        // check for terminal status code
                        if (_response.StatusCode != System.Net.HttpStatusCode.Created && _response.StatusCode != System.Net.HttpStatusCode.Accepted )
                        {
                            // we're done polling, do a request on final target?
                            // declared final-state-via: default
                            // final get on the the Location header, if present
                            var finalLocation = _response.GetFirstHeader(@"Location");
                        }
                    }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response);
                            break;
                        }
                        case System.Net.HttpStatusCode.NoContent:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onNoContent(_response);
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisDelete" /> method. Call this like the actual call, but you will get validation events
        /// back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisDelete_Validate(string resourceGroupName, string name, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Export data from the redis cache to blobs in a container.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters for Redis export operation.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisExportData(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IExportRDBParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/export"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Post, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisExportData_Call(request,onOK,onNoContent,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisExportData" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisExportData_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    // this operation supports x-ms-long-running-operation
                    var _originalUri = request.RequestUri.AbsoluteUri;
                    while (_response.StatusCode == System.Net.HttpStatusCode.Created || _response.StatusCode == System.Net.HttpStatusCode.Accepted )
                    {

                        // get the delay before polling.
                        if (!int.TryParse( _response.GetFirstHeader(@"RetryAfter"), out int delay))
                        {
                            delay = 30;
                        }
                        await eventListener.Signal(Sample.API.Runtime.Events.DelayBeforePolling, $"Delaying {delay} seconds before polling.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // start the delay timer (we'll await later...)
                        var waiting = System.Threading.Tasks.Task.Delay(delay * 1000, eventListener.Token );

                        // while we wait, let's grab the headers and get ready to poll.
                        var asyncOperation = _response.GetFirstHeader(@"Azure-AsyncOperation");
                        var location = _response.GetFirstHeader(@"Location");
                        var _uri = System.String.IsNullOrEmpty(asyncOperation) ? System.String.IsNullOrEmpty(location) ? _originalUri : location : asyncOperation;
                        request = request.CloneAndDispose(new System.Uri(_uri), Sample.API.Runtime.Method.Get);

                        // and let's look at the current response body and see if we have some information we can give back to the listener
                        var content = _response.Content.ReadAsStringAsync();
                        await waiting;

                        // check for cancellation
                        if( eventListener.Token.IsCancellationRequested ) { return; }
                        await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polling {_uri}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // drop the old response
                        _response?.Dispose();

                        // make the polling call
                        _response = await sender.SendAsync(request, eventListener);

                        if( _response.StatusCode == System.Net.HttpStatusCode.OK && string.IsNullOrEmpty(asyncOperation))
                        {
                            try {
                                // we have a 200, and a should have a provisioning state.
                                if( Sample.API.Runtime.Json.JsonNode.Parse(await _response.Content.ReadAsStringAsync()) is Sample.API.Runtime.Json.JsonObject json)
                                {
                                    var state = json.Property("properties")?.PropertyT<Sample.API.Runtime.Json.JsonString>("provisioningState");
                                    await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polled {_uri} provisioning state  {state}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                                    if( state?.ToString() != "Succeeded")
                                    {
                                        _response.StatusCode = System.Net.HttpStatusCode.Created;
                                    }
                                }
                            } catch {
                                // um.. whatever.
                            }
                        }

                        // check for terminal status code
                        if (_response.StatusCode != System.Net.HttpStatusCode.Created && _response.StatusCode != System.Net.HttpStatusCode.Accepted )
                        {
                            // we're done polling, do a request on final target?
                            // declared final-state-via: default
                            // final get on the the Location header, if present
                            var finalLocation = _response.GetFirstHeader(@"Location");
                        }
                    }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response);
                            break;
                        }
                        case System.Net.HttpStatusCode.NoContent:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onNoContent(_response);
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisExportData" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters for Redis export operation.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisExportData_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IExportRDBParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>
        /// Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential
        /// data loss.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Specifies which Redis node(s) to reboot.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisForceReboot(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisRebootParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisForceRebootResponse>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/forceReboot"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Post, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisForceReboot_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisForceReboot" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisForceReboot_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisForceRebootResponse>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisForceRebootResponse.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisForceReboot" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Specifies which Redis node(s) to reboot.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisForceReboot_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisRebootParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>Gets a Redis cache (resource description).</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisGet(string resourceGroupName, string name, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2018-03-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisGet_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Gets a Redis cache (resource description).</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisGet(string resourceGroupName, string name, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2017-10-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisGet_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisGet" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisGet_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20180301.RedisResource.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>Actual wire call for <see cref="RedisGet" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisGet_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisResource.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisGet" /> method. Call this like the actual call, but you will get validation events
        /// back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisGet_Validate(string resourceGroupName, string name, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Import data into Redis cache.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters for Redis import operation.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisImportData(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IImportRDBParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/import"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Post, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisImportData_Call(request,onOK,onNoContent,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisImportData" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="onNoContent">a delegate that is called when the remote service returns 204 (NoContent).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisImportData_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onOK, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task> onNoContent, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    // this operation supports x-ms-long-running-operation
                    var _originalUri = request.RequestUri.AbsoluteUri;
                    while (_response.StatusCode == System.Net.HttpStatusCode.Created || _response.StatusCode == System.Net.HttpStatusCode.Accepted )
                    {

                        // get the delay before polling.
                        if (!int.TryParse( _response.GetFirstHeader(@"RetryAfter"), out int delay))
                        {
                            delay = 30;
                        }
                        await eventListener.Signal(Sample.API.Runtime.Events.DelayBeforePolling, $"Delaying {delay} seconds before polling.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // start the delay timer (we'll await later...)
                        var waiting = System.Threading.Tasks.Task.Delay(delay * 1000, eventListener.Token );

                        // while we wait, let's grab the headers and get ready to poll.
                        var asyncOperation = _response.GetFirstHeader(@"Azure-AsyncOperation");
                        var location = _response.GetFirstHeader(@"Location");
                        var _uri = System.String.IsNullOrEmpty(asyncOperation) ? System.String.IsNullOrEmpty(location) ? _originalUri : location : asyncOperation;
                        request = request.CloneAndDispose(new System.Uri(_uri), Sample.API.Runtime.Method.Get);

                        // and let's look at the current response body and see if we have some information we can give back to the listener
                        var content = _response.Content.ReadAsStringAsync();
                        await waiting;

                        // check for cancellation
                        if( eventListener.Token.IsCancellationRequested ) { return; }
                        await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polling {_uri}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }

                        // drop the old response
                        _response?.Dispose();

                        // make the polling call
                        _response = await sender.SendAsync(request, eventListener);

                        if( _response.StatusCode == System.Net.HttpStatusCode.OK && string.IsNullOrEmpty(asyncOperation))
                        {
                            try {
                                // we have a 200, and a should have a provisioning state.
                                if( Sample.API.Runtime.Json.JsonNode.Parse(await _response.Content.ReadAsStringAsync()) is Sample.API.Runtime.Json.JsonObject json)
                                {
                                    var state = json.Property("properties")?.PropertyT<Sample.API.Runtime.Json.JsonString>("provisioningState");
                                    await eventListener.Signal(Sample.API.Runtime.Events.Polling, $"Polled {_uri} provisioning state  {state}.", _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                                    if( state?.ToString() != "Succeeded")
                                    {
                                        _response.StatusCode = System.Net.HttpStatusCode.Created;
                                    }
                                }
                            } catch {
                                // um.. whatever.
                            }
                        }

                        // check for terminal status code
                        if (_response.StatusCode != System.Net.HttpStatusCode.Created && _response.StatusCode != System.Net.HttpStatusCode.Accepted )
                        {
                            // we're done polling, do a request on final target?
                            // declared final-state-via: default
                            // final get on the the Location header, if present
                            var finalLocation = _response.GetFirstHeader(@"Location");
                        }
                    }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response);
                            break;
                        }
                        case System.Net.HttpStatusCode.NoContent:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onNoContent(_response);
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisImportData" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters for Redis import operation.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisImportData_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IImportRDBParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>Gets all Redis caches in the specified subscription.</summary>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisList(string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2018-03-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/providers/Microsoft.Cache/Redis"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisList_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Gets all Redis caches in the specified subscription.</summary>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisList(string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2017-10-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/providers/Microsoft.Cache/Redis"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisList_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Lists all Redis caches in a resource group.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisListByResourceGroup(string resourceGroupName, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2018-03-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisListByResourceGroup_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Lists all Redis caches in a resource group.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisListByResourceGroup(string resourceGroupName, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2017-10-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisListByResourceGroup_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisListByResourceGroup" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisListByResourceGroup_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20180301.RedisListResult.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>Actual wire call for <see cref="RedisListByResourceGroup" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisListByResourceGroup_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisListResult.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisListByResourceGroup" /> method. Call this like the actual call, but you will get
        /// validation events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisListByResourceGroup_Validate(string resourceGroupName, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>
        /// Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisListKeys(string resourceGroupName, string name, string apiVersion, string subscriptionId, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisAccessKeys>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/listKeys"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Post, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisListKeys_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisListKeys" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisListKeys_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisAccessKeys>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisAccessKeys.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisListKeys" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisListKeys_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Gets any upgrade notifications for a Redis cache.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="history">how many minutes in past to look for upgrade notifications</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisListUpgradeNotifications(string resourceGroupName, string name, string apiVersion, string subscriptionId, double history, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.INotificationListResponse>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/listUpgradeNotifications"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        + "&"
                        + "history=" + System.Uri.EscapeDataString(history.ToString())
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Get, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisListUpgradeNotifications_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisListUpgradeNotifications" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisListUpgradeNotifications_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.INotificationListResponse>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.NotificationListResponse.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisListUpgradeNotifications" /> method. Call this like the actual call, but you will
        /// get validation events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="history">how many minutes in past to look for upgrade notifications</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisListUpgradeNotifications_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, double history, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisList" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisList_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisListResult.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>Actual wire call for <see cref="RedisList" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisList_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisListResult>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20180301.RedisListResult.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisList" /> method. Call this like the actual call, but you will get validation events
        /// back.
        /// </summary>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisList_Validate(string subscriptionId, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
            }
        }
        /// <summary>
        /// Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Specifies which key to regenerate.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisRegenerateKey(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisRegenerateKeyParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisAccessKeys>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + "/regenerateKey"
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Post, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisRegenerateKey_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisRegenerateKey" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisRegenerateKey_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisAccessKeys>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisAccessKeys.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisRegenerateKey" /> method. Call this like the actual call, but you will get validation
        /// events back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="apiVersion">Client Api Version.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Specifies which key to regenerate.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisRegenerateKey_Validate(string resourceGroupName, string name, string apiVersion, string subscriptionId, Sample.API.Models.Api20171001.IRedisRegenerateKeyParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(apiVersion),apiVersion);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>Update an existing Redis cache.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Update Redis operation.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisUpdate(string resourceGroupName, string name, string subscriptionId, Sample.API.Models.Api20180301.IRedisUpdateParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2018-03-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Patch, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisUpdate_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Update an existing Redis cache.</summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Update Redis operation.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        public async System.Threading.Tasks.Task RedisUpdate(string resourceGroupName, string name, string subscriptionId, Sample.API.Models.Api20171001.IRedisUpdateParameters body, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            string apiVersion = @"2017-10-01";
            // Constant Parameters
            using( NoSynchronizationContext )
            {
                // construct URL
                var _url = new System.Uri((
                        "https://management.azure.com//subscriptions/"
                        + System.Uri.EscapeDataString(subscriptionId)
                        + "/resourceGroups/"
                        + System.Uri.EscapeDataString(resourceGroupName)
                        + "/providers/Microsoft.Cache/Redis/"
                        + System.Uri.EscapeDataString(name)
                        + ""
                        + "?"
                        + "api-version=" + System.Uri.EscapeDataString(apiVersion)
                        ).TrimEnd('?','&'));

                await eventListener.Signal(Sample.API.Runtime.Events.URLCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                // generate request object
                var request =  new System.Net.Http.HttpRequestMessage(Sample.API.Runtime.Method.Patch, _url);
                await eventListener.Signal(Sample.API.Runtime.Events.RequestCreated, _url); if( eventListener.Token.IsCancellationRequested ) { return; }

                await eventListener.Signal(Sample.API.Runtime.Events.HeaderParametersAdded, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // set body content
                request.Content = new System.Net.Http.StringContent(null != body ? body.ToJson(null).ToString() : @"{}", System.Text.Encoding.UTF8);
                request.Content.Headers.ContentType = System.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/json");
                await eventListener.Signal(Sample.API.Runtime.Events.BodyContentSet, _url); if( eventListener.Token.IsCancellationRequested ) { return; }
                // make the call
                await this.RedisUpdate_Call(request,onOK,eventListener,sender);
            }
        }
        /// <summary>Actual wire call for <see cref="RedisUpdate" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisUpdate_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20180301.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20180301.RedisResource.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>Actual wire call for <see cref="RedisUpdate" /> method.</summary>
        /// <param name="request">the prepared HttpRequestMessage to send.</param>
        /// <param name="onOK">a delegate that is called when the remote service returns 200 (OK).</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <param name="sender">an instance of an Sample.API.Runtime.ISendAsync pipeline to use to make the request.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisUpdate_Call(System.Net.Http.HttpRequestMessage request, System.Func<System.Net.Http.HttpResponseMessage, System.Threading.Tasks.Task<Sample.API.Models.Api20171001.IRedisResource>, System.Threading.Tasks.Task> onOK, Sample.API.Runtime.IEventListener eventListener, Sample.API.Runtime.ISendAsync sender)
        {
            using( NoSynchronizationContext )
            {
                System.Net.Http.HttpResponseMessage _response = null;
                try
                {
                    await eventListener.Signal(Sample.API.Runtime.Events.BeforeCall, request); if( eventListener.Token.IsCancellationRequested ) { return; }
                    _response = await sender.SendAsync(request, eventListener);
                    await eventListener.Signal(Sample.API.Runtime.Events.ResponseCreated, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                    var _contentType = _response.Content.Headers.ContentType?.MediaType;
                    switch ( _response.StatusCode )
                    {
                        case System.Net.HttpStatusCode.OK:
                        {
                            await eventListener.Signal(Sample.API.Runtime.Events.BeforeResponseDispatch, _response); if( eventListener.Token.IsCancellationRequested ) { return; }
                            await onOK(_response,_response.Content.ReadAsStringAsync().ContinueWith( body => Sample.API.Models.Api20171001.RedisResource.FromJson(Sample.API.Runtime.Json.JsonNode.Parse(body.Result)) ));
                            break;
                        }
                        default:
                        {
                            throw new Sample.API.Runtime.UndeclaredResponseException(_response.StatusCode);
                        }
                    }
                }
                finally
                {
                    // finally statements
                    await eventListener.Signal(Sample.API.Runtime.Events.Finally, request, _response);
                    _response?.Dispose();
                    request?.Dispose();
                }
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisUpdate" /> method. Call this like the actual call, but you will get validation events
        /// back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Update Redis operation.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisUpdate_Validate(string resourceGroupName, string name, string subscriptionId, Sample.API.Models.Api20180301.IRedisUpdateParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
        /// <summary>
        /// Validation method for <see cref="RedisUpdate" /> method. Call this like the actual call, but you will get validation events
        /// back.
        /// </summary>
        /// <param name="resourceGroupName">The name of the resource group.</param>
        /// <param name="name">The name of the Redis cache.</param>
        /// <param name="subscriptionId">Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The
        /// subscription ID forms part of the URI for every service call.</param>
        /// <param name="body">Parameters supplied to the Update Redis operation.</param>
        /// <param name="eventListener">an <see cref="Sample.API.Runtime.IEventListener" /> instance that will receive events.</param>
        /// <returns>
        /// A <see cref="System.Threading.Tasks.Task" /> that will be complete when handling of the response is completed.
        /// </returns>
        internal async System.Threading.Tasks.Task RedisUpdate_Validate(string resourceGroupName, string name, string subscriptionId, Sample.API.Models.Api20171001.IRedisUpdateParameters body, Sample.API.Runtime.IEventListener eventListener)
        {
            using( NoSynchronizationContext )
            {
                await eventListener.AssertNotNull(nameof(resourceGroupName),resourceGroupName);
                await eventListener.AssertNotNull(nameof(name),name);
                await eventListener.AssertNotNull(nameof(subscriptionId),subscriptionId);
                await eventListener.AssertNotNull(nameof(body), body);
                await eventListener.AssertObjectIsValid(nameof(body), body);
            }
        }
    }
}