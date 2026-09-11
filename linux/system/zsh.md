---
title: zsh
date: 2024/08/31 00:25
location: Dongguan
tags: Original Linux
---


## Install
::: code-group
```sh [Arch]
sudo pacman -S zsh zsh-completions
```
```sh [Debian / Ubuntu]
sudo apt install zsh
```
:::

## Configuration
View the current shell
```sh
echo $SHELL
```
Change user's default shell
```sh
chsh -s /bin/zsh [用户名]
```
Install `oh-my-zsh`
```sh
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
## Plugin
Get code of plugin
```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
Add the corresponding plugin name
```sh [~/.zshrc]
plugins=(zsh-syntax-highlighting)
```
