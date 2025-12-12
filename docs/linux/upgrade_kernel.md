# 更新 kernel
* 📅 `2025/12/12 13:42` 
* 📍 `东莞`
* 🏷️ `原创` `Linux`

## 查看当前内核版本
```sh
uname -r
```
## 查看已安装内核
```sh
apt list --installed |grep linux-image
```
## 删除多余内核
```sh
sudo apt remove [内核软件包名]
```
```sh
sudo apt autoremove
```
## 重构引导
```sh
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
