<#
.Synopsis
Deletes the linked server from a redis cache (requires Premium SKU).
.Description
Deletes the linked server from a redis cache (requires Premium SKU).
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/remove-azlinkedserver
#>
function Remove-AzLinkedServer {
[OutputType('System.Boolean')]
[CmdletBinding(DefaultParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersion', SupportsShouldProcess, ConfirmImpact='Medium')]
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
    # The name of the linked server that is being added to the Redis cache.
    ${LinkedServerName},

    [Parameter(Mandatory)]
    [System.String]
    # The name of the redis cache.
    ${Name},

    [Parameter()]
    [System.Management.Automation.SwitchParameter]
    # When specified, PassThru will force the cmdlet return a 'bool' given that there isn't a return type by default.
    ${PassThru},

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

    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtcEtc', Mandatory)]
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
            ResourceGroupNameNameLinkedServerNameApiVersion = 'Az.Redis.private\Remove-AzLinkedServer_ResourceGroupNameNameLinkedServerNameApiVersion';
            ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtcEtc = 'Az.Redis.private\Remove-AzLinkedServer_ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtcEtc';
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
