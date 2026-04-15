# 安装 Arch Linux
* 📅 `2023/01/19 15:40` 
* 📍 `东莞`
* 🏷️ `原创` `Linux`

## 分区
初始化磁盘
```sh
cfdisk /dev/sda
```
* 磁盘类型: GPT(GUID)
* 分区:
    | 容量 | 类型 |
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
挂载
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

## 安装
### 基础操作系统
```sh
pacman -Syy
```
```sh
pacman -S archlinux-keyring
```
```sh
pacstrap /mnt linux linux-firmware linux-headers base base-devel bash-completion man-db man-pages networkmanager firewalld efibootmgr efivar cups grub vim git wget curl htop
```
### 微码 *
* AMD CPU
```sh
pacstrap /mnt amd-ucode
```
* Intel CPU
```sh
pacstrap /mnt intel-ucode
```
### KDE 桌面环境 *
```sh
pacstrap /mnt zsh txeinfo plasma sddm kde-accessibility-meta kde-graphics-meta kde-multimedia-meta kde-network-meta kde-sdk-meta kde-system-meta kde-utilities-meta freerdp pulseaudio-alsa mesa mesa-utils xorg noto-fonts noto-fonts-cjk noto-fonts-emoji firefox
```
### 虚拟机配套工具 *
```sh
pacstrap /mnt open-vm-tools xf86-video-vmware
```
### 生成 fstab
```sh
genfstab -U /mnt >> /mnt/etc/fstab
```

## 系统本地化
### 进入
```sh
arch-chroot /mnt
```
### 时区
```sh
ln -sf /usr/share/zoneinfo/Asia/Shanghi /etc/localtime
```
```sh
hwclock --systohc
```
### 语言
`/etc/locale.gen` 去掉 `#en_US` 和 `#zh_CN` 的注释

生成本地化文件
```sh
locale-gen
```
添加系统语言
```sh
echo LANG=en_US.UTF-8 >> /etc/locale.conf
```
### host
设置主机名
```sh
echo jacko-arch >> /etc/hostname
```
写入基本的 host 配置
```[/etc/hosts]
127.0.0.1		localhost
::1				localhost
127.0.0.1		jacko-arch.localdomain	jacko-arch
```
### `grub`
安装
```sh
grub-install /dev/sda
```
生成
```sh
grub-mkconfig -o /boot/grub/grub.cfg
```
### 启动必要服务
网络
```sh
systemctl enable NetworkManager
```
防火墙
```sh
systemctl enable firewalld
```
KDE *
```sh
systemctl enable sddm
```
虚拟机环境 *
```sh
systemctl enable vmtoolsd
```
### 用户
#### root
密码
```sh
passwd
```
#### 普通用户
新增
```sh
useradd -m -G wheel jacko
```
密码
```sh
passwd jacko
```

## 额外项目
### Arch Linux CN 存储库
Arch Linux 中文社区仓库是由 Arch Linux中文社区驱动的非官方用户仓库，包含中文用户常用软件、工具、字体/美化包等

追加
```properties [/etc/pacman.conf]
[archlinuxcn]
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```
更新源
```sh
pacman -Syy
```
```sh
pacman -Syu
```
安装 key
```sh
pacman -S archlinuxcn-keyring
```
安装源的构建工具
```sh
pacman -S archlinuxcn-mirrorlist-git
```
### `yay`
安装
```sh
sudo pacman -S yay
```
配置源
```sh
yay --aururl "https://aur.tuna.tsinghua.edu.cn" --save
```
获取源
```sh
yay -Syy
```
### KDE 环境增强字体
```sh
pacman -S ttf-hannom noto-fonts noto-fonts-extra noto-fonts-emoji noto-fonts-cjk adobe-source-code-pro-fonts adobe-source-sans-fonts adobe-source-serif-fonts adobe-source-han-sans-cn-fonts adobe-source-han-sans-hk-fonts adobe-source-han-sans-tw-fonts adobe-source-han-serif-cn-fonts wqy-zenhei wqy-microhei ttf-dejavu ttf-droid ttf-hack ttf-font-awesome otf-font-awesome ttf-lato ttf-linux-libertine ttf-opensans ttf-roboto ttf-ubuntu-font-family
```
### Nvidia 驱动
去除注释
```properties [/etc/pacman.conf]
[multilib]
Include = /etc/pacman.d/mirrorlist
```
安装
```sh
sudo pacman -S nvidia nvidia-prime nvidia-settings nvidia-utils opencl-nvidia lib32-nvidia-utils lib32-opencl-nvidia
```
### plymouth 开机动画
安装
```sh
sudo yay -S plymouth
```
该参数添加 `splash`
```properties [/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="splash"
```
更新 `grub`
::: code-group
```sh [通用]
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
```sh [Debain / Ubuntu]
sudo update-grub2
```
:::
列出主题 `/usr/share/pylmouth/themes/`
```sh
plymouth-set-default-theme -l
```
设置主题
```sh
plymouth-set-default-theme -R moonlight
```
