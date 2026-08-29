---
title: yum
date: 2024/06/05 21:06
location: Dongguan
tags: Original Linux
---

## Change sources
Backup
```sh
sudo cp /etc/yum.repos.d /etc/yum.repos.d.bak
```
Replace
```sh
sudo wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```
Clean
```sh
yum clean all
```
Make cache
```sh
yum makecache
```
View list
```sh
yum repolist
```

## Local yum source
Necessary tools
```sh
yum install createrepo yum-utils httpd net-tools reposync
```
Download
```sh
reposync --repoid=centos-openstack-train -p OpenStack-train/
```
