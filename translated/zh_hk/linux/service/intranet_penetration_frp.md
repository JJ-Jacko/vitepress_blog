[靈感來源](/translated/zh_hk/linux/service/service_configuration)

[frp](https://github.com/fatedier/frp) 係一個用於內網穿透嘅開源項目。
佢非常適合用嚟解決冇公網 IP 嘅問題

## 設定用戶
新增運行用戶 `frp_runner`
```sh
sudo useradd \
    --system \
    --no-create-home \
    --shell /usr/sbin/nologin \
    frp_runner
```

## 設定目錄
* 將 root 設為擁有者，並授予`讀取`、`寫入`及`執行`權限
* 將 frp_runner 設為成員，並授予`讀取`及`執行`權限
* 其他用戶`沒有`任何權限
```sh
sudo chown -R root:frp_runner /opt/frp
```
```sh
sudo chmod -R 2750 /opt/frp
```

## 設定檔
為方便講解：
* 伺服器 IP `1.1.1.1`
* 伺服器連接埠 `7000` 
* 本地服務連接埠 `25565` 
* 遠端服務連接埠 `9180` 
::: tip 小提示
請喺 ufw 或 VPS 供應商嘅網絡控制面板開放遠端伺服器嘅連接埠 `7000` `9180`
:::
### 伺服器端
```toml [/opt/frp/config.toml]
bindPort = 7000
```
### 用戶端
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

## 設定服務
### 伺服器端
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
### 用戶端
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

## 執行
一般嚟講，保持伺服器端運行，用戶端只喺有需要時先開啟
### 伺服器端
重新載入
```sh
sudo systemctl daemon-reload
```
設定開機自動啟動
```sh
sudo systemctl enable frps
```
啟動
```sh
sudo systemctl start frps
```
### 用戶端
重新載入
```sh
sudo systemctl daemon-reload
```
啟動
```sh
sudo systemctl start frpc
```
