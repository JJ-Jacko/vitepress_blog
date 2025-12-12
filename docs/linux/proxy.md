# 代理
* 📅 `2024/08/19 14:17` 
* 📍 `东莞`
* 🏷️ `原创` `Linux`

## 用户代理
`~/.bashrc`
```sh
export ALL_PROXY="socks5://192.168.6.101:10808"
```

## wget 代理
```sh
wget -e https_proxy=192.168.6.101:10809
```

## apt 代理
`/etc/apt/apt.conf.d/99proxies`
```sh
Acquire::http::Proxy "socks5h://192.168.6.101:10808";
Acquire::https::Proxy "socks5h://192.168.6.101:10808";
```
