---
title: Data Types
date: 2026/08/24 22:06
location: Dongguan
tags: Original Redis Cache
---

## String
### Set string type data
```sh
SET name jacko
```
### Get string type data
```sh
GET name
```
```txt [OUTPUT] 
"jacko"
```
If it is Chinese words or emoji in value, using argument `--raw` launch redis command line.
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
### Delete string type data
```sh
DEL name
```
### Check string type data exists
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

## List
### List elements
Index 0 to index -1 means first element to last element.
```sh
LRANGE names 0 -1
```
### Add elements
Add elements into the **head** of the list.
```sh
LPUSH names jacko john
```
Add elements into the **tail** of the list.
```sh
RPUSH names jacko john
```
### Pop elements
Pop elements from the **head** of the list. Numbers count is optional.
```sh
LPOP names 2
```
Pop elements from the **tail** of the list. Numbers count is optional.
```sh
RPOP names 2
```
### Show list length
```sh
LLEN names
```
### Trim list
That means **ONLY** keep the elements whose indices are between 2 and 5.
```sh
LTRIM names 2 5
```

## Set
Compared to the list, the elements in the set are **unique**.
### List members
```sh
SMEMBERS names
```
### Add members
```sh
SADD names jacko john
```
### Remove members
```sh
SREM names jacko
```
### Check item is member of set
```sh
SADD names jacko
```

## Sorted set (Zset)
### List members
Index 0 to index -1 means first element to last element.
```sh
ZRANGE result 0 -1
```
```txt [OUTPUT] 
1) "john"
2) "jacko"
3) "mike"
```
`WITHSCORES` will output with scores.
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
### Add members
```sh
ZADD result 88 jacko 77 john 88 mike
```
### Show member's score
```sh
ZSCORE result jacko
```
### Show rank of member's score
The default is from largest to smallest.
```sh
ZRANK result jacko
```
`ZREVRANK` command is from smallest to largest.
```sh
ZREVRANK result jacko
```
