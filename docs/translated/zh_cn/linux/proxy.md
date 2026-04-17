---
title: 代理
date: 2024/08/19 14:17
location: 东莞
tags: 原创 Linux
---

## 用户代理
```sh [~/.bashrc]
export ALL_PROXY="socks5://192.168.6.101:10808"
```

## `wget` 代理
```sh
wget -e https_proxy=192.168.6.101:10809
```

## `apt` 代理
```sh [/etc/apt/apt.conf.d/99proxies]
Acquire::http::Proxy "socks5h://192.168.6.101:10808";
Acquire::https::Proxy "socks5h://192.168.6.101:10808";
```
