<#
.Synopsis
Update an existing Redis cache.
.Description
Update an existing Redis cache.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/update-azrediscache
#>
function Update-AzRedisCache {
[OutputType('Sample.API.Models.Api20171001.IRedisResource')]
[CmdletBinding(DefaultParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
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

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTags', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTags', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IRedisUpdateParameters]
    # Parameters supplied to the Update Redis operation.
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

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded')]
    [System.Management.Automation.SwitchParameter]
    # Specifies whether the non-ssl Redis server port (6379) is enabled.
    ${EnableNonSslPort},

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded')]
    [System.Collections.Hashtable]
    # All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
    ${RedisConfiguration},

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded')]
    [System.Int32]
    # The number of shards to be created on a Premium Cluster Cache.
    ${ShardCount},

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded', Mandatory)]
    [System.Int32]
    # The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
    ${SkuCapacity},

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded', Mandatory)]
    [ArgumentCompleter([Sample.API.Support.SkuFamily])]
    [Sample.API.Support.SkuFamily]
    # The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
    ${SkuFamily},

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded', Mandatory)]
    [ArgumentCompleter([Sample.API.Support.SkuName])]
    [Sample.API.Support.SkuName]
    # The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
    ${SkuName},

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded')]
    [System.Collections.Hashtable]
    # Resource tags.
    ${Tag},

    [Parameter(ParameterSetName='ResourceGroupNameNamePropertiesTagsExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded')]
    [System.Collections.Hashtable]
    # A dictionary of tenant settings
    ${TenantSettings},

    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTags', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded', Mandatory)]
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
            ResourceGroupNameNamePropertiesTags = 'Az.Redis.private\Update-AzRedisCache_ResourceGroupNameNamePropertiesTags';
            ResourceGroupNameNamePropertiesTagsExpanded = 'Az.Redis.private\Update-AzRedisCache_ResourceGroupNameNamePropertiesTagsExpanded';
            ResourceGroupNameNameSubscriptionIdPropertiesTags = 'Az.Redis.private\Update-AzRedisCache_ResourceGroupNameNameSubscriptionIdPropertiesTags';
            ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded = 'Az.Redis.private\Update-AzRedisCache_ResourceGroupNameNameSubscriptionIdPropertiesTagsExpanded';
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
