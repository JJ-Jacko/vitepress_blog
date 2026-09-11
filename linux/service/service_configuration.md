---
title: Service Configuration
date: 2026/04/18 13:32
location: Dongguan
tags: Original Linux
---

## Configure users and groups
### Add service user `web_runner`
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    web_runner
```
### Add group `web_project_grp`
```sh
sudo groupadd web_project_grp
```
### Add service user `jacko` and running user `web_runner` to group web_project_grp
```sh
sudo usermod -aG web_project_grp jacko
```
```sh
sudo usermod -aG web_project_grp web_runner
```

## Configure code directory
### Clone code
```sh
sudo git -C /opt clone http://example.git
```
### Configure permissions
* Set web_project_grp as the group
* Set jacko as the owner with `read`, `write`, and `execute` permissions
* Set web_runner as a member with `read` and `execute` permissions
* Other users have `no` permissions
```sh
sudo chown -R jacko:web_project_grp web_project
```
```sh
sudo chmod -R 2750 web_project
```
If web_runner needs write permissions for specific subdirectories, configure them individually
```sh
sudo chown -R jacko:web_project_grp web_project/xxx
```
```sh
sudo chmod -R 2770 web_project/xxx
```

## Configure service
```ini [/etc/systemd/system/web_project.service]
[Unit]
Description=My Web Project

[Service]
Type=simple
User=web_runner
Group=web_project_grp
WorkingDirectory=/opt/web_project
ExecStart=/opt/web_project/.venv/bin/run-pdt

[Install]
WantedBy=multi-user.target
```
Reload
```sh
sudo systemctl daemon-reload
```
Run
```sh
sudo systemctl start web_project
```
