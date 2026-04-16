# Lossless Legacy to UEFI Migration
* 📅 `2022/02/12 01:12` 
* 📍 `Dongguan`
* 🏷️ `Original` `Windows`

## Enter BIOS and switch to UEFI mode
## Create UEFI-style partitions with DiskGenius
### Create a 300 MB ESP/MSR partition
### Assign this partition as drive A
## Migrate boot files to UEFI layout
```sh
mkdir -p A:\EFI\Microsoft\Boot
```
```sh
cp C:\Windows\Boot\EFI\* A:\EFI\Microsoft\Boot
```
```sh
cp A:\EFI\Microsoft\Boot\bootmgfw.efi A:\EFI\boot\bootX64.efi
```
## Edit boot entries with Bootice
![](/assets/other/legacy_to_uefi/settings.png)
### BCD Edit > New BCD > `A:\EFI\Microsoft\Boot` > Smart Edit Mode
### Add > New > Windows 7 / 8 / 8.1 boot entry
### Boot device (boot disk, boot partition)
* Device type: partition
* Boot disk:
* Boot partition:
### Settings
* Menu title: Windows
* Boot file: `\Windows\system32\winload.efi`
