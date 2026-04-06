# Setup Environment
* 📅 `2025/12/24 16:59` 
* 📍 `Dongguan`
* 🏷️ `Original` `C`

When it comes to C on Windows, `Visual Studio` is the go-to tool, but it is such a bloated monster to deal with.

This part will focus on setting up the enviroment within the Linux open-source ecosystem.

Please install Linux system first.

Recommended VM [VirtualBox](https://virtualbox.org)

Recommended release [Debian](https://debian.org) Lighter than Ubuntu, with a slower, more stable release cycle

## Install necessary packages
```sh
sudo apt install build-essential gdb
```
* `build-essential`: Include basic build tools such as `gcc` `g++`
* `gdb`: Dependence of VSCode debug tool C plugin

## VSCode plugin
* `C/C++`: C language support
* `Remote - SSH`: Connect Linux
