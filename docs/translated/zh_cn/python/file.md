---
title: 文件
date: 2024/05/28 10:22
location: 东莞
tags: 原创 Python
---

## 模式
`r` / `w` / `a` / `x` + `t` / `b`
### 读
* `r` (默认)
### 写
* `w` 覆盖文件写内容
* `a` 尾部追加
* `x` 创建文件写内容 文件存在报错
### 文件类型
* `t` 文本 (默认)
* `b` 二进制
### 示例
`rt` `rb` `at` `ab`

## 读取
### 文本文件
#### 传统结构
打开文件
```py
f = open("text.txt")
```
读取文件内容赋值给 text
```py
text = f.read()
```
关闭文件
```py
f.close()
```
#### `with` 结构
```py
with open("text.txt") as f:
    text = f.read()
```
### 非文本文件
```py
with open("photo.png", "rb") as f:
    data = f.read()
```

## 写入
### 文本文件
#### 二进制模式写入
```py
with open("text.txt", "wb") as f:
    f.write("Hello".encode())
```
#### 文本模式写入
```py
with open("text.txt", "wt") as f:
    f.write("Hello")
```

### 非文本文件
相当于将 `photo_1.jpg` 复制到 `photo_2.jpg`
```py
with open("photo_1.jpg", "rb") as f:
    data = f.read()

with open("photo_2.jpg", "wb") as f:
    f.write(data)
```
