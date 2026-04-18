---
title: Nvidia Driver
date: 2026/04/18 12:48
location: Dongguan
tags: Original Linux Nvidia
---

## Enable non-free repositories
Ensure that the Components include `non-free` and `non-free-firmware`
```ini{4,10,16,22} [/etc/apt/sources.list.d/debian.sources]
Types: deb
URIs: https://mirrors.tencent.com/debian
Suites: trixie trixie-updates trixie-backports
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb-src
URIs: https://mirrors.tencent.com/debian
Suites: trixie trixie-updates trixie-backports
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb
URIs: https://mirrors.tencent.com/debian-security
Suites: trixie-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb-src
URIs: https://mirrors.tencent.com/debian-security
Suites: trixie-security
Components: main contrib non-free non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
```

## Install Nvidia driver
```sh
sudo apt install nvidia-driver firmware-misc-nonfree
```

## Manual refresh
After updating the Linux kernel and headers, you may need to manually refresh the Nvidia driver.
To ensure the driver version is correct, use the <kbd>Tab</kbd> key for auto-completion
```sh
sudo dkms install nvidia-current/550.163.01 -k $(uname -r)
```
