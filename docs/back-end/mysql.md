---
title: MySQL
date: 2024/10/30 11:27
location: Dongguan
tags: Learn MySQL Database
---

MySQL is a widely-used database in back-end world.
This category is based on the practical [*Learn MySQL from scratch in one week*](https://www.bilibili.com/video/BV1H64y1U7GJ) by Han Shunping,
a well-known Bilibili creator.

## Introduction
[Community Edition Download](https://dev.mysql.com/downloads/)

## Linux (Debian / Ubuntu)
### Installation
```sh
sudo apt install ./mysql-apt-config.deb
```
```sh
sudo apt install mysql-community-server
```
Initialize in TUI
### Uninstallation
```sh
sudo apt remove mysql-community-server
```

## Windows
### Installation
Configuration file
```ini [mysql-5.7.44\my.ini]
[client]
port=3306
default-character-set=utf8

[mysqld]
# Installation directory
basedir="C:\Program Files\mysql-5.7.44\"
# Data directory
datadir="C:\Program Files\mysql-5.7.44\data\"
port=3306
character-set-server=utf8
```
Initialize and record password
```sh
mysqld --initialize --console
```
Installation
```sh
mysqld -install
```
Start the service
```powershell
Start-Service -Name mysql
```
Login
```sh
mysql -u root -p
```
Change password
```sh
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '02014';
```
### Uninstallation
Stop the service
```powershell
Stop-Process mysql
```
Remove the service
```sh
mysqld -remove MySQL
```
Clear the registry
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventLog\Application\MySQL'
```
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\EventLog\Application\MySQL'
```
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Application\MySQL'
```
