---
title: 文件路径相关
date: 2024/08/15 14:22
location: 东莞
tags: 原创 Python
---

## 导包
```py
import os
import os.path as op
```

## 创建文件夹
### 创建文件夹
`os.mkdir()`
```py
os.mkdir("a")
```
### 递归创建文件夹
`os.makedirs()`
```py
os.makedirs("a/b/c")
```

## 删除
### 文件
`os.remove()`
```py
os.remove("a.txt")
```
### 空文件夹
`os.rmdir()`
```py
os.rmdir("a/b/c")
```
### 递归空文件夹
`os.removedirs()`
```py
os.removedirs("a/b/c")
```

## 重命名
`os.rename()`
### 文件
```py
os.rename("a.txt", "b.txt")
```
### 文件夹
```py
os.rename("a", "b")
```
`os.renames()`
### 递归文件
```py
os.renames("1/a.txt", "2/b.txt")
```
### 递归文件夹
```py
os.renames("a/b", "c/d")
```

## 切换工作路径
`os.chdir()`

## 获取当前工作路径
`os.getcwd()`

## 获取文件夹内容
`op.listdir()`

## 获取拼接路径
`op.join()`
```py
p1 = "a"
p2 = "b"
print(op.john(p1, p2))
```
```
a/b
```

## 获取分割路径
### 分割路径和文件
`op.split()`
```py
p = "a/1.txt"
print(op.split(p))
```
```
("a", "1.txt")
```
### 分割路径文件和文件后缀
`op.splitext()`
```py
p = "a/1.txt"
print(op.splitext(p))
```
```
("a", ".txt")
```

## 获取文件大小
`op.getsize()`
单位: 字节

## 获取文件所在路径
`op.dirname()`

## 获取文件或文件夹绝对路径
`op.abspath()`

## 获取文件名
`op.basename()`
```py
print(op.basename("a.txt"))
```
```
a.txt
```

## 获取文件有关的时间戳
### 最后创建
`op.ctime()`
### 最后修改
`op.mtime()`
### 最后访问
`op.getatime()` 

## 检查是否为文件夹
`op.isdir()`

## 检查文件或文件夹是否存在
`op.exists()`

## 检查是否为绝对路径
`op.isabs()`
