<#
.Synopsis
Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
.Description
Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/new-azrediscache
#>
function New-AzRedisCache {
[OutputType('Sample.API.Models.Api20171001.IRedisResource')]
[CmdletBinding(DefaultParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
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
    # The name of the Redis cache.
    ${Name},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZones', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZones', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IRedisCreateParameters]
    # Parameters supplied to the Create Redis operation.
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

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc')]
    [System.Management.Automation.SwitchParameter]
    # Specifies whether the non-ssl Redis server port (6379) is enabled.
    ${EnableNonSslPort},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc', Mandatory)]
    [System.String]
    # The geo-location where the resource lives
    ${Location},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc')]
    [System.Collections.Hashtable]
    # All Redis Settings. Few possible keys: rdb-backup-enabled,rdb-storage-connection-string,rdb-backup-frequency,maxmemory-delta,maxmemory-policy,notify-keyspace-events,maxmemory-samples,slowlog-log-slower-than,slowlog-max-len,list-max-ziplist-entries,list-max-ziplist-value,hash-max-ziplist-entries,hash-max-ziplist-value,set-max-intset-entries,zset-max-ziplist-entries,zset-max-ziplist-value etc.
    ${RedisConfiguration},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc')]
    [System.String]
    # Static IP address. Required when deploying a Redis cache inside an existing Azure Virtual Network.
    ${RedisCreatePropertiesStaticIP},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc')]
    [System.String]
    # The full resource ID of a subnet in a virtual network to deploy the Redis cache in. Example format: /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/Microsoft.{Network|ClassicNetwork}/VirtualNetworks/vnet1/subnets/subnet1
    ${RedisCreatePropertiesSubnetId},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc')]
    [System.Int32]
    # The number of shards to be created on a Premium Cluster Cache.
    ${ShardCount},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc', Mandatory)]
    [System.Int32]
    # The size of the Redis cache to deploy. Valid values: for C (Basic/Standard) family (0, 1, 2, 3, 4, 5, 6), for P (Premium) family (1, 2, 3, 4).
    ${SkuCapacity},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc', Mandatory)]
    [ArgumentCompleter([Sample.API.Support.SkuFamily])]
    [Sample.API.Support.SkuFamily]
    # The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
    ${SkuFamily},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc', Mandatory)]
    [ArgumentCompleter([Sample.API.Support.SkuName])]
    [Sample.API.Support.SkuName]
    # The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
    ${SkuName},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc')]
    [System.Collections.Hashtable]
    # Resource tags.
    ${Tag},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc')]
    [System.Collections.Hashtable]
    # A dictionary of tenant settings
    ${TenantSettings},

    [Parameter(ParameterSetName='ResourceGroupNameNameLocationPropertiesTagsZonesExpanded')]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc')]
    [System.String[]]
    # A list of availability zones denoting where the resource needs to come from.
    ${Zones},

    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZones', Mandatory)]
    [Parameter(ParameterSetName='ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc', Mandatory)]
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
            ResourceGroupNameNameLocationPropertiesTagsZones = 'Az.Redis.private\New-AzRedisCache_ResourceGroupNameNameLocationPropertiesTagsZones';
            ResourceGroupNameNameLocationPropertiesTagsZonesExpanded = 'Az.Redis.private\New-AzRedisCache_ResourceGroupNameNameLocationPropertiesTagsZonesExpanded';
            ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZones = 'Az.Redis.private\New-AzRedisCache_ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZones';
            ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc = 'Az.Redis.private\New-AzRedisCache_ResourceGroupNameNameSubscriptionIdLocationPropertiesTagsZonesEtc';
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
