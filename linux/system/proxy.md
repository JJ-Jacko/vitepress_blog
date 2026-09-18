---
title: Proxy
date: 2024/08/19 14:17
location: Dongguan
tags: Original Linux
---

## Shell session
```sh [~/.bashrc]
export ALL_PROXY="socks5://192.168.6.101:10808"
```

## wget
```sh
wget -e https_proxy=192.168.6.101:10809
```

## apt
```sh [/etc/apt/apt.conf.d/99proxies]
Acquire::http::Proxy "socks5h://192.168.6.101:10808";
Acquire::https::Proxy "socks5h://192.168.6.101:10808";
```
