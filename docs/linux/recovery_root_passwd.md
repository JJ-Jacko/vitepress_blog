---
title: Recovery root password
date: 2024/05/12 12:20
location: Dongguan
tags: Original Linux
---

## Enter grub edit mode
Press and hold arrow key <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> to stay on this screen

Press <kbd>E</kbd> key to edit
![](/assets/linux/recovery_root_passwd/grub.png)

## Temporary editing startup mode
Append `init=/bin/sh`
![](/assets/linux/recovery_root_passwd/grub_edit.png)

## Enter shell
Mount root directory
```sh
mount -o remount,rw /
```
Change the root user's password
```sh
passwd
```
Create file `/.autorelabel`
```sh
touch /.autorelabel
```
Execute init
```sh
exec /sbin/init
```
![](/assets/linux/recovery_root_passwd/shell.png)

## Waiting for the system to restart
![](/assets/linux/recovery_root_passwd/reboot.png)
