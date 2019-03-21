<#
.Synopsis
Checks that the redis cache name is valid and is not already in use.
.Description
Checks that the redis cache name is valid and is not already in use.
.Link
https://docs.microsoft.com/en-us/powershell/module/az.redis/test-azrediscachenameavailability
#>
function Test-AzRedisCacheNameAvailability {
[OutputType('System.Boolean')]
[CmdletBinding(DefaultParameterSetName='NameAvailabilityApiVersionNameTypeExpanded', SupportsShouldProcess, ConfirmImpact='Medium')]
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

    [Parameter(ParameterSetName='NameAvailabilityApiVersionNameType', Mandatory, ValueFromPipeline)]
    [Parameter(ParameterSetName='NameAvailabilityApiVersionSubscriptionIdNameType', Mandatory, ValueFromPipeline)]
    [Sample.API.Models.Api20171001.ICheckNameAvailabilityParameters]
    # Parameters body to pass for resource name availability check.
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

    [Parameter(ParameterSetName='NameAvailabilityApiVersionNameTypeExpanded', Mandatory)]
    [Parameter(ParameterSetName='NameAvailabilityApiVersionSubscriptionIdNameTypeExpanded', Mandatory)]
    [System.String]
    # Resource name.
    ${Name},

    [Parameter(ParameterSetName='NameAvailabilityApiVersionNameTypeExpanded', Mandatory)]
    [Parameter(ParameterSetName='NameAvailabilityApiVersionSubscriptionIdNameTypeExpanded', Mandatory)]
    [System.String]
    # Resource type. The only legal value of this property for checking redis cache name availability is 'Microsoft.Cache/redis'.
    ${Type},

    [Parameter(ParameterSetName='NameAvailabilityApiVersionSubscriptionIdNameType', Mandatory)]
    [Parameter(ParameterSetName='NameAvailabilityApiVersionSubscriptionIdNameTypeExpanded', Mandatory)]
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
            NameAvailabilityApiVersionNameType = 'Az.Redis.private\Test-AzRedisCacheNameAvailability_NameAvailabilityApiVersionNameType';
            NameAvailabilityApiVersionNameTypeExpanded = 'Az.Redis.private\Test-AzRedisCacheNameAvailability_NameAvailabilityApiVersionNameTypeExpanded';
            NameAvailabilityApiVersionSubscriptionIdNameType = 'Az.Redis.private\Test-AzRedisCacheNameAvailability_NameAvailabilityApiVersionSubscriptionIdNameType';
            NameAvailabilityApiVersionSubscriptionIdNameTypeExpanded = 'Az.Redis.private\Test-AzRedisCacheNameAvailability_NameAvailabilityApiVersionSubscriptionIdNameTypeExpanded';
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
