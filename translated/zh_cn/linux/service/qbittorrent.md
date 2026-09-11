---
title: qBittorrent
date: 2026/09/05 19:50
location: 东莞
tags: 原创 Linux
---

[灵感来源](/translated/zh_cn/linux/service_configuration)

[qBittorrent 增强版](https://github.com/c0re100/qBittorrent-Enhanced-Edition) 是一个有关 p2p 下载软件的开源项目。


## 配置服务
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

## 运行
重载
```sh
sudo systemctl daemon-reload
```
设置开机自启动
```sh
sudo systemctl enable qbittorrent
```
启动
```sh
sudo systemctl start qbittorrent
```
