[靈感來源](/translated/zh_hk/linux/service/service_configuration)

[qBittorrent Enhanced Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition) 係一個關於 P2P 下載軟件嘅開源項目。


## 設定服務
```ini [/etc/systemd/system/qbittorrent.service]
[Unit]
Description=Qbittorrent
After=network.target
Wants=network.target
Before=shutdown.target

[Service]
Type=simple
User=web_runner
WorkingDirectory=/opt/qbittorrent
ExecStart=/opt/qbittorrent/qbittorrent-nox --profile=/opt/qbittorrent/data

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
sudo systemctl enable qbittorrent
```
啟動
```sh
sudo systemctl start qbittorrent
```
