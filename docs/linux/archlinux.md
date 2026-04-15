# Install Arch Linux
* 📅 `2023/01/19 15:40` 
* 📍 `Dongguan`
* 🏷️ `Original` `Linux`

## Partition
Initialize disk
```sh
cfdisk /dev/sda
```
* Disk type: GPT(GUID)
* Partition:
    | Size | Type |
    | :-: | :-: |
    | 300 M | EFI |
    | 10 G  | Linux swap |
    |  | Linux filesystem |

Format
```sh
mkfs.fat -F 32 /dev/sda1
```
```sh
mkfs.ext4 /dev/sda3
```
```sh
mkswap /dev/sda2
```
Mount
```sh
mount /dev/sda3 /mnt
```
```sh
mkdir -p /mnt/boot/efi
```
```sh
mount /dev/sda1 /mnt/boot/efi
```
```sh
swapon /dev/sda2
```

## Install
### Base Operating System
```sh
pacman -Syy
```
```sh
pacman -S archlinux-keyring
```
```sh
pacstrap /mnt linux linux-firmware linux-headers base base-devel bash-completion man-db man-pages networkmanager firewalld efibootmgr efivar cups grub vim git wget curl htop
```
### Ucode *
* AMD CPU
```sh
pacstrap /mnt amd-ucode
```
* Intel CPU
```sh
pacstrap /mnt intel-ucode
```
### KDE desktop envronment *
```sh
pacstrap /mnt zsh txeinfo plasma sddm kde-accessibility-meta kde-graphics-meta kde-multimedia-meta kde-network-meta kde-sdk-meta kde-system-meta kde-utilities-meta freerdp pulseaudio-alsa mesa mesa-utils xorg noto-fonts noto-fonts-cjk noto-fonts-emoji firefox
```
### Virtual machine tools *
```sh
pacstrap /mnt open-vm-tools xf86-video-vmware
```
### Generate fstab
```sh
genfstab -U /mnt >> /mnt/etc/fstab
```

## System localize
### Enter
```sh
arch-chroot /mnt
```
### Timezone
```sh
ln -sf /usr/share/zoneinfo/Asia/Shanghi /etc/localtime
```
```sh
hwclock --systohc
```
### Language
`/etc/locale.gen` remove code comments of `#en_US` & `#zh_CN`

Generate localize file
```sh
locale-gen
```
Add system language
```sh
echo LANG=en_US.UTF-8 >> /etc/locale.conf
```
### host
Set hostname
```sh
echo jacko-arch >> /etc/hostname
```
Write basic host configuration
```[/etc/hosts]
127.0.0.1		localhost
::1				localhost
127.0.0.1		jacko-arch.localdomain	jacko-arch
```
### `grub`
Install
```sh
grub-install /dev/sda
```
Generate
```sh
grub-mkconfig -o /boot/grub/grub.cfg
```
### Enable necessary services
Network
```sh
systemctl enable NetworkManager
```
Firewall
```sh
systemctl enable firewalld
```
KDE *
```sh
systemctl enable sddm
```
Virtual machine environment *
```sh
systemctl enable vmtoolsd
```
### User
#### Root user
Password
```sh
passwd
```
#### Basic user
New
```sh
useradd -m -G wheel jacko
```
password
```sh
passwd jacko
```

## Exta configuration
### Arch Linux CN repository
The Arch Linux Chinese Community repository is an unofficial user repository maintained by the Arch Linux Chinese community, containing commonly used software, tools, fonts, and theming packages for Chinese
```properties [/etc/pacman.conf]
[archlinuxcn] // [!code ++]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch # url // [!code ++]
```
Update sources
```sh
pacman -Syy
```
```sh
pacman -Syu
```
Install key
```sh
pacman -S archlinuxcn-keyring
```
Install build tools of sources
```sh
pacman -S archlinuxcn-mirrorlist-git
```
### `yay`
Install
```sh
sudo pacman -S yay
```
Configure sources
```sh
yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save
```
Get sources
```sh
yay -Syy
```
### KDE enviroment enhanced fonts
```sh
pacman -S ttf-hannom noto-fonts noto-fonts-extra noto-fonts-emoji noto-fonts-cjk adobe-source-code-pro-fonts adobe-source-sans-fonts adobe-source-serif-fonts adobe-source-han-sans-cn-fonts adobe-source-han-sans-hk-fonts adobe-source-han-sans-tw-fonts adobe-source-han-serif-cn-fonts wqy-zenhei wqy-microhei ttf-dejavu ttf-droid ttf-hack ttf-font-awesome otf-font-awesome ttf-lato ttf-linux-libertine ttf-opensans ttf-roboto ttf-ubuntu-font-family
```
### Nvidia drivers
Remove code comments
```properties [/etc/pacman.conf]
[multilib]
Include = /etc/pacman.d/mirrorlist
```
Install
```sh
sudo pacman -S nvidia nvidia-prime nvidia-settings nvidia-utils opencl-nvidia lib32-nvidia-utils lib32-opencl-nvidia
```
### plymouth boot animation
Install
```sh
sudo yay -S plymouth
```
Add this parameter `splash`
```properties [/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="splash" // [!code ++]
```
Update `grub`
::: code-group
```sh [General]
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
```sh [Debain / Ubuntu]
sudo update-grub2
```
:::
List themes `/usr/share/pylmouth/themes/`
```sh
plymouth-set-default-theme -l
```
Set theme
```sh
plymouth-set-default-theme -R moonlight
```
