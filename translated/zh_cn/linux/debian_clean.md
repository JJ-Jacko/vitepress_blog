---
title: Debian 清理
date: 2026/04/18 12:42
location: 东莞
tags: 原创 Linux
---

## 软件包 deb
### 清理孤儿包
```sh
sudo apt autoremove --purge
```
### 清理残留
```sh
sudo apt purge $(dpkg -l | awk '/^rc/ {print $2}')
```
### 列出非仓库的包
```sh
apt list --installed | grep '\[installed,local\]'
```
### 列出非该 Debian 版本的包
```sh
apt list --installed | grep -v stable | grep installed
```

## 日志 journalctl
### 查看日志占用空间
```sh
sudo journalctl --disk-usage
```
### 清理所有日志
```sh
sudo journalctl --vacuum-time=1s
```
