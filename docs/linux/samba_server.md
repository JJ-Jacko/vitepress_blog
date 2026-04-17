---
title: Samba Server
date: 2024/06/04 23:26
location: Dongguan
tags: Original Linux
---

## Install
```sh
apt install samba
```

## Configure user
Add user
```sh
sudo useradd tommy
```
Add user to samba group and set password
```sh
sudo smbpasswd -a tommy
```

## Configure sharing directory
Create sharing directory
```sh
sudo mkdir /home/tommy
```
Assign the permissions of reading, writing and running
```sh
sudo chmod 777 /home/tommy
```

## Configuration file
Append at the end
```properties [/etc/samba/smb.conf]
[tommy] // [!code ++]
comment = tommy         # Name // [!code ++]
path = /home/tommy      # Path // [!code ++]
public = yes            # Permit user accessing // [!code ++]
writable = yes          # Permit writing // [!code ++]
browseable = yes        # Permit browsering the directory // [!code ++]
available = yes         # Permit using this shared resources // [!code ++]
directory mask = 0775   # Permit make directory // [!code ++]
create mask = 0775      # Permit create file (Readable & Runable) // [!code ++]
valid users = tommy     # Allowed user // [!code ++]
write list = tommy      # Allowed writing user // [!code ++]
```

## Connect in client
### Windows
`\\<IP>\tommy`
### Linux
TODO
