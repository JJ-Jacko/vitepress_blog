---
title: 更新 kernel 及 headers
date: 2024/02/20 14:30
location: 东莞
tags: 原创 Linux
---

## 查看当前状态
正在使用的 kernel
```sh
uname -r
```
已安装 kernel
```sh
apt list --installed |grep linux-image
```
已安装 headers
```sh
apt list --installed |grep linux-headers
```

## 搜索
kernel
```sh
apt search linux-image
```
headers
```sh
apt search linux-headers
```

## 安装
```sh
sudo apt install [kernel 或 headers 软件包名]
```

## 卸载
```sh
sudo apt remove [kernel 或 headers 软件包名]
```
```sh
sudo apt autoremove
```
重构引导
```sh
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
重启
```sh
sudo reboot
```
