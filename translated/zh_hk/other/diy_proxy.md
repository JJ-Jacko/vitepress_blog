## 前言
由於 [s-ui](https://github.com/alireza0/s-ui) 同 [3x-ui](https://github.com/MHSanaei/3x-ui) 都係基於
[sing-box](https://github.com/SagerNet/sing-box) 或者 [xray](https://github.com/XTLS/Xray-core)
嘅圖形化封裝，
喺域名同 TLS 設定上有啲限制，仲有啲匪夷所思嘅設計，
稍一不慎就會令節點洩露，導致流量被偷跑，
而且用佢哋搭建嘅代理伺服器，同用 sing-box 裸核搭建冇太大分別，
再者 sing-box 嘅文件非常完善，
設定亦都非常靈活，
出於學習目的，更推薦用 sing-box 裸核搭建代理伺服器。
呢度會用 sing-box 裸核搭建 hysteria2 同 vless + reality 兩種代理
::: warning 警告
本博客只作技術研究，
唔鼓勵任何個人或者組織透過自建代理繞過各國家地區嘅網絡限制，
進行非法盈利，
所有依照本博客搭建嘅代理，以及其使用者造成嘅任何法律責任，都同站長無關。
如有冒犯，
請透過 email 同站長聯絡
:::

## 開啟 BBR
BBR 擁塞控制演算法可以喺高延遲同丟包環境下，顯著提升網絡質素
```ini [/etc/sysctl.d/10-bbr.conf]
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr
```
```sh
sudo sysctl --system
```
### 查看係咪啟用成功
```sh
sudo sysctl net.ipv4.tcp_congestion_control
```
正確啟用
```
net.ipv4.tcp_congestion_control = bbr
```

## 安裝 sing-box
從 [Releases](https://github.com/SagerNet/sing-box/releases) 頁面下載最新嘅 deb 套件
```sh
sudo apt install ./sing-box_1.13.8_linux_amd64.deb
```

## 伺服器端模板
```json [/etc/sing-box/config.json]
{
    "log": {
        "level": "info"
    },
    "inbounds": [],
    "outbounds": [
        {
            "tag": "⚡ Direct",
            "type": "direct"
        }
    ]
}
```

## hysteria2
為咗方便講解：
* 自簽證書 `3650 日（10 年）`
* 域名偽裝 `video.example.com`（影片網站）
* 密碼 `66668888`
* VPS IP `1.1.1.1`
### 伺服器端
生成自簽證書
```sh
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
    -keyout /etc/sing-box/cert/video.key \
    -out /etc/sing-box/cert/video.pem \
    -subj "/CN=video.example.com" \
    -addext "subjectAltName=DNS:video.example.com"
```
只展示入站 `inbounds`
```json [/etc/sing-box/config.json]
{
    "tag": "hy2-in",
    "type": "hysteria2",
    "listen": "::",
    "listen_port": 443,
    "users": [
        {
            "name": "jacko",
            "password": "66668888"
        }
        
    ],
    "tls": {
        "enabled": true,
        "server_name": "video.example.com",
        "certificate_path": "/etc/sing-box/cert/video.pem",
        "key_path": "/etc/sing-box/cert/video.key"
    }
}
```
### 客戶端
只展示出站 `outbounds`
```json [config.json]
{
    "tag": "your_first_hysteria2_node",
    "type": "hysteria2",
    "server": "1.1.1.1",
    "server_port": 443,
    "password": "66668888",
    "tls": {
        "enabled": true,
        "server_name": "video.example.com",
        "certificate": [
            "-----BEGIN CERTIFICATE-----",
            "MIIFLjCCAxagAwIBAgIUPQ+5fD/5BM8kpyxtLCFNFVg/YWIwDQYJKoZIhvcNAQEL",
            ...
            "QVgWi+y+S0XzcQ2PHZ4u8Zw4Dvjy/k/vCf0WHevPiWX6dg==",
            "-----END CERTIFICATE-----"
        ]
    }
}
```

## vless + reality
為咗方便講解：
* 偽裝合法外國域名 `www.microsoft.com`
* VPS IP `1.1.1.1`
### 伺服器端
生成公鑰同私鑰
```sh
sing-box generate reality-keypair
```
```
PrivateKey: gBQugGN6oP7FvORBVNJUk2bpM0mdncvlHK8tXAWc7kE
PublicKey: yhHGsRA2OakzxjjLpzXJznWppsl1EOvFLxzCTmRNs04
```
生成 uuid
```sh
sing-box generate uuid
```
```
2731616d-3f85-4373-849b-494e70b43e6a
```
生成 short id
```sh
openssl rand -hex 8
```
```
2421bceba939d5ff
```
只展示入站 `inbounds`
```json [/etc/sing-box/config.json]
{
    "tag": "vless-reality-in",
    "type": "vless",
    "listen": "::",
    "listen_port": 2053,
    "users": [
        {
            "name": "jacko",
            "uuid": "2731616d-3f85-4373-849b-494e70b43e6a",
            "flow": "xtls-rprx-vision"
        }
    ],
    "tls": {
        "enabled": true,
        "server_name": "www.microsoft.com",
        "reality": {
            "enabled": true,
            "handshake": {
                "server": "www.microsoft.com",
                "server_port": 443
            },
            "private_key": "gBQugGN6oP7FvORBVNJUk2bpM0mdncvlHK8tXAWc7kE",
            "short_id": "2421bceba939d5ff"
        }
    }
}
```
### 客戶端
只展示出站 `outbounds`
```json [config.json]
{
    "tag": "your_first_vless_reality_node",
    "type": "vless",
    "server": "1.1.1.1",
    "server_port": 2053,
    "uuid": "aa956ea8-7478-4cc7-aec4-85101a679694",
    "packet_encoding": "xudp",
    "flow": "xtls-rprx-vision",
    "tls": {
        "enabled": true,
        "server_name": "www.microsoft.com",
        "utls": {
            "enabled": true,
            "fingerprint": "chrome"
        },
        "reality": {
            "enabled": true,
            "public_key": "yhHGsRA2OakzxjjLpzXJznWppsl1EOvFLxzCTmRNs04",
            "short_id": "2421bceba939d5ff"
        }
    }
}
```
