## 閒置空間歸零
### Windows
[sdelete 官方連結](https://docs.microsoft.com/en-us/sysinternals/downloads/sdelete)
```sh
sdelete -z C:\
```
### Linux
```sh
sudo dd if=/dev/zero of=/free bs=64M status=progress
sudo rm /free
```

## 壓縮磁碟
```sh
VBoxManage modifyhd [虛擬磁碟檔案名稱] --compact
```
