## 導入模組
```py
import re
```

## 取得單個值或第一個值
### `re.search()`
```py
text = "我嘅電話號碼係：10099，我女朋友嘅係 10086"
pattern = r"\d+"
```
```py
mch = re.search(pattern, text)
```
確保 `mch` 存在先可以用 `group()` 取得值
```py
if mch:
    print(mch.group())
```
```
10099
```

## 取得從頭開始匹配嘅單個值或第一個值
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

## 取得單個表達式所有值
### `re.findall()`
```py
text = "我嘅電話號碼係：10099，我女朋友嘅係 10086"
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

## 取得多個表達式所有值
### `re.finditer()`
`(?P<組名>正規表示式)`: 綁定組名同表達式
```py
text = """
<div class='G.E.M.'>鄧紫棋</div>
<div class='jj'>林俊傑</div>
<div class='jay'>周傑倫</div>
"""
pattern = r"<div class='(?P<en_name>.*?)'>(?P<zh_name>.*?)</div>"
```
```py
matchs = re.finditer(pattern, text)
```
`group()`: 透過組名取得表達式匹配到嘅內容
```py
for mch in matchs:
    print(f"English name: {mch.group("en_name")}")
    print(f"Chinese name: {mch.group("zh_name")}")
```
```
English name: G.E.M.
Chinese name: 鄧紫棋
English name: jj
Chinese name: 林俊傑
English name: jay
Chinese name: 周傑倫
```

## 預載入正規表示式
定義正規表示式
```py
pattern = re.compile(r"\d+")
```
調用 `findall()`
```py
lst = pattern.findall("我嘅電話號碼係：10099，我女朋友嘅係 10086")
for item in lst:
    print(item)
```
```
10099
10086
```
