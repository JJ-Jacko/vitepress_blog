---
title: OpenList
date: 2026/09/05 19:33
location: Dongguan
tags: Original Linux
---

[Inspiration](/linux/service_configuration)

[OpenList](https://github.com/OpenListTeam/openlist) is a open source project
about personal files hosting.

## Configure service
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

## Run
Reload
```sh
sudo systemctl daemon-reload
```
Set to start automatically on boot
```sh
sudo systemctl enable openlist
```
Start
```sh
sudo systemctl start openlist
```
