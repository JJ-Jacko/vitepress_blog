---
title: Gitlab
date: 2024/08/19 15:03
location: Dongguan
tags: Original Linux git
---

## Add source
```sh
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
```
## Install
```sh
apt install gitlab-ce
```
## Configuration
```rb [/etc/gitlab/gitlab.rb]
external_url 'http://192.168.6.111:8989'

gitlab_rails['time_zone'] = 'Asia/Shanghai'

# default data storage path
# alternative data backup path
git_data_dirs({
  "default" => {
    "path" => "/usr/local/gitlab/data"
   },
    "alternative" => {
    "path" => "/usr/local/gitlab/data/backup"
   }
})

# Concurrency
sidekiq['concurrency'] = 20

postgresql['shared_buffers'] = "128MB"

# Max Worker Processes
postgresql['max_worker_processes'] = 4

nginx['listen_port'] = 8989

# Turn off monitoring
prometheus_monitoring['enable'] = false
```

## Reload
```sh
gitlab-ctl reconfigure
gitlab-ctl restart
```

## View status
```sh
gitlab-ctl status
```

## View default password
```sh
cat /etc/gitlab/initial_root_password
```
