<#
.Synopsis
Export data from the redis cache to blobs in a container.
.Description
Export data from the redis cache to blobs in a container.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/export-azrediscachedata
#>
function Export-AzRedisCacheData {
[OutputType('System.Boolean')]
[CmdletBinding(DefaultParameterSetName='DataResourceGroupNameNameApiVersionFormatContainerPrefixExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
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

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionFormatContainerPrefix', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainer', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IExportRDBParameters]
    # Parameters for Redis export operation.
    ${Parameters},

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

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionFormatContainerPrefixExpanded', Mandatory)]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainerEtc', Mandatory)]
    [System.String]
    # Container name to export to.
    ${Container},

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionFormatContainerPrefixExpanded')]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainerEtc')]
    [System.String]
    # File format.
    ${Format},

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionFormatContainerPrefixExpanded', Mandatory)]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainerEtc', Mandatory)]
    [System.String]
    # Prefix to use for exported files.
    ${Prefix},

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainer', Mandatory)]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainerEtc', Mandatory)]
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
            DataResourceGroupNameNameApiVersionFormatContainerPrefix = 'Az.Redis.private\Export-AzRedisCacheData_DataResourceGroupNameNameApiVersionFormatContainerPrefix';
            DataResourceGroupNameNameApiVersionFormatContainerPrefixExpanded = 'Az.Redis.private\Export-AzRedisCacheData_DataResourceGroupNameNameApiVersionFormatContainerPrefixExpanded';
            DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainer = 'Az.Redis.private\Export-AzRedisCacheData_DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainer';
            DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainerEtc = 'Az.Redis.private\Export-AzRedisCacheData_DataResourceGroupNameNameApiVersionSubscriptionIdFormatContainerEtc';
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
