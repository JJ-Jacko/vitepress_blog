---
title: Minecraft Server
date: 2026/04/18 14:42
location: Dongguan
tags: Original Linux Minecraft
---

## Temporary solution
Use screen to start the server,
you can use commands in the background of the server
```sh
cd /opt/MC_Servers/test_server
```
```sh
screen -S mc-test-server
```
```sh
java -jar Server.jar nogui
```
Use <kbd>Ctrl</kbd> <kbd>A</kbd> + <kbd>Ctrl</kbd> <kbd>D</kbd> to exit the screen session,
the server will continue to run in the background

## Permanent solution
[Inspiration](/linux/service_configuration)
### Prerequisites
You can choice any one way to control server porcess.
Otherwise, you cannot use commands in the background of the server.
- [Opanel](https://github.com/opanel-mc/opanel) mod: installed to manage the server through the **web panel**.
- [mcrcon](https://github.com/Tiiffi/mcrcon) CLI: installed to manage the server through the **command**.

### Configure users and groups
#### Add the service running user `mcs_runner`
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    mcs_runner
```
#### Add the group `mcs_grp`
```sh
sudo groupadd mcs_grp
```
#### Add the service operation user `jacko` and the running user `mcs_runner` to the group mcs_grp
```sh
sudo usermod -aG mcs_grp jacko
```
```sh
sudo usermod -aG mcs_grp mcs_runner
```
### Configure server directory
* Set mcs_grp as the group
* Set jacko as the owner with `read`, `write`, and `execute` permissions
* Set mcs_runner as a member with `read`, `write`, and `execute` permissions
* Other users have `no` permissions
```sh
sudo chown -R jacko:mcs_grp /opt/MC_Servers
```
```sh
sudo chmod -R 2770 /opt/MC_Servers
```
### Configure service
There are 2 ways to configure.
#### 1. Using pipeline file
```ini{12-18} [/etc/systemd/system/mc-test-server.service]
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
#### 2. Using mcrcon command
```ini{12-15} [/etc/systemd/system/mc-test-server.service]
[Unit]
Description=Minecraft Test Server
After=network.target
Wants=network.target
Before=shutdown.target

[Service]
Type=simple
User=mcs_runner
WorkingDirectory=/opt/MC_Servers/test_server

ExecStart=java -jar Server.jar nogui
ExecStop=/usr/local/bin/mcrcon -H 127.0.0.1 -P 25575 -p mcmc stop
ExecStop=/bin/sh -c 'while kill -0 $MAINPID 2>/dev/null; do sleep 1; done'
TimeoutStopSec=30

[Install]
WantedBy=multi-user.target
```
```properties [server.properties]
enable-rcon=true
rcon.password=mcmc
rcon.port=25575
```
#### Final step
Reload
```sh
sudo systemctl daemon-reload
```
Run
```sh
sudo systemctl start MC-test-server
```
