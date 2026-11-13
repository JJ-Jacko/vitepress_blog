在 Windows 上开发 C 时，`Visual Studio` 是首选工具，但它实在是个难以应付的庞然大物。
本节将介绍 Linux 开源生态下的环境搭建。
请先使用 WSL，或通过虚拟机安装 Linux 系统。

::: tip 小贴士
推荐选项
* [WSL](https://github.com/microsoft/WSL)
* 虚拟机 [VirtualBox](https://virtualbox.org)
* Linux 发行版 [Debian](https://debian.org)（比 Ubuntu 更轻量，更新周期更慢，也更稳定）
:::

## 安装必要的包
```sh
sudo apt install build-essential gdb
```
* `build-essential`: 包含 `gcc` `g++` 等基本构建工具
* `gdb`: 调试工具 VSCode 的 C 插件依赖

## VSCode 插件
* `C/C++`: C 语言支持
* `Remote - SSH`: 连接 Linux
