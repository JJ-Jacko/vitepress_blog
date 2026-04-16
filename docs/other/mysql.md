# MySQL
* 📅 `2024/10/30 11:27` 
* 📍 `Dongguan`
* 🏷️ `Original` `MySQL` `Database`

## Installation
### Windows
[Download MySQL Community Server (for Windows)](https://dev.mysql.com/downloads/mysql/)

Configuration file
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
Initialize and note down the temporary password
```sh
mysqld --initialize --console
```
Install
```sh
mysqld -install
```
Start service
```sh
net start mysql
```
Login
```sh
mysql -u root -p
```
Change password
```sh
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '02014';
```

## Uninstallation
### Windows
Stop service
```sh
Stop-Process mysql
```
Remove service
```sh
mysqld -remove MySQL
```
Clean registry entries
```sh
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventLog\Application\MySQL'
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\EventLog\Application\MySQL'
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Application\MySQL'
```
