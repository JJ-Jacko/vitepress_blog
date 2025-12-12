# SSH
* 📅 `2025/12/12 13:46` 
* 📍 `东莞`
* 🏷️ `原创` `Linux` `ssh`

## 配置文件
* Windows
`%USEPROFILE%\.ssh\config`
* Linux
`~/.ssh/config`
```conf
Host Home
    Hostname 192.168.6.111
    Port 22
    User jacko
```

## 免密登录
### 客户端
生成公钥`id_ecdsa.pub`、私钥`id_ecdsa`
```sh
ssh-keygen -t ecdsa
```
### 服务端
追加客户端生成的文件 `id_ecdsa.pub` 到服务端文件 `~/.ssh/authorized_keys`
