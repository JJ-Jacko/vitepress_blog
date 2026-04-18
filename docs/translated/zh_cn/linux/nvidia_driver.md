---
title: 英伟达驱动
date: 2026/04/18 12:48
location: 东莞
tags: 原创 Linux 英伟达
---

## 启用非自由软件的仓库
确保 Conponents 包含 `non-free` 和 `non-free-firmware`
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

## 安装英伟达驱动
```sh
sudo apt install nvidia-driver firmware-misc-nonfree
```

## 手动刷新
在更新 Linux 内核和 headers 后可能需要手动刷新英伟达驱动。
为确保驱动版本号正确，请使用 <kbd>Tab</kbd> 键自动补全
```sh
sudo dkms install nvidia-current/550.163.01 -k $(uname -r)
```
