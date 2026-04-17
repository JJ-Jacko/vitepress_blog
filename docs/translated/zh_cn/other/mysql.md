---
title: MySQL
date: 2024/10/30 11:27
location: 东莞
tags: 原创 MySQL 数据库
---

## 安装
### Windows
[下载 MySQL Community Server(for Windows)](https://dev.mysql.com/downloads/mysql/)

配置文件
```ini [mysql-5.7.44\my.ini]
[client]
port=3306
default-character-set=utf8

[mysqld]
# Installed dir
basedir="C:\Program Files\mysql-5.7.44\"
# Data dir
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
```sh
net start mysql
```
登录
```sh
mysql -u root -p
```
改密码
```sh
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '02014';
```

## 卸载
### Windows
终止服务
```sh
Stop-Process mysql
```
移除服务
```sh
mysqld -remove MySQL
```
清除注册表
```sh
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventLog\Application\MySQL'
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\EventLog\Application\MySQL'
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Application\MySQL'
```
