@{
# region definition
  RootModule = './Az.Redis.psm1'
  ModuleVersion = '1.0.0'
  CompatiblePSEditions = 'Core', 'Desktop'
  GUID = 'b74b3935-1636-4b7a-311c-a576d5af9861'
  Author = 'Microsoft Corporation'
  CompanyName = 'Microsoft Corporation'
  Copyright = 'Microsoft Corporation. All rights reserved.'
  Description = 'Microsoft Azure PowerShell: Redis cmdlets'
  PowerShellVersion = '5.1'
  DotNetFrameworkVersion = '4.7.2'
  RequiredAssemblies = './bin/Az.Redis.private.dll'
  FormatsToProcess = './Az.Redis.format.ps1xml'
# endregion

# region private data
  PrivateData = @{
    PSData = @{
      Tags = 'Azure', 'ResourceManager', 'ARM', 'Redis'
      LicenseUri = 'https://aka.ms/azps-license'
      ProjectUri = 'https://github.com/Azure/azure-powershell'
      ReleaseNotes = ''
      Profiles = 'sample', 'hybrid-2019', 'latest'
    }
  }
# endregion

}