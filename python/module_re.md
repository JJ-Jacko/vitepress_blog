---
title: re module
date: 2024/05/15 08:48
location: Dongguan
tags: Original Python
---

## Import
```py
import re
```

## Get a value or the first value
### `re.search()`
```py
text = "My number: 10099. My girl number: 10086"
pattern = r"\d+"
```
```py
mch = re.search(pattern, text)
```
Use `group()` to get the value only after make sure `mch` exists
```py
if mch:
    print(mch.group())
```
```
10099
```

## Get a value or the first value matching from the begining
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

## Get all values of single expression
### `re.findall()`
```py
text = "My number: 10099. My girl number: 10086"
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

## Get all values of multiple expressions
### `re.finditer()`
`(?P<group-name> regular-expression)`: Binding group name between regular expression
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
`group()`: Get the content matched by expression through group name
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

## Preload regular expression 
Define the regular expression
```py
pattern = re.compile(r"\d+")
```
Call `findall()`
```py
lst = pattern.findall("My number: 10099. My girl number: 10086")
for item in lst:
    print(item)
```
```
10099
10086
```
