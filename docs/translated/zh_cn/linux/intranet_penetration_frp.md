---
title: 内网穿透 frp
date: 2026/04/24 12:22
location: 东莞
tags: 原创 Linux frp
---

[灵感来源](/linux/service_configuration)

[frp](https://github.com/fatedier/frp) 是一款用于内网穿透的开源项目。
他非常适合解决没有公网 IP 的问题

## 配置用户
添加运行用户 frp_runner
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    frp_runner
```

## 配置目录
* root 设置为所有者拥有读、写、执行权限
* frp_runner 作为成员拥有读、执行权限
* 其他用户没有任何权限
```sh
sudo chown -R root:frp_runner /opt/frp
```
```sh
sudo chmod -R 2750 /opt/frp
```

## 配置文件
为便于讲解：
* 服务器 IP `1.1.1.1`
* 服务器端口 `7000` 
* 本地服务端口 `25565` 
* 远端服务端口 `9180` 
::: tip
请在 ufw 或 VPS 供应商的网络面板打开远端服务器的端口 `7000` `9180`
:::
### 服务端
```toml [/opt/frp/config.toml]
bindPort = 7000
```
### 客户端
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

## 配置服务
### 服务端
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
### 客户端
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

## 运行
一般来说，保持服务端的运行，客户端在必要时才打开
### 服务端
重载
```sh
sudo systemctl daemon-reload
```
设置开机自启动
```sh
sudo systemctl enable frps
```
启动
```sh
sudo systemctl start frps
```
### 客户端
重载
```sh
sudo systemctl daemon-reload
```
启动
```sh
sudo systemctl start frpc
```
