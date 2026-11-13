When it comes to C on Windows, `Visual Studio` is the go-to tool, but it is such a bloated monster to deal with.
This part will focus on setting up the enviroment within the Linux open-source ecosystem.
Please use WSL or install Linux system using virtual machine first.

::: tip
Recommended options
* [WSL](https://github.com/microsoft/WSL)
* VM [VirtualBox](https://virtualbox.org)
* Linux distribution [Debian](https://debian.org) (Lighter than Ubuntu, with a slower, more stable release cycle)
:::

## Install necessary packages
```sh
sudo apt install build-essential gdb
```
* `build-essential`: Include basic build tools such as `gcc` `g++`
* `gdb`: Dependence of VSCode debug tool C plugin

## VSCode plugin
* `C/C++`: C language support
* `Remote - SSH`: Connect Linux
