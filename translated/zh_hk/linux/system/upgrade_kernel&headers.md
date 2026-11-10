## 查看目前狀態
用緊嘅 kernel
```sh
uname -r
```
已安裝嘅 kernel
```sh
apt list --installed |grep linux-image
```
已安裝嘅 headers
```sh
apt list --installed |grep linux-headers
```

## 搜尋
kernel
```sh
apt search linux-image
```
headers
```sh
apt search linux-headers
```

## 安裝
```sh
sudo apt install [kernel or headers packages name]
```

## 移除
```sh
sudo apt remove [kernel or headers packages name]
```
```sh
sudo apt autoremove
```
重建 bootloader
```sh
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
重新開機
```sh
sudo reboot
```
