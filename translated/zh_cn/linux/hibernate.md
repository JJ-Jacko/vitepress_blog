---
title: Linux 配置休眠
date: 2025/07/18 22:13
location: 深圳
tags: 原创 Linux
---

## 配置 swap
```
TODO
```

## 配置 grub
加上一下参数
```properties [/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="resume=UUID=a1b2c3d4-5678-90ab-cdef-1234567890ab"
```
```sh
update-grub
update-initramfs -u
```

## 配置 resume
```properties [/etc/initramfs-tools/conf.d/resume]
RESUME=UUID=a1b2c3d4-5678-90ab-cdef-1234567890ab
```
```sh
update-initramfs -u
```

## 配置 关机键为休眠（可选）
```properties [/etc/systemd/logind.conf]
HandlePowerKey=hibernate
```
```sh
systemctl restart systemd-logind
```
