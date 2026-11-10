## 字串
### 設定字串類型嘅資料
```sh
SET name jacko
```
### 取得字串類型嘅資料
```sh
GET name
```
```txt [OUTPUT] 
"jacko"
```
如果 value 入面有中文或者 emoji，就要用 `--raw` 啟動 redis 命令行。
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
索引 0 到 -1 即係由第一個元素去到最後一個元素。
```sh
LRANGE names 0 -1
```
### 加入元素
將元素加到列表嘅**開頭**。
```sh
LPUSH names jacko john
```
將元素加到列表嘅**結尾**。
```sh
RPUSH names jacko john
```
### 彈出元素
由列表嘅**開頭**彈出元素。數量係可選項。
```sh
LPOP names 2
```
由列表嘅**結尾**彈出元素。數量係可選項。
```sh
RPOP names 2
```
### 顯示列表長度
```sh
LLEN names
```
### 修剪列表
即係**只會**保留索引 2 到 5 之間嘅元素。
```sh
LTRIM names 2 5
```

## 集合
同列表相比，集合入面嘅元素係 **unique** 嘅。
### 列出成員
```sh
SMEMBERS names
```
### 加入成員
```sh
SADD names jacko john
```
### 移除成員
```sh
SREM names jacko
```
### 檢查項目係咪集合嘅成員
```sh
SADD names jacko
```

## 有序集合
### 列出成員
索引 0 到 -1 即係由第一個元素去到最後一個元素。
```sh
ZRANGE result 0 -1
```
```txt [OUTPUT] 
1) "john"
2) "jacko"
3) "mike"
```
`WITHSCORES` 會同時輸出分數。
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
### 加入成員
```sh
ZADD result 88 jacko 77 john 88 mike
```
### 顯示成員嘅分數
```sh
ZSCORE result jacko
```
### 顯示成員分數嘅排名
預設係由最大到最細。
```sh
ZRANK result jacko
```
`ZREVRANK` 指令係由最細到最大。
```sh
ZREVRANK result jacko
```

## 哈希
### 建立哈希
建立一個叫 `person`、有 `name` 同 `age` 兩個 field 嘅哈希。
```sh
HSET person name jacko
```
```sh
HSET person age 21
```
### 顯示哈希
```sh
HGETALL person
```
```txt [OUTPUT] 
1) "name"
2) "jacko"
3) "age"
4) "21"
```
### 顯示哈希所有 key
```sh
HKEYS person
```
```txt [OUTPUT] 
1) "name"
2) "age"
```
### 顯示哈希指定嘅 field
```sh
HGET person name
```
```sh
HGET person age
```
### 顯示哈希長度
```sh
HLEN person
```
### 刪除哈希指定嘅 field
```sh
HDEL person name
```
```sh
HDEL person age
```
### 檢查哈希指定 field 是否存在
```sh
HEXISTS person name
```
```sh
HEXISTS person age
```
