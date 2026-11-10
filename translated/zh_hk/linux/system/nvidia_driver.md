## 啟用 non-free repository
確保 Components 包含 `non-free` 同 `non-free-firmware`
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

## 安裝 Nvidia 驅動程式
```sh
sudo apt install nvidia-driver firmware-misc-nonfree
```

## 手動 Refresh
更新 Linux kernel 同 headers 後，可能需要手動 refresh Nvidia 驅動程式。
為確保驅動程式版本正確，請用 <kbd>Tab</kbd> 鍵自動補全
```sh
sudo dkms install nvidia-current/550.163.01 -k $(uname -r)
```
