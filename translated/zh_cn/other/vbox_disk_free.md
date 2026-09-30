## 闲置空间标零
### Windows
[sdelete 官方链接](https://docs.microsoft.com/en-us/sysinternals/downloads/sdelete)
```sh
sdelete -z C:\
```
### Linux
```sh
sudo dd if=/dev/zero of=/free bs=64M status=progress
sudo rm /free
```

## 压缩磁盘
```sh
VBoxManage modifyhd [虚拟磁盘文件名] --compact
```
