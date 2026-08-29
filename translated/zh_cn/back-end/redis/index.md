---
title: Redis
date: 2026/08/24 17:51
location: 东莞
tags: 学习 Redis 缓存
---

Redis 是一款在后端领域非常有用的中间件。
这个章节基于知名哔哩哔哩 Up 主 GeekHour 的
[《一小时 Redis 教程》](https://www.bilibili.com/video/BV1Jj411D7oG)

## 📦 安装
Linux (Debian / Ubuntu)
```sh
sudo apt install redis
```

## 🚀 启动
### 命令行
```sh
redis-cli
```
```txt [OUTPUT]
127.0.0.1:6379> 
```
### 图形化界面
[Redis Insight](https://redis.io/docs/latest/develop/tools/insight/) 是官方的用来使用 Redis 的图形化界面工具。

## ⌨️ 通用命令
### 删除数据
```sh
DEL name
```
### 检查数据是否存在
```sh
EXISTS name
```
### 列出存在的键
列出所有存在的键。
```sh
KEYS *
```
列出所有存在且以 **me** 结尾的键。
```sh
KEYS me*
```
### 清除所有的键
```sh
FLUSHALL
```
### 过期时间
显示键过期的时间。
```sh
TTL name
```
| -2 | -1 | num >= 0 |
| - | - | - |
| 已过期 | 永不过期 | 过期剩余的秒数 |

为以存在的键设置过期时间。单位为**秒(s)**。
```sh
EXPIRE name 10
```
创建键时设置过期时间。
```sh
SETEX name 5 jacko
```
如果不存在就设置键。如果键存在，什么都不会发生。
```sh
SETNX name jacko
```
