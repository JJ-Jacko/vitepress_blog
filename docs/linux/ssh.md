# SSH
* 📅 `2024/05/12 11:49` 
* 📍 `Dongguan`
* 🏷️ `Original` `Linux` `ssh`

## Configuration file
```ssh-config [~/.ssh/config]
Host Home
    Hostname 192.168.6.111
    Port 22
    User jacko
```

## Passwordless login
### Client
Generate public key `id_ecdsa.pub`, private key `id_ecdsa`
```sh
ssh-keygen -t ecdsa
```
### Server
Append the client-generated file `id_ecdsa.pub` to the server file `~/.ssh/authorized_keys`
