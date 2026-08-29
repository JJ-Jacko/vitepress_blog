---
title: 服务配置
date: 2026/04/18 13:32
location: 东莞
tags: 原创 Linux
---

## 配置用户及组
### 添加服务运行用户 `web_runner`
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    web_runner
```
### 添加组 `web_project_grp`
```sh
sudo groupadd web_project_grp
```
### 将服务运维用户 `jacko` 和运行用户 `web_runner` 添加到组 web_project_grp 中
```sh
sudo usermod -aG web_project_grp jacko
```
```sh
sudo usermod -aG web_project_grp web_runner
```

## 配置代码目录
### 拉取代码
```sh
sudo git -C /opt clone http://example.git
```
### 配置权限
* 将 web_project_grp 设置为所属组
* jacko 设置为所有者拥有`读`、`写`、`执行`权限
* web_runner 作为成员拥有`读`、`执行`权限
* 其他用户`没有`任何权限
```sh
sudo chown -R jacko:web_project_grp web_project
```
```sh
sudo chmod -R 2750 web_project
```
若 web_runner 需要个别子目录的写权限可单独配置
```sh
sudo chown -R jacko:web_project_grp web_project/xxx
```
```sh
sudo chmod -R 2770 web_project/xxx
```

## 配置服务
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
重载
```sh
sudo systemctl daemon-reload
```
启动
```sh
sudo systemctl start web_project
```
