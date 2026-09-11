---
title: Gitea
date: 2026/08/29 17:05
location: Dongguan
tags: Original Linux git
---

[Inspiration](/linux/service_configuration)

[Gitea](https://github.com/go-gitea/gitea) is a open source project
about code hosting and CI/CD platform like [Github](https://github.com).
We also host our code repository to Github, but sometimes we want our code in local.
If we using bare code repository, the usage and the management is too complicated.
So Gitea is a good choice.

## Configure users
Unlikely other services, the running user of Gitea process needed or recommended the name `git`.
And having full access the home directory and login permission.
Do not set the password. That will block the login for real user.
```sh
sudo useradd -m -s /bin/bash git
```

## Configure directory
* Set git as the owner with `read`, `write`, and `execute` permissions
* Other users have `no` permissions
```sh
sudo chown -R git:git /opt/gitea
```
```sh
sudo chmod -R 750 /opt/gitea
```

## Configure Gitea program file
* Download from Github release page.
* Unzip the compressed file.
* Rename and remove to `/opt/gitea/gitea`

## Configure service
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

## Run
Reload
```sh
sudo systemctl daemon-reload
```
Set to start automatically on boot
```sh
sudo systemctl enable gitea
```
Start
```sh
sudo systemctl start gitea
```
