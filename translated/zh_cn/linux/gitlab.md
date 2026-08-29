---
title: Gitlab
date: 2024/08/19 15:03
location: 东莞
tags: 原创 Linux git
---

## 添加源
```sh
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
```
## 安装
```sh
apt install gitlab-ce
```
## 配置
```rb [/etc/gitlab/gitlab.rb]
external_url 'http://192.168.6.111:8989'

gitlab_rails['time_zone'] = 'Asia/Shanghai'

# default 数据存储路径
# alternative 数据备份路径
git_data_dirs({
  "default" => {
    "path" => "/usr/local/gitlab/data"
   },
    "alternative" => {
    "path" => "/usr/local/gitlab/data/backup"
   }
})

# 并发量
sidekiq['concurrency'] = 20

postgresql['shared_buffers'] = "128MB"

# 最大工作进程
postgresql['max_worker_processes'] = 4

nginx['listen_port'] = 8989

# 关闭监控
prometheus_monitoring['enable'] = false
```

## 重载
```sh
gitlab-ctl reconfigure
gitlab-ctl restart
```

## 查看状况
```sh
gitlab-ctl status
```

## 默认密码
```sh
cat /etc/gitlab/initial_root_password
```
