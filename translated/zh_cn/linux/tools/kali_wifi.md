---
title: Kali 嗅探 Wi-Fi
date: 2024/02/20 12:46
location: 东莞
tags: 原创 Linux Kali
---

## 安装 kernel 对应 headers
[详情](/translated/zh_cn/linux/upgrade_kernel&headers)

## 安装驱动
```sh
apt install realtek-rtl88xxau-dkms
```

## 查看能否监听
```sh
airmon-ng start wlan0
```

## 扫描
```sh
airodump-ng wlan0
```

## 抓包
```sh
airodump-ng -c [CH] --bssid [BSSID] -w <PATH/handshake> wlan0
```
