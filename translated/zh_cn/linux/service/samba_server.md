---
title: Samba 服务器
date: 2024/06/04 23:26
location: 东莞
tags: 原创 Linux
---

## 安装
```sh
apt install samba
```

## 配置用户
添加用户
```sh
sudo useradd tommy
```
将用户添加到 samba 组并设置密码
```sh
sudo smbpasswd -a tommy
```

## 配置共享文件夹
创建共享目录
```sh
sudo mkdir /home/tommy
```
赋予读、写和跑权限
```sh
sudo chmod 777 /home/tommy
```

## 配置文件
```properties [/etc/samba/smb.conf]
[tommy] // [!code ++]
comment = tommy         # 名称 // [!code ++]
path = /home/tommy      # 路径 // [!code ++]
public = yes            # 允许用户访问 // [!code ++]
writable = yes          # 允许写入文件 // [!code ++]
browseable = yes        # 允许浏览该共享目录 // [!code ++]
available = yes         # 允许使用该共享资源 // [!code ++]
directory mask = 0775   # 允许创建目录 // [!code ++]
create mask = 0775      # 允许创建文件 可读写跑 // [!code ++]
valid users = tommy     # 允许访问的用户 // [!code ++]
write list = tommy      # 允许写入的用户 // [!code ++]
```

## 客户端连接
### Windows
`\\<IP>\tommy`
### Linux
TODO
