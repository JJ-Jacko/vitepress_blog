## 設定檔
```ssh-config [~/.ssh/config]
Host Home
    Hostname 192.168.6.111
    Port 22
    User jacko
```

## 免密碼登入
### 用戶端
產生公鑰 `id_ecdsa.pub`、私鑰 `id_ecdsa`
```sh
ssh-keygen -t ecdsa
```
### 伺服器
將用戶端產生的 `id_ecdsa.pub` 檔案附加到伺服器的 `~/.ssh/authorized_keys` 檔案中
