---
title: Debian 清理
date: 2026/04/18 12:42
location: 东莞
tags: 原创 Linux
---

## 清理孤儿包
```sh
sudo apt autoremove --purge
```

## 清理残留
```sh
sudo apt purge $(dpkg -l | awk '/^rc/ {print $2}')
```
    
## 列出非仓库的包
```sh
apt list --installed | grep '\[installed,local\]'
```

## 列出非该 Debian 版本的包
```sh
apt list --installed | grep -v stable | grep installed
```
