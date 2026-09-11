---
title: yum
date: 2024/06/05 21:06
location: 东莞
tags: 原创 Linux
---

## 换源
备份
```sh
sudo cp /etc/yum.repos.d /etc/yum.repos.d.bak
```
替换
```sh
sudo wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```
清除
```sh
yum clean all
```
更新缓存
```sh
yum makecache
```
显示列表
```sh
yum repolist
```

## 本地 yum 源
必要工具
```sh
yum install createrepo yum-utils httpd net-tools reposync
```
下载
```sh
reposync --repoid=centos-openstack-train -p OpenStack-train/
```
