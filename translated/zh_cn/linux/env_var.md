---
title: 环境变量
date: 2022/07/28 22:13
location: 东莞
tags: 原创 Linux
---

## Linux
```sh [~/.bashrc ~/.zshrc]
export JAVA_HOME=/usr/local/java
export PATH=$PATH:$JAVA_HOME/bin
```
刷新启用
::: code-group
```sh [bash]
source ~/.bashrc
```
```sh [zsh]
source ~/.zshrc
```
:::