## 安裝
```sh
apt install samba
```

## 設定用戶
新增用戶
```sh
sudo useradd tommy
```
將用戶加入 samba 群組並設定密碼
```sh
sudo smbpasswd -a tommy
```

## 設定共享目錄
建立共享目錄
```sh
sudo mkdir /home/tommy
```
賦予讀取、寫入及執行權限
```sh
sudo chmod 777 /home/tommy
```

## 設定檔
```properties [/etc/samba/smb.conf]
[tommy] // [!code ++]
comment = tommy         # 名稱 // [!code ++]
path = /home/tommy      # 路徑 // [!code ++]
public = yes            # 允許用戶存取 // [!code ++]
writable = yes          # 允許寫入檔案 // [!code ++]
browseable = yes        # 允許瀏覽此共享目錄 // [!code ++]
available = yes         # 允許使用此共享資源 // [!code ++]
directory mask = 0775   # 允許建立目錄 // [!code ++]
create mask = 0775      # 允許建立檔案（可讀寫及執行） // [!code ++]
valid users = tommy     # 允許存取嘅用戶 // [!code ++]
write list = tommy      # 允許寫入嘅用戶 // [!code ++]
```

## 用戶端連線
### Windows
`\\<IP>\tommy`
### Linux
TODO
