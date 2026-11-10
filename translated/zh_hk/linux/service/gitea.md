[靈感來源](/translated/zh_hk/linux/service/service_configuration)

[Gitea](https://github.com/go-gitea/gitea) 係一個開源項目，
提供類似 [Github](https://github.com) 嘅程式碼託管及 CI/CD 平台。
我哋平時都會將程式碼 repository 託管喺 Github，但有時亦想將程式碼保留喺本地。
如果使用 bare code repository，使用同管理都會比較複雜。
所以 Gitea 係一個唔錯嘅選擇。

## 設定用戶
同其他服務唔同，Gitea process 運行時需要或建議使用名為 `git` 嘅用戶。
而且要對 home directory 擁有完整存取權限及登入權限。
唔好設定密碼，否則會阻止真正用戶登入。
```sh
sudo useradd -m -s /bin/bash git
```

## 設定目錄
* 將 git 設為擁有者，並授予`讀取`、`寫入`及`執行`權限
* 其他用戶`沒有`任何權限
```sh
sudo chown -R git:git /opt/gitea
```
```sh
sudo chmod -R 750 /opt/gitea
```

## 設定 Gitea 程式檔案
* 從 Github release page 下載。
* 解壓縮檔案。
* 重新命名並移動到 `/opt/gitea/gitea`

## 設定服務
```ini [/etc/systemd/system/gitea.service]
[Unit]
Description=Gitea
After=network.target
Wants=network.target
Before=shutdown.target

[Service]
Type=simple
User=git
Group=git
WorkingDirectory=/opt/gitea
ExecStart=/opt/gitea/gitea web --work-path /opt/gitea

[Install]
WantedBy=multi-user.target
```

## 執行
重新載入
```sh
sudo systemctl daemon-reload
```
設定開機自動啟動
```sh
sudo systemctl enable gitea
```
啟動
```sh
sudo systemctl start gitea
```
