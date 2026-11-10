## 更換套件來源
備份
```sh
sudo cp /etc/yum.repos.d /etc/yum.repos.d.bak
```
取代
```sh
sudo wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```
清除
```sh
yum clean all
```
建立快取
```sh
yum makecache
```
查看清單
```sh
yum repolist
```

## 本地 Yum 套件來源
必要工具
```sh
yum install createrepo yum-utils httpd net-tools reposync
```
下載
```sh
reposync --repoid=centos-openstack-train -p OpenStack-train/
```
