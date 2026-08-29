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

## 集合
Compared to the list, the elements in the set are **unique**.
### 列出成员
```sh
SMEMBERS names
```
### 添加成员
```sh
SADD names jacko john
```
### 移除成员
```sh
SREM names jacko
```
### 检查项目是否为集合的成员
```sh
SADD names jacko
```

## 有序集合
### 列出成员
索引 0 到 -1 意味着第一个元素到最后一个元素。
```sh
ZRANGE result 0 -1
```
```txt [OUTPUT] 
1) "john"
2) "jacko"
3) "mike"
```
`WITHSCORES` 将会同时输出分数。
```sh
ZRANGE result 0 -1 WITHSCORES
```
```txt [OUTPUT] 
1) "john"
2) "77"
3) "jacko"
4) "88"
5) "mike"
6) "88"
```
### 添加成员
```sh
ZADD result 88 jacko 77 john 88 mike
```
### 展示成员的分数
```sh
ZSCORE result jacko
```
### 展示成员分数的排名
默认是从最大到最小。
```sh
ZRANK result jacko
```
`ZREVRANK` 命令是从最小到最大。
```sh
ZREVRANK result jacko
```
