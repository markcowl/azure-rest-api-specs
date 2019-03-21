<#
.Synopsis
Create or replace the patching schedule for Redis cache (requires Premium SKU).
.Description
Create or replace the patching schedule for Redis cache (requires Premium SKU).
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/set-azpatchschedule
#>
function Set-AzPatchSchedule {
[OutputType('Sample.API.Models.Api20171001.IRedisPatchSchedule')]
[CmdletBinding(DefaultParameterSetName='ResourceGroupNameNameApiVersionPropertiesEtc', SupportsShouldProcess, ConfirmImpact='Medium')]
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

    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionPropertiesEtc', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionSubscriptionIdPropertiesEtc', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IRedisPatchSchedule]
    # Response to put/get patch schedules for Redis cache.
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

    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionPropertiesExpandedEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionSubscriptionIdPropertiesExpandedEtc', Mandatory)]
    [Sample.API.Models.Api20171001.IScheduleEntry[]]
    # List of patch schedules for a Redis cache.
    ${ScheduleEntriesProperty},

    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionSubscriptionIdPropertiesEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionSubscriptionIdPropertiesExpandedEtc', Mandatory)]
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
            ResourceGroupNameNameApiVersionPropertiesEtc = 'Az.Redis.private\Set-AzPatchSchedule_ResourceGroupNameNameApiVersionPropertiesEtc';
            ResourceGroupNameNameApiVersionPropertiesExpandedEtc = 'Az.Redis.private\Set-AzPatchSchedule_ResourceGroupNameNameApiVersionPropertiesExpandedEtc';
            ResourceGroupNameNameApiVersionSubscriptionIdPropertiesEtc = 'Az.Redis.private\Set-AzPatchSchedule_ResourceGroupNameNameApiVersionSubscriptionIdPropertiesEtc';
            ResourceGroupNameNameApiVersionSubscriptionIdPropertiesExpandedEtc = 'Az.Redis.private\Set-AzPatchSchedule_ResourceGroupNameNameApiVersionSubscriptionIdPropertiesExpandedEtc';
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
