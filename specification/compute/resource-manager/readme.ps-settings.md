# Multi-API support for AutoRest v3 generators

> see https://aka.ms/autorest

``` yaml
service-name: Compute
skip-model-cmdlets: true
directive: 
  - where: 
      verb: New
      noun: (.*)Object$
    remove: true
  - where:
      noun: VirtualMachineScaleSet(.*)
    set:
      noun: Vmss$1
  - where:
      noun: VirtualMachine(.*)
    set:
      noun: VM$1
  - where:
      noun: VM
      parameter-name: VmName
    set:
      parameter-name: Name
input-file:
- Microsoft.Compute/stable/2018-10-01/compute.json
- Microsoft.Compute/stable/2018-10-01/runCommands.json
- Microsoft.Compute/stable/2017-09-01/skus.json
- Microsoft.Compute/stable/2018-09-30/disk.json
- Microsoft.Compute/stable/2018-06-01/gallery.json
- Microsoft.ContainerService/stable/2017-01-31/containerService.json
```
