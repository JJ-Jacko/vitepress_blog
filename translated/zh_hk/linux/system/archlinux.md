## 分區
初始化磁碟
```sh
cfdisk /dev/sda
```
* 磁碟類型：GPT(GUID)
* 分區：
    | 容量 | 類型 |
    | :-: | :-: |
    | 300 M | EFI |
    | 10 G  | Linux swap |
    |  | Linux filesystem |

格式化
```sh
mkfs.fat -F 32 /dev/sda1
```
```sh
mkfs.ext4 /dev/sda3
```
```sh
mkswap /dev/sda2
```
掛載
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

## 安裝
### 基礎作業系統
```sh
pacman -Syy
```
```sh
pacman -S archlinux-keyring
```
```sh
pacstrap /mnt linux linux-firmware linux-headers base base-devel bash-completion man-db man-pages networkmanager firewalld efibootmgr efivar cups grub vim git wget curl htop
```
### Microcode *
* AMD CPU
```sh
pacstrap /mnt amd-ucode
```
* Intel CPU
```sh
pacstrap /mnt intel-ucode
```
### KDE 桌面環境 *
```sh
pacstrap /mnt zsh txeinfo plasma sddm kde-accessibility-meta kde-graphics-meta kde-multimedia-meta kde-network-meta kde-sdk-meta kde-system-meta kde-utilities-meta freerdp pulseaudio-alsa mesa mesa-utils xorg noto-fonts noto-fonts-cjk noto-fonts-emoji firefox
```
### VM 配套工具 *
```sh
pacstrap /mnt open-vm-tools xf86-video-vmware
```
### 產生 fstab
```sh
genfstab -U /mnt >> /mnt/etc/fstab
```

## 系統本地化
### 進入
```sh
arch-chroot /mnt
```
### 時區
```sh
ln -sf /usr/share/zoneinfo/Asia/Shanghi /etc/localtime
```
```sh
hwclock --systohc
```
### 語言
移除 `/etc/locale.gen` 入面 `#en_US` 同 `#zh_CN` 嘅註解標記

產生本地化檔案
```sh
locale-gen
```
加入系統語言
```sh
echo LANG=en_US.UTF-8 >> /etc/locale.conf
```
### host
設定 hostname
```sh
echo jacko-arch >> /etc/hostname
```
寫入基本嘅 host 設定
```[/etc/hosts]
127.0.0.1		localhost
::1				localhost
127.0.0.1		jacko-arch.localdomain	jacko-arch
```
### `grub`
安裝
```sh
grub-install /dev/sda
```
產生
```sh
grub-mkconfig -o /boot/grub/grub.cfg
```
### 啟用必需嘅服務
網絡
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
VM 環境 *
```sh
systemctl enable vmtoolsd
```
### 用戶
#### Root 用戶
密碼
```sh
passwd
```
#### 一般用戶
新增
```sh
useradd -m -G wheel jacko
```
密碼
```sh
passwd jacko
```

## 額外設定
### Arch Linux CN repository
Arch Linux 中文社區 repository 係由 Arch Linux 中文社區維護嘅非官方 user repository，包含中文用戶常用嘅軟件、工具、字體同主題包
```properties [/etc/pacman.conf]
[archlinuxcn] // [!code ++]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch # url // [!code ++]
```
更新套件來源
```sh
pacman -Syy
```
```sh
pacman -Syu
```
安裝 key
```sh
pacman -S archlinuxcn-keyring
```
安裝套件來源嘅 build tools
```sh
pacman -S archlinuxcn-mirrorlist-git
```
### `yay`
安裝
```sh
sudo pacman -S yay
```
設定套件來源
```sh
yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save
```
取得套件來源
```sh
yay -Syy
```
### 增強 KDE 環境字體
```sh
pacman -S ttf-hannom noto-fonts noto-fonts-extra noto-fonts-emoji noto-fonts-cjk adobe-source-code-pro-fonts adobe-source-sans-fonts adobe-source-serif-fonts adobe-source-han-sans-cn-fonts adobe-source-han-sans-hk-fonts adobe-source-han-sans-tw-fonts adobe-source-han-serif-cn-fonts wqy-zenhei wqy-microhei ttf-dejavu ttf-droid ttf-hack ttf-font-awesome otf-font-awesome ttf-lato ttf-linux-libertine ttf-opensans ttf-roboto ttf-ubuntu-font-family
```
### Nvidia 驅動程式
移除註釋
```properties [/etc/pacman.conf]
[multilib]
Include = /etc/pacman.d/mirrorlist
```
安裝
```sh
sudo pacman -S nvidia nvidia-prime nvidia-settings nvidia-utils opencl-nvidia lib32-nvidia-utils lib32-opencl-nvidia
```
### Plymouth 開機動畫
安裝
```sh
sudo yay -S plymouth
```
加入 `splash` 參數
```properties [/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="splash" // [!code ++]
```
更新 `grub`
::: code-group
```sh [General]
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
```sh [Debain / Ubuntu]
sudo update-grub2
```
:::
列出 theme `/usr/share/pylmouth/themes/`
```sh
plymouth-set-default-theme -l
```
設定 theme
```sh
plymouth-set-default-theme -R moonlight
```
