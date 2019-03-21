<#
.Synopsis
Gets the list of linked servers associated with this redis cache (requires Premium SKU).
.Description
Gets the list of linked servers associated with this redis cache (requires Premium SKU).
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/get-azlinkedserver
#>
function Get-AzLinkedServer {
[OutputType('Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties')]
[CmdletBinding(DefaultParameterSetName='ResourceGroupNameNameApiVersionEtcEtc')]
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
    # The name of the redis cache.
    ${Name},

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

    [Parameter(ParameterSetName='ResourceGroupNameNameApiVersionSubscriptionIdEtcEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtcEtcEtc', Mandatory)]
    [System.String]
    # Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    ${SubscriptionId},

    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionEtc', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtcEtcEtc', Mandatory)]
    [System.String]
    # The name of the linked server.
    ${LinkedServerName}
)

begin {
    try {
        $outBuffer = $null
        if ($PSBoundParameters.TryGetValue('OutBuffer', [ref]$outBuffer)) {
            $PSBoundParameters['OutBuffer'] = 1
        }
        $parameterSet = $PsCmdlet.ParameterSetName
        $mapping = @{
            ResourceGroupNameNameApiVersionEtcEtc = 'Az.Redis.private\Get-AzLinkedServer_ResourceGroupNameNameApiVersionEtcEtc';
            ResourceGroupNameNameApiVersionSubscriptionIdEtcEtc = 'Az.Redis.private\Get-AzLinkedServer_ResourceGroupNameNameApiVersionSubscriptionIdEtcEtc';
            ResourceGroupNameNameLinkedServerNameApiVersionEtc = 'Az.Redis.private\Get-AzLinkedServer_ResourceGroupNameNameLinkedServerNameApiVersionEtc';
            ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtcEtcEtc = 'Az.Redis.private\Get-AzLinkedServer_ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtcEtcEtc';
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
