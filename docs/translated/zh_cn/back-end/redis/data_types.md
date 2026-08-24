---
title: 数据类型
date: 2026/08/24 22:06
location: 东莞
tags: 原创 Redis 缓存
---

## 字符串
### 设置字符串类型的数据
```sh
SET name jacko
```
### 获取字符串类型的数据
```sh
GET name
```
```txt [OUTPUT] 
"jacko"
```
如果值里有中文或表情符号，使用 `--raw` 来启动 redis 命令行。
```sh
redis-cli
GET name
```
```txt [OUTPUT] 
"\xe2\x9c\xa8\xe6\x98\x9f\xe6\x98\x9f"
```
```sh
redis-cli --raw
GET name
```
```txt [OUTPUT] 
✨星星
```
### 删除字符串类型的数据
```sh
DEL name
```
### 检查字符串类型的数据是否存在
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

## 列表
### 列出元素
索引 0 到 -1 意味着第一个元素到最后一个元素。
```sh
LRANGE names 0 -1
```
### 添加元素
将元素添加到列表的**开头**。
```sh
LPUSH names jacko john
```
将元素添加到列表的**末尾**。
```sh
RPUSH names jacko john
```
### 弹出元素
将元素从列表的**开头**弹出。数量是可选项。
```sh
LPOP names 2
```
将元素从列表的**末尾**弹出。数量是可选项。
```sh
RPOP names 2
```
### 展示列表的长度
```sh
LLEN names
```
### 修剪列表
这意味着**只会**保留索引为 2 到 5 之间的元素。
```sh
LTRIM names 2 5
```
