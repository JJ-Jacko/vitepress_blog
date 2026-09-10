---
title: re 正则库
date: 2024/05/15 08:48
location: 东莞
tags: 原创 Python
---

## 导包
```py
import re
```

## 获取单个值或第一个值
### `re.search()`
```py
text = "我的号码是：10099，我女友的是 10086"
pattern = r"\d+"
```
```py
mch = re.search(pattern, text)
```
确保 `mch` 存在才可使用 `group()` 获取值
```py
if mch:
    print(mch.group())
```
```
10099
```

## 获取从头开始匹配的单个值或第一个值
### `re.match()`
```py
pattern = r"\d+"
```
1. 
```py
text = "10099"
mch = re.match(pattern, text)
if mch:
    print(mch.group())
```
```
10099
```
2. 
```py
text = "A10099"
mch = re.match(pattern, text)
if mch:
    print(mch.group())
```
```

```

## 获取单个表达式所有值
### `re.findall()`
```py
text = "我的号码是：10099，我女友的是 10086"
pattern = r"\d+"
```
```py
lst = re.findall(pattern, text)
```
```py
for item in lst:
    print(item)
```
```
10099
10086
```

## 获取多个表达式所有值
### `re.finditer()`
`(?P<组名>正则表达式)`: 绑定组名和表达式
```py
text = """
<div class='G.E.M.'>邓紫棋</div>
<div class='jj'>林俊杰</div>
<div class='jay'>周杰伦</div>
"""
pattern = r"<div class='(?P<en_name>.*?)'>(?P<zh_name>.*?)</div>"
```
```py
matchs = re.finditer(pattern, text)
```
`group()`: 通过组名获取表达式匹配到的内容
```py
for mch in matchs:
    print(f"English name: {mch.group("en_name")}")
    print(f"Chinese name: {mch.group("zh_name")}")
```
```
English name: G.E.M.
Chinese name: 邓紫棋
English name: jj
Chinese name: 林俊杰
English name: jay
Chinese name: 周杰伦
```

## 预加载正则表达式
定义正则表达式
```py
pattern = re.compile(r"\d+")
```
调用 `findall()`
```py
lst = pattern.findall("我的号码是：10099，我女友的是 10086")
for item in lst:
    print(item)
```
```
10099
10086
```
