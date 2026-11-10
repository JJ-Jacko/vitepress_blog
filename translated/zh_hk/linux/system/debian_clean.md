## 軟件套件 deb
### 清理孤立套件
```sh
sudo apt autoremove --purge
```
### 清理殘留套件
```sh
sudo apt purge $(dpkg -l | awk '/^rc/ {print $2}')
```
### 列出非 repository 嘅套件
```sh
apt list --installed | grep '\[installed,local\]'
```
### 列出唔屬於目前 Debian 版本嘅套件
```sh
apt list --installed | grep -v stable | grep installed
```

## Log journalctl
### 查看 log 佔用嘅空間
```sh
sudo journalctl --disk-usage
```
### 清理所有 log
```sh
sudo journalctl --vacuum-time=1s
```
