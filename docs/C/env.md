# pip
* 📅 `2025/12/24 16:59` 
* 📍 `东莞`
* 🏷️ `原创` `C`

Windows 上的 C 开发主要是在微软体系下的 `Visual Studio` 下开发

比较“巨无霸”

这里仅演示 Linux 开源体系下的环境搭建

请自行安装 Linux 系统

推荐虚拟机 [VirtualBox](https://virtualbox.org)

推荐发行版 [Debian](https://debian.org) 轻量过 Ubuntu，更新节奏慢更稳定

## 安装必要的包
```sh
sudo apt install build-essential gdb
```
* `build-essential`: 包含 `gcc` `g++` 等基本构建工具
* `gdb`: 调试工具 VSCode 的 C 插件依赖

## VSCode 插件
* `C/C++`: C 语言支持
* `Remote - SSH`: 连接 Linux
