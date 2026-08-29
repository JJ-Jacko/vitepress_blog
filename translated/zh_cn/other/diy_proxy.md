---
title: 自建代理
date: 2026/04/18 15:25
location: 东莞
tags: 原创 Linux 节点 sing-box vless hysteria2 reality
---
## 前言
由于 [s-ui](https://github.com/alireza0/s-ui) 和 [3x-ui](https://github.com/MHSanaei/3x-ui) 都是基于
[sing-box](https://github.com/SagerNet/sing-box) 或 [xray](https://github.com/XTLS/Xray-core) 
的图形化封装，
在域名及 TLS 配置上有一些限制及一些匪夷所思的设计，
稍不注意就会造成节点泄露导致流量偷跑，
且用它们搭建的代理服务器与 sing-box 裸核搭建没有太大区别，
再者 sing-box 的文档非常完善，
配置也非常灵活，
出于学习目的更推荐使用 sing-box 裸核搭建代理服务器。
这里将使用 sing-box 裸核搭建 hysteria2 和 vless + reality 两种代理
::: warning
本博客只作为技术研究，
不鼓励任何个人及组织通过自建代理跳过各国家地区的网络限制，
进行非法盈利，
所有依照本博客搭建的代理及其使用者造成的任何法律责任与站长无关。
如有冒犯，
请通过 email 与站长联系
:::

## 开启 BBR
BBR 拥塞控制算法可以在高延迟和丢包环境下显著提升网络质量
```ini [/etc/sysctl.d/10-bbr.conf]
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr
```
```sh
sudo sysctl --system
```
### 查看是否启用成功
```sh
sudo sysctl net.ipv4.tcp_congestion_control
```
正确启用
```
net.ipv4.tcp_congestion_control = bbr
```

## 安装 sing-box
从 [Releases](https://github.com/SagerNet/sing-box/releases) 页面下载最新的 deb 包
```sh
sudo apt install ./sing-box_1.13.8_linux_amd64.deb
```

## 服务端模板
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
为便于讲解：
* 自签证书 `3650 天（10 年）`
* 域名伪装 `video.example.com` （视频网站）
* 密码 `66668888`
* VPS IP `1.1.1.1`
### 服务端
生成自签证书
```sh
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
    -keyout /etc/sing-box/cert/video.key \
    -out /etc/sing-box/cert/video.pem \
    -subj "/CN=video.example.com" \
    -addext "subjectAltName=DNS:video.example.com"
```
仅展示入站 `inbounds`
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
### 客户端
仅展示出站 `outbounds`
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
为便于讲解：
* 伪装合法外国域名 `www.microsoft.com`
* VPS IP `1.1.1.1`
### 服务端
生成公钥私钥
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
仅展示入站 `inbounds`
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
### 客户端
仅展示出站 `outbounds`
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
