## 臨時方案
使用 screen 啟動伺服器，
可以喺伺服器背景執行指令
```sh
cd /opt/MC_Servers/test_server
```
```sh
screen -S mc-test-server
```
```sh
java -jar Server.jar nogui
```
使用 <kbd>Ctrl</kbd> <kbd>A</kbd> + <kbd>Ctrl</kbd> <kbd>D</kbd> 鍵離開 screen 工作階段，
伺服器會繼續喺背景運行

## 永久方案
[靈感來源](/translated/zh_hk/linux/service/service_configuration)
### 先決條件
你可以選擇任何一種方式控制伺服器 process，
否則就無法喺伺服器背景執行指令
- [Opanel](https://github.com/opanel-mc/opanel) mod：透過 **web panel** 管理伺服器
- [mcrcon](https://github.com/Tiiffi/mcrcon) CLI：透過**command**管理伺服器

### 設定用戶及群組
#### 新增服務運行用戶 `mcs_runner`
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    mcs_runner
```
#### 新增群組 `mcs_grp`
```sh
sudo groupadd mcs_grp
```
#### 將服務操作用戶 `jacko` 及運行用戶 `mcs_runner` 加入群組 mcs_grp
```sh
sudo usermod -aG mcs_grp jacko
```
```sh
sudo usermod -aG mcs_grp mcs_runner
```
### 設定伺服器目錄
* 將 mcs_grp 設定為所屬群組
* 將 jacko 設為擁有者，並授予`讀取`、`寫入`及`執行`權限
* 將 mcs_runner 設為成員，並授予`讀取`、`寫入`及`執行`權限
* 其他用戶`沒有`任何權限
```sh
sudo chown -R jacko:mcs_grp /opt/MC_Servers
```
```sh
sudo chmod -R 2770 /opt/MC_Servers
```
### 設定服務
有 2 種設定方式
#### 1. 使用 pipe 檔案
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
#### 2. 使用 mcrcon command
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
#### 最後步驟
重新載入
```sh
sudo systemctl daemon-reload
```
啟動
```sh
sudo systemctl start MC-test-server
```
