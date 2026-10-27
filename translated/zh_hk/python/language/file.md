## 模式
`r` / `w` / `a` / `x` + `t` / `b`
### 讀取
* `r` (預設)
### 寫入
* `w` 覆寫檔案內容
* `a` 在檔案尾端追加
* `x` 建立檔案並寫入內容，檔案已存在時會報錯
### 檔案類型
* `t` 純文字 (預設)
* `b` 二進制
### 範例
`rt` `rb` `at` `ab`

## 讀取
### 純文字檔
#### 傳統結構
開啟檔案
```py
f = open("text.txt")
```
讀取檔案內容並賦值畀 text
```py
text = f.read()
```
關閉檔案
```py
f.close()
```
#### `with` 結構
```py
with open("text.txt") as f:
    text = f.read()
```
### 非純文字檔
```py
with open("photo.png", "rb") as f:
    data = f.read()
```

## 寫入
### 純文字檔
#### 以二進制模式寫入
```py
with open("text.txt", "wb") as f:
    f.write("Hello".encode())
```
#### 以文字模式寫入
```py
with open("text.txt", "wt") as f:
    f.write("Hello")
```

### 非純文字檔
相當於將 `photo_1.jpg` 複製到 `photo_2.jpg`
```py
with open("photo_1.jpg", "rb") as f:
    data = f.read()

with open("photo_2.jpg", "wb") as f:
    f.write(data)
```
