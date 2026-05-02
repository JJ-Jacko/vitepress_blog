---
title: Linux 系统备份还原
date: 2026/04/25 17:13
location: 东莞
tags: 原创 Linux
---

## 备份
* `nvme0n1p3` 需备份安装了系统的固态硬盘分区
* `sda1` 用于存储镜像的机械硬盘分区
```txt{5,7} [分区展示]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   501M  0 part /boot/efi
├─nvme0n1p2 259:2    0    20G  0 part [SWAP]
└─nvme0n1p3 259:3    0  62.4G  0 part /
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part
```
备份前可以进行 [清理](/translated/zh_cn/linux/debian_clean) 以减小备份文件的体积
### 通过 Live CD 启动
### 挂载根分区 `nvme0n1p3` 和备份分区 `sda1`
```sh
mkdir -p /mnt/source
```
```sh
mkdir -p /mnt/backup
```
```sh
mount /dev/nvme0n1p3 /mnt/source
```
```sh
mount /dev/sda1 /mnt/backup
```
```txt{5,7} [挂载效果]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   501M  0 part
├─nvme0n1p2 259:2    0    20G  0 part
└─nvme0n1p3 259:3    0  62.4G  0 part /mnt/source
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part /mnt/backup
```
### 保存成备份文件
```sh
tar -cvpzf /mnt/backup/linux_root_2026-04-25.tar.gz \
    --one-file-system \
    -C /mnt/source .
```

## 还原
* `sda1` 用于存储镜像的机械硬盘分区
* `nvme0n1` 需还原系统的固态硬盘
```txt{3,4}
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part
nvme0n1     259:0    0 232.9G  0 disk
```
### 通过 Live CD 启动
### 挂载备份分区 `sda1`
```sh
mkdir -p /mnt/backup
```
```sh
mount /dev/sda1 /mnt/backup
```
```txt{3} [挂载效果]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part /mnt/backup
```
### 分区
```sh
parted /dev/nvme0n1
```
::: details (parted)
```sh
mklabel gpt
```
```sh
mkpart primary fat32 1MiB 513MiB
```
```sh
set 1 esp on
```
```sh
mkpart primary linux-swap 513MiB 20.5GiB
```
```sh
mkpart primary ext4 20.5GiB 100%
```
```sh
quit
```
:::
``` [分区效果]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:4    0   512M  0 part
├─nvme0n1p2 259:5    0    20G  0 part 
└─nvme0n1p3 259:6    0  212.4G 0 part
```
### 初始化分区
格式化 EFI 分区
```sh
mkfs.vfat -F 32 /dev/nvme0n1p1
```
格式化并激活 Swap
```sh
mkswap /dev/nvme0n1p2
```
```sh
swapon /dev/nvme0n1p2
```
格式化根分区
```sh
mkfs.ext4 /dev/nvme0n1p3
```
### 挂载系统目录 `/` `/boot/efi` 及内核目录
```sh
mkdir -p /mnt/newroot
```
```sh
mount /dev/nvme0n1p3 /mnt/newroot
```
```sh
mkdir -p /mnt/newroot/boot/efi
```
```sh
mount /dev/nvme0n1p1 /mnt/newroot/boot/efi
```
```txt{3-5} [挂载效果]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   512M  0 part /mnt/newroot/boot/efi
├─nvme0n1p2 259:2    0    20G  0 part [SWAP]
└─nvme0n1p3 259:3    0 212.4G  0 part /mnt/newroot
```
绑定系统内核虚拟目录
```sh
for i in /dev /dev/pts /proc /sys /run; do mount --bind $i /mnt/newroot$i; done
```
### 从文件还原分区
```sh
tar -xvpzf /mnt/backup/linux_root_2026-04-25.tar.gz \
    -C /mnt/newroot \
    --numeric-owner
```
### 获取 UUID
```sh
blkid -s UUID /dev/nvme0n1p1 /dev/nvme0n1p2 /dev/nvme0n1p3
```
```properties[OUTPUT]
/dev/nvme0n1p1: UUID="018A-E656"
/dev/nvme0n1p2: UUID="b09067e7-26ce-41fe-8853-8a4fbc5971a8"
/dev/nvme0n1p3: UUID="e3b69440-b726-4d72-ae36-80530643a572"
```
### 修复 fstab
设置为正确的新 UUID
```properties [/mnt/newroot/etc/fstab]
# <file system>                            <mount point>  <type>  <options>             <dump>  <pass>
UUID=e3b69440-b726-4d72-ae36-80530643a572  /              ext4    errors=remount-ro     0       1
UUID=018A-E656                             /boot/efi      vfat    umask=0077            0       2
UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8  none           swap    sw                    0       0
```
### 进入环境
```sh
chroot /mnt/newroot /bin/bash
```
### 修复休眠配置（可选）
[灵感来源](/translated/zh_cn/linux/hibernate)
```properties[/etc/initramfs-tools/conf.d/resume]
RESUME=UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8
```
```properties[/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="resume=UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8"
```
```sh
update-initramfs -u
```
### 修复引导
重新安装 GRUB
```sh
grub-install /dev/nvme0n1
```
重新生成配置
```sh
update-grub
```
### 重启
### 重新安装英伟达驱动（可选）
[灵感来源](/translated/zh_cn/linux/nvidia_driver)
```sh
sudo apt purge "nvidia-*" firmware-misc-nonfree
```
```sh
sudo apt autoremove
```
重启后重新安装
```sh
sudo apt install nvidia-driver firmware-misc-nonfree
```
