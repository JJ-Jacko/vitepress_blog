# Samba Server
* 📅 `2024/06/04 23:26` 
* 📍 `Dongguan`
* 🏷️ `Original` `Linux`

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
[tommy]
comment = tommy         # Name
path = /home/tommy      # Path
public = yes            # Permit user accessing
writable = yes          # Permit writing
browseable = yes        # Permit browsering the directory
available = yes         # Permit using this shared resources
directory mask = 0775   # Permit make directory
create mask = 0775      # Permit create file (Readable & Runable)
valid users = tommy     # Allowed user
write list = tommy      # Allowed writing user
```

## Connect in client
### Windows
`\\<IP>\tommy`
### Linux
TODO
