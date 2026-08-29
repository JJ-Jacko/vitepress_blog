---
title: Redis
date: 2026/08/24 17:51
location: Dongguan
tags: Original Redis Cache
---

## 📦 Installation
Linux (Debian / Ubuntu)
```sh
sudo apt install redis
```

## 🚀 Launch
### CLI
```sh
redis-cli
```
```txt [OUTPUT]
127.0.0.1:6379> 
```
### GUI
[Redis Insight](https://redis.io/docs/latest/develop/tools/insight/) is the official GUI tool use Redis.

## ⌨️ Common commands
### Delete data
```sh
DEL name
```
### Check data exists
```sh
EXISTS name
```
### List keys exists
List all exist keys. 
```sh
KEYS *
```
List all exist keys which end with **me**.
```sh
KEYS me*
```
### Clean all keys
```sh
FLUSHALL
```
### Expiration time
Show key expiration time.
```sh
TTL name
```
| -2 | -1 | num >= 0 |
| - | - | - |
| Expirated | Never expires | Remaining seconds until expiration |

Set expiration time for exists key. The unit is **seconds**.
```sh
EXPIRE name 10
```
Set key expiration time when create.
```sh
SETEX name 5 jacko
```
Set key if not exists. When key exists, there are nothing happended.
```sh
SETNX name jacko
```
