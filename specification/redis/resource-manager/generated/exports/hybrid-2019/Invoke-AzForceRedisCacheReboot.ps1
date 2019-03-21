<#
.Synopsis
Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.
.Description
Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/invoke-azforcerediscachereboot
#>
function Invoke-AzForceRedisCacheReboot {
[OutputType('System.String')]
[CmdletBinding(DefaultParameterSetName='RebootResourceGroupNameNameApiVersionRebootTypeShardIdExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
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

    [Parameter(Mandatory)]
    [System.String]
    # The name of the Redis cache.
    ${Name},

    [Parameter(ParameterSetName='RebootResourceGroupNameNameApiVersionRebootTypeShardId', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='RebootResourceGroupNameNameApiVersionSubscriptionIdRebootType', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IRedisRebootParameters]
    # Specifies which Redis node(s) to reboot.
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

    [Parameter(ParameterSetName='RebootResourceGroupNameNameApiVersionRebootTypeShardIdExpanded', Mandatory)]
    [Parameter(ParameterSetName='RebootResourceGroupNameNameApiVersionSubscriptionIdRebootTypeEtc', Mandatory)]
    [ArgumentCompleter([Sample.API.Support.RebootType])]
    [Sample.API.Support.RebootType]
    # Which Redis node(s) to reboot. Depending on this value data loss is possible.
    ${RebootType},

    [Parameter(ParameterSetName='RebootResourceGroupNameNameApiVersionRebootTypeShardIdExpanded')]
    [Parameter(ParameterSetName='RebootResourceGroupNameNameApiVersionSubscriptionIdRebootTypeEtc')]
    [System.Int32]
    # If clustering is enabled, the ID of the shard to be rebooted.
    ${ShardId},

    [Parameter(ParameterSetName='RebootResourceGroupNameNameApiVersionSubscriptionIdRebootType', Mandatory)]
    [Parameter(ParameterSetName='RebootResourceGroupNameNameApiVersionSubscriptionIdRebootTypeEtc', Mandatory)]
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
            RebootResourceGroupNameNameApiVersionRebootTypeShardId = 'Az.Redis.private\Invoke-AzForceRedisCacheReboot_RebootResourceGroupNameNameApiVersionRebootTypeShardId';
            RebootResourceGroupNameNameApiVersionRebootTypeShardIdExpanded = 'Az.Redis.private\Invoke-AzForceRedisCacheReboot_RebootResourceGroupNameNameApiVersionRebootTypeShardIdExpanded';
            RebootResourceGroupNameNameApiVersionSubscriptionIdRebootType = 'Az.Redis.private\Invoke-AzForceRedisCacheReboot_RebootResourceGroupNameNameApiVersionSubscriptionIdRebootType';
            RebootResourceGroupNameNameApiVersionSubscriptionIdRebootTypeEtc = 'Az.Redis.private\Invoke-AzForceRedisCacheReboot_RebootResourceGroupNameNameApiVersionSubscriptionIdRebootTypeEtc';
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
