<#
.Synopsis
Create or update a redis cache firewall rule
.Description
Create or update a redis cache firewall rule
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/new-azfirewallrule
#>
function New-AzFirewallRule {
[OutputType('Sample.API.Models.Api20171001.IRedisFirewallRule')]
[CmdletBinding(DefaultParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionPropertiesExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
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

    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionProperties', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdProperties', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IRedisFirewallRuleCreateParameters]
    # Parameters required for creating a firewall rule on redis cache.
    ${Parameters},

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

    [Parameter(Mandatory)]
    [System.String]
    # The name of the firewall rule.
    ${RuleName},

    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionPropertiesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdPropertiesEtc', Mandatory)]
    [System.String]
    # highest IP address included in the range
    ${RedisFirewallRulePropertiesEndIP},

    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionPropertiesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdPropertiesEtc', Mandatory)]
    [System.String]
    # lowest IP address included in the range
    ${RedisFirewallRulePropertiesStartIP},

    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdProperties', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdPropertiesEtc', Mandatory)]
    [System.String]
    # Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    ${SubscriptionId}
)

begin {
    try {
        $outBuffer = $null
        if ($PSBoundParameters.TryGetValue('OutBuffer', [ref]$outBuffer)) {
            $PSBoundParameters['OutBuffer'] = 1
        }
        $parameterSet = $PsCmdlet.ParameterSetName
        $mapping = @{
            ResourceGroupNameCacheNameRuleNameApiVersionProperties = 'Az.Redis.private\New-AzFirewallRule_ResourceGroupNameCacheNameRuleNameApiVersionProperties';
            ResourceGroupNameCacheNameRuleNameApiVersionPropertiesExpanded = 'Az.Redis.private\New-AzFirewallRule_ResourceGroupNameCacheNameRuleNameApiVersionPropertiesExpanded';
            ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdProperties = 'Az.Redis.private\New-AzFirewallRule_ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdProperties';
            ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdPropertiesEtc = 'Az.Redis.private\New-AzFirewallRule_ResourceGroupNameCacheNameRuleNameApiVersionSubscriptionIdPropertiesEtc';
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
