Redis 喺後端領域係一款非常有用嘅 middleware。
呢個章節基於知名 Bilibili 創作者 GeekHour 嘅
[《一小時 Redis 教學》](https://www.bilibili.com/video/BV1Jj411D7oG)

## 📦 安裝
Linux (Debian / Ubuntu)
```sh
sudo apt install redis
```

## 🚀 啟動
### CLI
```sh
redis-cli
```
```txt [OUTPUT]
127.0.0.1:6379> 
```
### GUI
[Redis Insight](https://redis.io/docs/latest/develop/tools/insight/) 係官方用嚟操作 Redis 嘅圖形化介面工具。

## ⌨️ 常用指令
### 刪除資料
```sh
DEL name
```
### 檢查資料是否存在
```sh
EXISTS name
```
### 列出存在嘅 key
列出所有存在嘅 key。
```sh
KEYS *
```
列出所有存在而且以 **me** 結尾嘅 key。
```sh
KEYS me*
```
### 清除所有 key
```sh
FLUSHALL
```
### 過期時間
顯示 key 過期嘅時間。
```sh
TTL name
```
| -2 | -1 | num >= 0 |
| - | - | - |
| 已過期 | 永不過期 | 過期剩餘嘅秒數 |

為已存在嘅 key 設定過期時間。單位係**秒 (s)**。
```sh
EXPIRE name 10
```
建立 key 時設定過期時間。
```sh
SETEX name 5 jacko
```
如果唔存在就設定 key。如果 key 存在，乜都唔會發生。
```sh
SETNX name jacko
```
