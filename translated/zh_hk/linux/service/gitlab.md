## 加入套件來源
```sh
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
```
## 安裝
```sh
apt install gitlab-ce
```
## 設定
```rb [/etc/gitlab/gitlab.rb]
external_url 'http://192.168.6.111:8989'

gitlab_rails['time_zone'] = 'Asia/Shanghai'

# 預設資料儲存路徑
# 另一個資料備份路徑
git_data_dirs({
  "default" => {
    "path" => "/usr/local/gitlab/data"
   },
    "alternative" => {
    "path" => "/usr/local/gitlab/data/backup"
   }
})

# 並行數
sidekiq['concurrency'] = 20

postgresql['shared_buffers'] = "128MB"

# 最大 Worker Processes
postgresql['max_worker_processes'] = 4

nginx['listen_port'] = 8989

# 關閉監控
prometheus_monitoring['enable'] = false
```

## 重新載入
```sh
gitlab-ctl reconfigure
gitlab-ctl restart
```

## 查看狀態
```sh
gitlab-ctl status
```

## 查看預設密碼
```sh
cat /etc/gitlab/initial_root_password
```
