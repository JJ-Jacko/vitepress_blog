## 備份
* `nvme0n1p3` 需要備份嘅系統所在 SSD 分區
* `sda1` 用嚟儲存映像檔嘅 HDD 分區
```txt{5,7} [分區資訊]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   501M  0 part /boot/efi
├─nvme0n1p2 259:2    0    20G  0 part [SWAP]
└─nvme0n1p3 259:3    0  62.4G  0 part /
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part
```
備份前可以先進行 [清理](/translated/zh_hk/linux/system/debian_clean)，縮細備份檔嘅容量
### 使用 Live CD 開機
### 掛載根分區 `nvme0n1p3` 同備份分區 `sda1`
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
```txt{5,7} [掛載效果]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   501M  0 part
├─nvme0n1p2 259:2    0    20G  0 part
└─nvme0n1p3 259:3    0  62.4G  0 part /mnt/source
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part /mnt/backup
```
### 儲存成備份檔
```sh
tar -cvpzf /mnt/backup/linux_root_2026-04-25.tar.gz \
    --one-file-system \
    -C /mnt/source .
```

## 還原
* `sda1` 用嚟儲存映像檔嘅 HDD 分區
* `nvme0n1` 需要還原系統嘅 SSD
```txt{3,4}
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part
nvme0n1     259:0    0 232.9G  0 disk
```
### 使用 Live CD 開機
### 掛載備份分區 `sda1`
```sh
mkdir -p /mnt/backup
```
```sh
mount /dev/sda1 /mnt/backup
```
```txt{3} [掛載效果]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0   3.6T  0 disk
└─sda1        8:2    0     2T  0 part /mnt/backup
```
### 分區
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
``` [分區效果]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:4    0   512M  0 part
├─nvme0n1p2 259:5    0    20G  0 part 
└─nvme0n1p3 259:6    0  212.4G 0 part
```
### 初始化分區
格式化 EFI 分區
```sh
mkfs.vfat -F 32 /dev/nvme0n1p1
```
格式化並啟用 Swap 分區
```sh
mkswap /dev/nvme0n1p2
```
```sh
swapon /dev/nvme0n1p2
```
格式化根分區
```sh
mkfs.ext4 /dev/nvme0n1p3
```
### 掛載系統目錄 `/` `/boot/efi` 以及 kernel 目錄
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
```txt{3-5} [掛載效果]
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
nvme0n1     259:0    0 232.9G  0 disk
├─nvme0n1p1 259:1    0   512M  0 part /mnt/newroot/boot/efi
├─nvme0n1p2 259:2    0    20G  0 part [SWAP]
└─nvme0n1p3 259:3    0 212.4G  0 part /mnt/newroot
```
綁定系統 kernel 嘅虛擬目錄
```sh
for i in /dev /dev/pts /proc /sys /run; do mount --bind $i /mnt/newroot$i; done
```
### 從備份檔還原分區
```sh
tar -xvpzf /mnt/backup/linux_root_2026-04-25.tar.gz \
    -C /mnt/newroot \
    --numeric-owner
```
### 取得 UUID
```sh
blkid -s UUID /dev/nvme0n1p1 /dev/nvme0n1p2 /dev/nvme0n1p3
```
```properties[OUTPUT]
/dev/nvme0n1p1: UUID="018A-E656"
/dev/nvme0n1p2: UUID="b09067e7-26ce-41fe-8853-8a4fbc5971a8"
/dev/nvme0n1p3: UUID="e3b69440-b726-4d72-ae36-80530643a572"
```
### 修復 fstab
設定為正確嘅新 UUID
```properties [/mnt/newroot/etc/fstab]
# <file system>                            <mount point>  <type>  <options>             <dump>  <pass>
UUID=e3b69440-b726-4d72-ae36-80530643a572  /              ext4    errors=remount-ro     0       1
UUID=018A-E656                             /boot/efi      vfat    umask=0077            0       2
UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8  none           swap    sw                    0       0
```
### 進入環境
```sh
chroot /mnt/newroot /bin/bash
```
### 修復休眠設定（可選）
[參考資料](/translated/zh_hk/linux/system/hibernate)
```properties[/etc/initramfs-tools/conf.d/resume]
RESUME=UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8
```
```properties[/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="resume=UUID=b09067e7-26ce-41fe-8853-8a4fbc5971a8"
```
```sh
update-initramfs -u
```
### 修復 bootloader
重新安裝 GRUB
```sh
grub-install /dev/nvme0n1
```
重新產生設定
```sh
update-grub
```
### 重新開機
### 重新安裝 Nvidia 驅動程式（可選）
[參考資料](/translated/zh_hk/linux/system/nvidia_driver)
```sh
sudo apt purge "nvidia-*" firmware-misc-nonfree
```
```sh
sudo apt autoremove
```
重新開機後再安裝
```sh
sudo apt install nvidia-driver firmware-misc-nonfree
```
