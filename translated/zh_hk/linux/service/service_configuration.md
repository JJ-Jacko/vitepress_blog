## 設定用戶及群組
### 新增服務用戶 `web_runner`
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    web_runner
```
### 新增群組 `web_project_grp`
```sh
sudo groupadd web_project_grp
```
### 將服務用戶 `jacko` 及運行用戶 `web_runner` 加入群組 web_project_grp
```sh
sudo usermod -aG web_project_grp jacko
```
```sh
sudo usermod -aG web_project_grp web_runner
```

## 設定程式碼目錄
### Clone 程式碼
```sh
sudo git -C /opt clone http://example.git
```
### 設定權限
* 將 web_project_grp 設定為所屬群組
* 將 jacko 設為擁有者，並授予`讀取`、`寫入`及`執行`權限
* 將 web_runner 設為成員，並授予`讀取`及`執行`權限
* 其他用戶`沒有`任何權限
```sh
sudo chown -R jacko:web_project_grp web_project
```
```sh
sudo chmod -R 2750 web_project
```
如果 web_runner 需要對特定子目錄擁有寫入權限，可以逐個設定
```sh
sudo chown -R jacko:web_project_grp web_project/xxx
```
```sh
sudo chmod -R 2770 web_project/xxx
```

## 設定服務
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
重新載入
```sh
sudo systemctl daemon-reload
```
啟動
```sh
sudo systemctl start web_project
```
