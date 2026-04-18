---
title: DIY Proxy
date: 2026/04/18 15:25
location: Dongguan
tags: Original Linux proxy sing-box vless hysteria2 reality
---
## Introduction
Both [s-ui](https://github.com/alireza0/s-ui) and [3x-ui](https://github.com/MHSanaei/3x-ui) are GUI wrappers based on
[sing-box](https://github.com/SagerNet/sing-box) or [xray](https://github.com/XTLS/Xray-core).
They have some limits and odd design choices for domain and TLS settings.
If you are not careful, your node details may leak and traffic may be abused.
Also, a proxy built with these panels is not very different from one built with raw sing-box.
sing-box has clear documentation and very flexible configuration.
For learning, it is better to build the proxy server with raw sing-box.
In this guide, we use raw sing-box to build two proxy types: hysteria2 and vless + reality.
::: warning
This blog is for technical research only.
It does not encourage any person or organization to bypass network restrictions in any country or region for illegal profit.
Any legal responsibility caused by proxies built from this blog belongs to the users, not the site owner.
If you have any concerns, please contact the site owner by email.
:::

## Enable BBR
BBR congestion control algorithm can significantly improve network performance in high latency and packet loss environments
```ini [/etc/sysctl.d/10-bbr.conf]
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr
```
```sh
sudo sysctl --system
```
### Check if BBR is enabled
```sh
sudo sysctl net.ipv4.tcp_congestion_control
```
Correctly enabled
```
net.ipv4.tcp_congestion_control = bbr
```

## Install sing-box
Download the latest deb package from the [Releases](https://github.com/SagerNet/sing-box/releases) page
```sh
sudo apt install ./sing-box_1.13.8_linux_amd64.deb
```

## Server template
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
For this example:
* Self-signed certification: `3650 days (10 years)`
* Fake domain: `video.example.com` (video site)
* Password: `66668888`
* VPS IP `1.1.1.1`
### Server
Generate a self-signed certificate
```sh
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
    -keyout /etc/sing-box/cert/video.key \
    -out /etc/sing-box/cert/video.pem \
    -subj "/CN=video.example.com" \
    -addext "subjectAltName=DNS:video.example.com"
```
Only the inbound section `inbounds` is shown
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
### Client
Only the outbound section `outbounds` is shown
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
For this example:
* Fake legitimate foreign domain `www.microsoft.com`
* VPS IP `1.1.1.1`
### Server
Generate a public key
```sh
sing-box generate reality-keypair
```
```
PrivateKey: gBQugGN6oP7FvORBVNJUk2bpM0mdncvlHK8tXAWc7kE
PublicKey: yhHGsRA2OakzxjjLpzXJznWppsl1EOvFLxzCTmRNs04
```
Generate a UUID
```sh
sing-box generate uuid
```
```
2731616d-3f85-4373-849b-494e70b43e6a
```
Generate a short ID
```sh
openssl rand -hex 8
```
```
2421bceba939d5ff
```
Only the inbound section `inbounds` is shown
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
### Client
Only the outbound section `outbounds` is shown
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
