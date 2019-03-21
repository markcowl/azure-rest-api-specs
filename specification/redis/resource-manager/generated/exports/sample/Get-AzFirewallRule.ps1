<#
.Synopsis
Gets all firewall rules in the specified redis cache.
.Description
Gets all firewall rules in the specified redis cache.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/get-azfirewallrule
#>
function Get-AzFirewallRule {
[OutputType('Sample.API.Models.Api20171001.IRedisFirewallRule')]
[CmdletBinding(DefaultParameterSetName='RedisResourceApiVersionResourceGroupNameCacheName')]
param(
    [Parameter(DontShow)]
    [System.Management.Automation.SwitchParameter]
    # Wait for .NET debugger to attach
    ${Break},

    [Parameter(Mandatory)]
    [System.String]
    # The name of the Redis cache.
    ${CacheName},

    [Parameter()]
    [Alias('AzureRMContext', 'AzureCredential')]
    [ValidateNotNull()]
    [System.Management.Automation.PSObject]
    # The credentials, account, tenant, and subscription used for communication with Azure.
    ${DefaultProfile},

    [Parameter(DontShow)]
    [ValidateNotNull()]
    [Sample.API.Runtime.SendAsyncStep[]]
    # SendAsync Pipeline Steps to be appended to the front of the pipeline
    ${HttpPipelineAppend},

    [Parameter(DontShow)]
    [ValidateNotNull()]
    [Sample.API.Runtime.SendAsyncStep[]]
    # SendAsync Pipeline Steps to be prepended to the front of the pipeline
    ${HttpPipelinePrepend},

    [Parameter(DontShow)]
    [System.Uri]
    # The URI for the proxy server to use
    ${Proxy},

    [Parameter(DontShow)]
    [ValidateNotNull()]
    [System.Management.Automation.PSCredential]
    # Credentials for a proxy server to use for the remote call
    ${ProxyCredential},

    [Parameter(DontShow)]
    [System.Management.Automation.SwitchParameter]
    # Use the default credentials for the proxy
    ${ProxyUseDefaultCredentials},

    [Parameter(Mandatory)]
    [System.String]
    # The name of the resource group.
    ${ResourceGroupName},

    [Parameter(ParameterSetName='RedisResourceApiVersionSubscriptionIdResourceGroupNameCacheName', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionId', Mandatory)]
    [System.String]
    # Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    ${SubscriptionId},

    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersion', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionId', Mandatory)]
    [System.String]
    # The name of the firewall rule.
    ${RuleName}
)

begin {
    try {
        $outBuffer = $null
        if ($PSBoundParameters.TryGetValue('OutBuffer', [ref]$outBuffer)) {
            $PSBoundParameters['OutBuffer'] = 1
        }
        $parameterSet = $PsCmdlet.ParameterSetName
        $mapping = @{
            RedisResourceApiVersionResourceGroupNameCacheName = 'Az.Redis.private\Get-AzFirewallRule_RedisResourceApiVersionResourceGroupNameCacheName';
            RedisResourceApiVersionSubscriptionIdResourceGroupNameCacheName = 'Az.Redis.private\Get-AzFirewallRule_RedisResourceApiVersionSubscriptionIdResourceGroupNameCacheName';
            ResourceGroupNameCacheNameRuleNameApiVersion = 'Az.Redis.private\Get-AzFirewallRule_ResourceGroupNameCacheNameRuleNameApiVersion';
            ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionId = 'Az.Redis.private\Get-AzFirewallRule_ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionId';
        }
        $wrappedCmd = $ExecutionContext.InvokeCommand.GetCommand("$($mapping["$parameterSet"])", [System.Management.Automation.CommandTypes]::Cmdlet)
        $scriptCmd = {& $wrappedCmd @PSBoundParameters}
        $steppablePipeline = $scriptCmd.GetSteppablePipeline($myInvocation.CommandOrigin)
        $steppablePipeline.Begin($PSCmdlet)
    } catch {
        throw
    }
}

process {
    try {
        $steppablePipeline.Process($_)
    } catch {
        throw
    }
}

end {
    try {
        $steppablePipeline.End()
    } catch {
        throw
    }
}
}
