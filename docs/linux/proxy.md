# Proxy
* 📅 `2024/08/19 14:17` 
* 📍 `Dongguan`
* 🏷️ `Original` `Linux`

## User proxy
```sh [~/.bashrc]
export ALL_PROXY="socks5://192.168.6.101:10808"
```

## `wget` proxy
```sh
wget -e https_proxy=192.168.6.101:10809
```

## `apt` proxy
```sh [/etc/apt/apt.conf.d/99proxies]
Acquire::http::Proxy "socks5h://192.168.6.101:10808";
Acquire::https::Proxy "socks5h://192.168.6.101:10808";
```
