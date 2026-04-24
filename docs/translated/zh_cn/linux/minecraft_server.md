---
title: 我的世界服务器
date: 2026/04/18 14:42
location: 东莞
tags: 原创 Linux 我的世界
---

## 临时性方案
使用 screen 启动服务器，
可在服务器的后台使用指令
```sh
cd /opt/MC_Servers/test_server
```
```sh
screen -S mc-test-server
```
```sh
java -jar Server.jar nogui
```
使用 <kbd>Ctrl</kbd> <kbd>A</kbd> + <kbd>Ctrl</kbd> <kbd>D</kbd> 键退出 screen 会话，
服务器会继续在后台运行

## 永久性方案
[灵感来源](/translated/zh_cn/linux/service_configuration)
### 先决条件
服务端安装了 [Opanel](https://github.com/opanel-mc/opanel) mod 用于在 Web 面板中管理服务器，
否则不能在服务器的后台使用指令
### 配置用户及组
#### 添加服务运行用户 `mcs_runner`
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    mcs_runner
```
#### 添加组 `mcs_grp`
```sh
sudo groupadd mcs_grp
```
#### 将服务运维用户 `jacko` 和运行用户 `mcs_runner` 添加到组 mcs_grp 中
```sh
sudo usermod -aG mcs_grp jacko
```
```sh
sudo usermod -aG mcs_grp mcs_runner
```
### 配置服务器目录
* 将 mcs_grp 设置为所属组
* jacko 设置为所有者拥有`读`、`写`、`执行`权限
* mcs_runner 作为成员拥有`读`、`写`、`执行`权限
* 其他用户`没有`任何权限
```sh
sudo chown -R jacko:mcs_grp /opt/MC_Servers
```
```sh
sudo chmod -R 2770 /opt/MC_Servers
```
### 配置服务
```ini [/etc/systemd/system/mc-test-server.service]
[Unit]
Description=Minecraft Test Server
After=network.target
Wants=network.target
Before=shutdown.target

[Service]
Type=simple
User=mcs_runner
WorkingDirectory=/opt/MC_Servers/test_server

ExecStartPre=mkfifo stdin.pipe
ExecStart=sh -c 'tail -f stdin.pipe | java -jar Server.jar nogui'
ExecStop=sh -c 'echo "stop" > stdin.pipe'
ExecStop=rm -f stdin.pipe
TimeoutStopSec=30
KillMode=process
KillSignal=SIGTERM

[Install]
WantedBy=multi-user.target
```

重载
```sh
sudo systemctl daemon-reload
```
启动
```sh
sudo systemctl start MC-test-server
```
