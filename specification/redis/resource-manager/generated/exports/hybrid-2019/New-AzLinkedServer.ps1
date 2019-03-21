<#
.Synopsis
Adds a linked server to the Redis cache (requires Premium SKU).
.Description
Adds a linked server to the Redis cache (requires Premium SKU).
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/new-azlinkedserver
#>
function New-AzLinkedServer {
[OutputType('Sample.API.Models.Api20171001.IRedisLinkedServerWithProperties')]
[CmdletBinding(DefaultParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionPropertiesExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
param(
    [Parameter()]
    [System.Management.Automation.SwitchParameter]
    # Run the command as a job
    ${AsJob},

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
    # The name of the Redis cache.
    ${Name},

    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionProperties', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionId', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IRedisLinkedServerCreateParameters]
    # Parameter required for creating a linked server to redis cache.
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

    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionPropertiesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtc', Mandatory)]
    [System.String]
    # Fully qualified resourceId of the linked redis cache.
    ${RedisLinkedServerCreatePropertiesLinkedRedisCacheId},

    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionPropertiesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtc', Mandatory)]
    [System.String]
    # Location of the linked redis cache.
    ${RedisLinkedServerCreatePropertiesLinkedRedisCacheLocation},

    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionPropertiesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtc', Mandatory)]
    [ArgumentCompleter([Sample.API.Support.ReplicationRole])]
    [Sample.API.Support.ReplicationRole]
    # Role of the linked server.
    ${RedisLinkedServerCreatePropertiesServerRole},

    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionId', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtc', Mandatory)]
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
            ResourceGroupNameNameLinkedServerNameApiVersionProperties = 'Az.Redis.private\New-AzLinkedServer_ResourceGroupNameNameLinkedServerNameApiVersionProperties';
            ResourceGroupNameNameLinkedServerNameApiVersionPropertiesExpanded = 'Az.Redis.private\New-AzLinkedServer_ResourceGroupNameNameLinkedServerNameApiVersionPropertiesExpanded';
            ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionId = 'Az.Redis.private\New-AzLinkedServer_ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionId';
            ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtc = 'Az.Redis.private\New-AzLinkedServer_ResourceGroupNameNameLinkedServerNameApiVersionSubscriptionIdEtc';
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
