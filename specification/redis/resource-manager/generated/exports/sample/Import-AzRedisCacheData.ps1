<#
.Synopsis
Import data into Redis cache.
.Description
Import data into Redis cache.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/import-azrediscachedata
#>
function Import-AzRedisCacheData {
[OutputType('System.Boolean')]
[CmdletBinding(DefaultParameterSetName='DataResourceGroupNameNameApiVersionFormatFilesExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
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

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionFormatFiles', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatFiles', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.IImportRDBParameters]
    # Parameters for Redis import operation.
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

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionFormatFilesExpanded', Mandatory)]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatFilesExpanded', Mandatory)]
    [System.String[]]
    # files to import.
    ${Files},

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionFormatFilesExpanded')]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatFilesExpanded')]
    [System.String]
    # File format.
    ${Format},

    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatFiles', Mandatory)]
    [Parameter(ParameterSetName='DataResourceGroupNameNameApiVersionSubscriptionIdFormatFilesExpanded', Mandatory)]
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
            DataResourceGroupNameNameApiVersionFormatFiles = 'Az.Redis.private\Import-AzRedisCacheData_DataResourceGroupNameNameApiVersionFormatFiles';
            DataResourceGroupNameNameApiVersionFormatFilesExpanded = 'Az.Redis.private\Import-AzRedisCacheData_DataResourceGroupNameNameApiVersionFormatFilesExpanded';
            DataResourceGroupNameNameApiVersionSubscriptionIdFormatFiles = 'Az.Redis.private\Import-AzRedisCacheData_DataResourceGroupNameNameApiVersionSubscriptionIdFormatFiles';
            DataResourceGroupNameNameApiVersionSubscriptionIdFormatFilesExpanded = 'Az.Redis.private\Import-AzRedisCacheData_DataResourceGroupNameNameApiVersionSubscriptionIdFormatFilesExpanded';
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
