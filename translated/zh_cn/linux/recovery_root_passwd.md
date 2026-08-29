---
title: 恢复 root 密码
date: 2024/05/12 12:20
location: 东莞
tags: 原创 Linux
---

## 进入 grub 编辑模式
持续按方向键 <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> 停在此界面

按 <kbd>E</kbd> 键编辑
![](/assets/linux/recovery_root_passwd/grub.png)

## 临时编辑启动模式
追加 `init=/bin/sh`
![](/assets/linux/recovery_root_passwd/grub_edit.png)

## 进入 shell
挂载根目录
```sh
mount -o remount,rw /
```
改 root 用户的密码
```sh
passwd
```
创建 `/.autorelabel` 文件
```sh
touch /.autorelabel
```
执行 init
```sh
exec /sbin/init
```
![](/assets/linux/recovery_root_passwd/shell.png)

## 等待重启进系统
![](/assets/linux/recovery_root_passwd/reboot.png)
