---
title: VirtualBox 虚拟机磁盘释放空间
date: 2024/11/22 14:53
location: 东莞
tags: 原创 VirtualBox 虚拟机
---

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
