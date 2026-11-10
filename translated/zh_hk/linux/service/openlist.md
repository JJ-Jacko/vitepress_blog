[靈感來源](/translated/zh_hk/linux/service/service_configuration)

[OpenList](https://github.com/OpenListTeam/openlist) 係一個用嚟託管個人檔案嘅開源項目。


## 設定服務
```ini [/etc/systemd/system/openlist.service]
[Unit]
Description=Openlist
After=network.target
Wants=network.target
Before=shutdown.target

[Service]
Type=simple
User=web_runner
WorkingDirectory=/opt/openlist
ExecStart=/opt/openlist/openlist server

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
sudo systemctl enable openlist
```
啟動
```sh
sudo systemctl start openlist
```
