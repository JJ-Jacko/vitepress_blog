---
title: OpenList
date: 2026/09/05 19:33
location: 东莞
tags: 原创 Linux
---

[灵感来源](/translated/zh_cn/linux/service_configuration)

[OpenList](https://github.com/OpenListTeam/openlist) 是一个有关个人文件托管的开源项目。


## 配置服务
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

## 运行
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
