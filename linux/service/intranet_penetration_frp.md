---
title: Intranet Penetration frp
date: 2026/04/24 12:22
location: Dongguan
tags: Original Linux frp
---

[Inspiration](/linux/service_configuration)

[frp](https://github.com/fatedier/frp) is a open source project about intranet penetration tool.
It is very suitable for solving the problems of not having a public IP address.

## Configure users
Add the running user `frp_runner`
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    frp_runner
```

## Configure directory
* Set root as the owner with `read`, `write`, and `execute` permissions
* Set frp_runner as a member with `read` and `execute` permissions
* Other users have `no` permissions
```sh
sudo chown -R root:frp_runner /opt/frp
```
```sh
sudo chmod -R 2750 /opt/frp
```

## Configuration file
For this example:
* Server IP `1.1.1.1`
* Server port `7000` 
* Local service port `25565` 
* Remote service port `9180` 
::: tip
Please open remote server port `7000` `9180` in ufw or VPS provider's network panel
:::
### Server
```toml [/opt/frp/config.toml]
bindPort = 7000
```
### Client
```toml [/opt/frp/config.toml]
serverAddr = "1.1.1.1"
serverPort = 7000

[[proxies]]
name = "mc"
type = "tcp"
localIP = "127.0.0.1"
localPort = 25565
remotePort = 9180
```

## Configure service
### Server
```ini [/etc/systemd/system/frps.service]
[Unit]
Description=Frp Server
After=network.target
Wants=network.target
Before=shutdown.target

[Service]
Type=simple
User=frp_runner
WorkingDirectory=/opt/frp
ExecStart=/opt/frp/frps -c config.toml

[Install]
WantedBy=multi-user.target
```
### Client
```ini [/etc/systemd/system/frpc.service]
[Unit]
Description=Frp Client
After=network.target
Wants=network.target
Before=shutdown.target

[Service]
Type=simple
User=frp_runner
WorkingDirectory=/opt/frp
ExecStart=/opt/frp/frpc -c config.toml

[Install]
WantedBy=multi-user.target
```

## Run
Generally, keep the server running, and start the client only when in need.
### Server
Reload
```sh
sudo systemctl daemon-reload
```
Set to start automatically on boot
```sh
sudo systemctl enable frps
```
Start
```sh
sudo systemctl start frps
```
### Client
Reload
```sh
sudo systemctl daemon-reload
```
Start
```sh
sudo systemctl start frpc
```
