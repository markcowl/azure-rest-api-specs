<#
.Synopsis
Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.
.Description
Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/new-azrediscachekey
#>
function New-AzRedisCacheKey {
[OutputType('Sample.API.Models.Api20171001.IRedisAccessKeys')]
[CmdletBinding(DefaultParameterSetName='KeyResourceGroupNameNameApiVersionKeyTypeExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
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

    [Parameter(ParameterSetName='KeyResourceGroupNameNameApiVersionKeyType', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='KeyResourceGroupNameNameApiVersionSubscriptionIdKeyType', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IRedisRegenerateKeyParameters]
    # Specifies which Redis access keys to reset.
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

    [Parameter(ParameterSetName='KeyResourceGroupNameNameApiVersionKeyTypeExpanded', Mandatory)]
    [Parameter(ParameterSetName='KeyResourceGroupNameNameApiVersionSubscriptionIdKeyTypeExpanded', Mandatory)]
    [ArgumentCompleter([Sample.API.Support.RedisKeyType])]
    [Sample.API.Support.RedisKeyType]
    # The Redis access key to regenerate.
    ${KeyType},

    [Parameter(ParameterSetName='KeyResourceGroupNameNameApiVersionSubscriptionIdKeyType', Mandatory)]
    [Parameter(ParameterSetName='KeyResourceGroupNameNameApiVersionSubscriptionIdKeyTypeExpanded', Mandatory)]
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
            KeyResourceGroupNameNameApiVersionKeyType = 'Az.Redis.private\New-AzRedisCacheKey_KeyResourceGroupNameNameApiVersionKeyType';
            KeyResourceGroupNameNameApiVersionKeyTypeExpanded = 'Az.Redis.private\New-AzRedisCacheKey_KeyResourceGroupNameNameApiVersionKeyTypeExpanded';
            KeyResourceGroupNameNameApiVersionSubscriptionIdKeyType = 'Az.Redis.private\New-AzRedisCacheKey_KeyResourceGroupNameNameApiVersionSubscriptionIdKeyType';
            KeyResourceGroupNameNameApiVersionSubscriptionIdKeyTypeExpanded = 'Az.Redis.private\New-AzRedisCacheKey_KeyResourceGroupNameNameApiVersionSubscriptionIdKeyTypeExpanded';
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
