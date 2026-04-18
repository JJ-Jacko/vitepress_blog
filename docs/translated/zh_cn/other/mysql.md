---
title: MySQL
date: 2024/10/30 11:27
location: 东莞
tags: 原创 MySQL 数据库
---

## 前言
[社区版下载](https://dev.mysql.com/downloads/)

## Linux (Debian / Ubuntu)
### 安装
```sh
sudo apt install ./mysql-apt-config.deb
```
```sh
sudo apt install mysql-community-server
```
在 TUI 中进行初始化
### 卸载
```sh
sudo apt remove mysql-community-server
```

## Windows
### 安装
配置文件
```ini [mysql-5.7.44\my.ini]
[client]
port=3306
default-character-set=utf8

[mysqld]
# 安装目录
basedir="C:\Program Files\mysql-5.7.44\"
# 数据目录
datadir="C:\Program Files\mysql-5.7.44\data\"
port=3306
character-set-server=utf8
```
初始化 记录密码
```sh
mysqld --initialize --console
```
安装
```sh
mysqld -install
```
开启服务
```powershell
Start-Service -Name mysql
```
登录
```sh
mysql -u root -p
```
改密码
```sh
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '02014';
```
### 卸载
终止服务
```powershell
Stop-Process mysql
```
移除服务
```sh
mysqld -remove MySQL
```
清除注册表
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventLog\Application\MySQL'
```
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\EventLog\Application\MySQL'
```
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Application\MySQL'
```
