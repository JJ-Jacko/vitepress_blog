---
title: Gitea
date: 2026/08/29 17:05
location: 东莞
tags: 原创 Linux git
---

[灵感来源](/translated/zh_cn/linux/service_configuration)

[Gitea](https://github.com/go-gitea/gitea) 是一款有关代码托管
以及 CI/CD 平台的开源项目就像是 [Github](https://github.com)。
我们经常会将自己的代码仓库托管到 Github 上去，但有时我们想要让代码留在本地。
如果我们使用裸代码仓库，那么使用和管理会非常复杂。
所有 Gitea 是一个不错的选择。

## 配置用户
不同于其他的服务， Gitea 进程的运行用户需要或推荐名字为 `git`。
并且要对家目录有完整的的访问权限和登录权限。
不要设置密码，这样能他不可被真实用户登录。
```sh
sudo useradd -m -s /bin/bash git
```

## 配置目录
* git 设置为所有者拥有`读`、`写`、`执行`权限
* 其他用户`没有`任何权限
```sh
sudo chown -R git:git /opt/gitea
```
```sh
sudo chmod -R 750 /opt/gitea
```

## 配置 Gitea 程序文件
* 从 Github 发布页面下载。
* 解压压缩包
* 重命名并移动到 `/opt/gitea/gitea`

## 配置服务
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

## 运行
重载
```sh
sudo systemctl daemon-reload
```
设置开机自启动
```sh
sudo systemctl enable gitea
```
启动
```sh
sudo systemctl start gitea
```
