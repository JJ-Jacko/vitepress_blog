---
title: qBittorrent
date: 2026/09/05 19:50
location: Dongguan
tags: Original Linux
---

[Inspiration](/linux/service_configuration)

[qBittorrent Enhanced Edition](https://github.com/c0re100/qBittorrent-Enhanced-Edition) is a open source project
about p2p downloading software.

## Configure service
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

## Run
Reload
```sh
sudo systemctl daemon-reload
```
Set to start automatically on boot
```sh
sudo systemctl enable qbittorrent
```
Start
```sh
sudo systemctl start qbittorrent
```
