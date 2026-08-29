---
title: Linux System Backup & Restore
date: 2026/04/25 17:13
location: Dongguan
tags: Original Linux
---

## Backup
* `nvme0n1p3` The SSD partition installed system which needed to backup
* `sda1` The HDD partition which used to save image
```txt{5,7} [Partition Show]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   501M  0 part /boot/efi
├─nvme0n1p2 259:2    0    20G  0 part [SWAP]
└─nvme0n1p3 259:3    0  62.4G  0 part /
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part
```
[Clean](/linux/debian_clean) before backup to reduce the size of backup files
### Boot from Live CD
### Mount root partition `nvme0n1p3` and bakup partiion `sda1`
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
```txt{5,7} [Mount Effect]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   501M  0 part
├─nvme0n1p2 259:2    0    20G  0 part
└─nvme0n1p3 259:3    0  62.4G  0 part /mnt/source
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part /mnt/backup
```
### Save to backup file
```sh
tar -cvpzf /mnt/backup/linux_root_2026-04-25.tar.gz \
    --one-file-system \
    -C /mnt/source .
```

## Restore
* `sda1` The HDD partition which used to save image
* `nvme0n1` The SSD which needed to restore system
```txt{3,4}
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part
nvme0n1     259:0    0 232.9G  0 disk
```
### Boot from Live CD
### Mount backup partition `sda1`
```sh
mkdir -p /mnt/backup
```
```sh
mount /dev/sda1 /mnt/backup
```
```txt{3} [Mount Effect]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part /mnt/backup
```
### Partition
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
``` [Partition Effect]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:4    0   512M  0 part
├─nvme0n1p2 259:5    0    20G  0 part 
└─nvme0n1p3 259:6    0  212.4G 0 part
```
### Initialize partition
Format the EFI prtition
```sh
mkfs.vfat -F 32 /dev/nvme0n1p1
```
Format & active the Swap partition
```sh
mkswap /dev/nvme0n1p2
```
```sh
swapon /dev/nvme0n1p2
```
Format the root partition
```sh
mkfs.ext4 /dev/nvme0n1p3
```
### Mount system directory `/` `/boot/efi` & kernel directory
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
```txt{3-5} [Mount Effect]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   512M  0 part /mnt/newroot/boot/efi
├─nvme0n1p2 259:2    0    20G  0 part [SWAP]
└─nvme0n1p3 259:3    0 212.4G  0 part /mnt/newroot
```
Bind system kernel virtual directory
```sh
for i in /dev /dev/pts /proc /sys /run; do mount --bind $i /mnt/newroot$i; done
```
### Restore from the file
```sh
tar -xvpzf /mnt/backup/linux_root_2026-04-25.tar.gz \
    -C /mnt/newroot \
    --numeric-owner
```
### Get UUID
```sh
blkid -s UUID /dev/nvme0n1p1 /dev/nvme0n1p2 /dev/nvme0n1p3
```
```properties[OUTPUT]
/dev/nvme0n1p1: UUID="018A-E656"
/dev/nvme0n1p2: UUID="b09067e7-26ce-41fe-8853-8a4fbc5971a8"
/dev/nvme0n1p3: UUID="e3b69440-b726-4d72-ae36-80530643a572"
```
### Fix fstab
Set to the correct new UUID
```properties [/mnt/newroot/etc/fstab]
# <file system>                            <mount point>  <type>  <options>             <dump>  <pass>
UUID=e3b69440-b726-4d72-ae36-80530643a572  /              ext4    errors=remount-ro     0       1
UUID=018A-E656                             /boot/efi      vfat    umask=0077            0       2
UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8  none           swap    sw                    0       0
```
### Enter the environment
```sh
chroot /mnt/newroot /bin/bash
```
### Fix hibernation configuration (Optional)
[Inspiration](/linux/hibernate)
```properties[/etc/initramfs-tools/conf.d/resume]
RESUME=UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8
```
```properties[/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="resume=UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8"
```
```sh
update-initramfs -u
```
### Fix bootloader
Reinstall GRUB
```sh
grub-install /dev/nvme0n1
```
Regenerate configration
```sh
update-grub
```
### Reboot
### Reinstall nvidia driver (Optional)
[Inspiration](/linux/nvidia_driver)
```sh
sudo apt purge "nvidia-*" firmware-misc-nonfree
```
```sh
sudo apt autoremove
```
Reinstall after reboot
```sh
sudo apt install nvidia-driver firmware-misc-nonfree
```
