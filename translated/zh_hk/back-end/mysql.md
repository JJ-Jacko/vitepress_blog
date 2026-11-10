MySQL 喺後端領域係一款好出名嘅資料庫。
呢個章節基於知名 Bilibili 創作者韓順平嘅
[《零基礎一週學會 MySQL》](https://www.bilibili.com/video/BV1H64y1U7GJ)

## 前言
[社群版下載](https://dev.mysql.com/downloads/)

## Linux (Debian / Ubuntu)
### 安裝
```sh
sudo apt install ./mysql-apt-config.deb
```
```sh
sudo apt update
```
```sh
sudo apt install mysql-community-server
```
喺 TUI 入面進行初始化
### 解除安裝
```sh
sudo apt remove mysql-community-server
```

## Windows
### 安裝
設定檔
```ini [mysql-5.7.44\my.ini]
[client]
port=3306
default-character-set=utf8

[mysqld]
# 安裝目錄
basedir="C:\Program Files\mysql-5.7.44\"
# 資料目錄
datadir="C:\Program Files\mysql-5.7.44\data\"
port=3306
character-set-server=utf8
```
初始化 記錄密碼
```sh
mysqld --initialize --console
```
安裝
```sh
mysqld -install
```
開啟服務
```powershell
Start-Service -Name mysql
```
登入
```sh
mysql -u root -p
```
改密碼
```sh
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '02014';
```
### 解除安裝
終止服務
```powershell
Stop-Process mysql
```
移除服務
```sh
mysqld -remove MySQL
```
清除登錄檔
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\EventLog\Application\MySQL'
```
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\ControlSet002\Services\EventLog\Application\MySQL'
```
```powershell
Remove-Item -Path 'Registry::HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Application\MySQL'
```
