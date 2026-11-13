喺 Windows 開發 C 時，`Visual Studio` 係首選工具，但佢實在係一個好難應付嘅巨無霸。
呢一節會介紹 Linux 開源生態系統下嘅環境設定。
請先使用 WSL，或者透過虛擬機安裝 Linux 系統。

::: tip 小貼士
推薦選項
* [WSL](https://github.com/microsoft/WSL)
* 虛擬機 [VirtualBox](https://virtualbox.org)
* Linux 發行版 [Debian](https://debian.org)（比 Ubuntu 輕量，更新週期較慢，亦更加穩定）
:::

## 安裝必要套件
```sh
sudo apt install build-essential gdb
```
* `build-essential`: 包含 `gcc` `g++` 等基本建置工具
* `gdb`: VSCode C plugin 的除錯工具依賴

## VSCode plugin
* `C/C++`: C 語言支援
* `Remote - SSH`: 連接 Linux
