# Update kernel & headers
* 📅 `2024/02/20 14:30` 
* 📍 `Dongguan`
* 🏷️ `Original` `Linux`

## View current status
Kernel in use
```sh
uname -r
```
kernel installed
```sh
apt list --installed |grep linux-image
```
headers installed
```sh
apt list --installed |grep linux-headers
```

## Search
kernel
```sh
apt search linux-image
```
headers
```sh
apt search linux-headers
```

## Install
```sh
sudo apt install [kernel or headers packages name]
```

## Remove
```sh
sudo apt remove [kernel or headers packages name]
```
```sh
sudo apt autoremove
```
Refactoring the bootloader
```sh
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
Reboot
```sh
sudo reboot
```
