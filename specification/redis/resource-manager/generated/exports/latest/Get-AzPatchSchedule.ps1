<#
.Synopsis
Gets all patch schedules in the specified redis cache (there is only one).
.Description
Gets all patch schedules in the specified redis cache (there is only one).
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/get-azpatchschedule
#>
function Get-AzPatchSchedule {
[OutputType('Sample.API.Models.Api20171001.IRedisPatchSchedule')]
[CmdletBinding(DefaultParameterSetName='RedisResourceApiVersionResourceGroupNameCacheNameEtc')]
param(
    [Parameter(DontShow)]
    [System.Management.Automation.SwitchParameter]
    # Wait for .NET debugger to attach
    ${Break},

    [Parameter(ParameterSetName='RedisResourceApiVersionResourceGroupNameCacheNameEtc', Mandatory)]
    [Parameter(ParameterSetName='RedisResourceApiVersionSubscriptionIdResourceGroupNameCacheNameEtc', Mandatory)]
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

    [Parameter(ParameterSetName='RedisResourceApiVersionSubscriptionIdResourceGroupNameCacheNameEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionSubscriptionIdEtc', Mandatory)]
    [System.String]
    # Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    ${SubscriptionId},

    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionSubscriptionIdEtc', Mandatory)]
    [System.String]
    # The name of the redis cache.
    ${Name}
)

begin {
    try {
        $outBuffer = $null
        if ($PSBoundParameters.TryGetValue('OutBuffer', [ref]$outBuffer)) {
            $PSBoundParameters['OutBuffer'] = 1
        }
        $parameterSet = $PsCmdlet.ParameterSetName
        $mapping = @{
            RedisResourceApiVersionResourceGroupNameCacheNameEtc = 'Az.Redis.private\Get-AzPatchSchedule_RedisResourceApiVersionResourceGroupNameCacheNameEtc';
            RedisResourceApiVersionSubscriptionIdResourceGroupNameCacheNameEtc = 'Az.Redis.private\Get-AzPatchSchedule_RedisResourceApiVersionSubscriptionIdResourceGroupNameCacheNameEtc';
            ResourceGroupNameNameApiVersionEtc = 'Az.Redis.private\Get-AzPatchSchedule_ResourceGroupNameNameApiVersionEtc';
            ResourceGroupNameNameApiVersionSubscriptionIdEtc = 'Az.Redis.private\Get-AzPatchSchedule_ResourceGroupNameNameApiVersionSubscriptionIdEtc';
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
