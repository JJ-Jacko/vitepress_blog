# Samba 服务器
* 📅 `2024/06/04 23:26` 
* 📍 `东莞`
* 🏷️ `原创` `Linux`

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
末尾追加
```properties [/etc/samba/smb.conf]
[tommy]
comment = tommy         # 名称
path = /home/tommy      # 路径
public = yes            # 允许用户访问
writable = yes          # 允许写入文件
browseable = yes        # 允许浏览该共享目录
available = yes         # 允许使用该共享资源
directory mask = 0775   # 允许创建目录
create mask = 0775      # 允许创建文件 可读写跑
valid users = tommy     # 允许访问的用户
write list = tommy      # 允许写入的用户
```

## 客户端连接
### Windows
`\\<IP>\tommy`
### Linux
TODO
