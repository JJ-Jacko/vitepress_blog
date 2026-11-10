Windows 上嘅 C 開發主要係喺 Microsoft 體系下嘅 `Visual Studio` 開發

比較「巨無霸」

呢度只示範 Linux 開源生態系統下嘅環境設定

請自行安裝 Linux 系統

::: tip 小貼士
推薦虛擬機 [VirtualBox](https://virtualbox.org)

推薦發行版 [Debian](https://debian.org) 比 Ubuntu 輕量，更新週期較慢亦更穩定
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
