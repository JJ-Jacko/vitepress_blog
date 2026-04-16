# Virtualbox Disk Free
* 📅 `2024/11/22 14:53` 
* 📍 `Dongguan`
* 🏷️ `Original` `VirtualBox` `VM`

## Zero out free space
### Windows
[Official sdelete link](https://docs.microsoft.com/en-us/sysinternals/downloads/sdelete)
```sh
sdelete -z C:\
```
### Linux
```sh
sudo dd if=/dev/zero of=/free bs=64M status=progress
sudo rm /free
```

## Compact virtual disk
```sh
VBoxManage modifyhd [virtual_disk_file_name] --compact
```
