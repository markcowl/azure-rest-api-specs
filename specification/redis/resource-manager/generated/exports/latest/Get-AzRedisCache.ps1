<#
.Synopsis
Gets all Redis caches in the specified subscription.
.Description
Gets all Redis caches in the specified subscription.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/get-azrediscache
#>
function Get-AzRedisCache {
[OutputType('Sample.API.Models.Api20180301.IRedisResource')]
[CmdletBinding(DefaultParameterSetName='Etc')]
param(
    [Parameter(DontShow)]
    [System.Management.Automation.SwitchParameter]
    # Wait for .NET debugger to attach
    ${Break},

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

    [Parameter(ParameterSetName='ResourceGroupNameNameEtcEtcEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdEtcEtcEtc', Mandatory)]
    [System.String]
    # The name of the Redis cache.
    ${Name},

    [Parameter(ParameterSetName='ResourceGroupNameNameEtcEtcEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdEtcEtcEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupResourceGroupNameEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupResourceGroupNameSubscriptionIdEtc', Mandatory)]
    [System.String]
    # The name of the resource group.
    ${ResourceGroupName},

    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdEtcEtcEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupResourceGroupNameSubscriptionIdEtc', Mandatory)]
    [Parameter(ParameterSetName='SubscriptionIdEtc', Mandatory)]
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
            Etc = 'Az.Redis.private\Get-AzRedisCache_Etc';
            ResourceGroupNameNameEtcEtcEtc = 'Az.Redis.private\Get-AzRedisCache_ResourceGroupNameNameEtcEtcEtc';
            ResourceGroupNameNameSubscriptionIdEtcEtcEtc = 'Az.Redis.private\Get-AzRedisCache_ResourceGroupNameNameSubscriptionIdEtcEtcEtc';
            ResourceGroupResourceGroupNameEtc = 'Az.Redis.private\Get-AzRedisCache_ResourceGroupResourceGroupNameEtc';
            ResourceGroupResourceGroupNameSubscriptionIdEtc = 'Az.Redis.private\Get-AzRedisCache_ResourceGroupResourceGroupNameSubscriptionIdEtc';
            SubscriptionIdEtc = 'Az.Redis.private\Get-AzRedisCache_SubscriptionIdEtc';
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
