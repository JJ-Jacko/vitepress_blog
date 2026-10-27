## 導入模組
```py
import os
import os.path as op
```

## 建立資料夾
### 建立資料夾
`os.mkdir()`
```py
os.mkdir("a")
```
### 遞歸建立資料夾
`os.makedirs()`
```py
os.makedirs("a/b/c")
```

## 刪除
### 檔案
`os.remove()`
```py
os.remove("a.txt")
```
### 空資料夾
`os.rmdir()`
```py
os.rmdir("a/b/c")
```
### 遞歸空資料夾
`os.removedirs()`
```py
os.removedirs("a/b/c")
```

## 重新命名
`os.rename()`
### 檔案
```py
os.rename("a.txt", "b.txt")
```
### 資料夾
```py
os.rename("a", "b")
```
`os.renames()`
### 遞歸檔案
```py
os.renames("1/a.txt", "2/b.txt")
```
### 遞歸資料夾
```py
os.renames("a/b", "c/d")
```

## 切換工作路徑
`os.chdir()`

## 取得目前工作路徑
`os.getcwd()`

## 取得資料夾內容
`op.listdir()`

## 取得拼接路徑
`op.join()`
```py
p1 = "a"
p2 = "b"
print(op.john(p1, p2))
```
```
a/b
```

## 取得分割路徑
### 分割路徑同檔案
`op.split()`
```py
p = "a/1.txt"
print(op.split(p))
```
```
("a", "1.txt")
```
### 分割路徑檔案同檔案後綴
`op.splitext()`
```py
p = "a/1.txt"
print(op.splitext(p))
```
```
("a", ".txt")
```

## 取得檔案大小
`op.getsize()`
單位：位元組

## 取得檔案所在路徑
`op.dirname()`

## 取得檔案或資料夾絕對路徑
`op.abspath()`

## 取得檔案名
`op.basename()`
```py
print(op.basename("a.txt"))
```
```
a.txt
```

## 取得檔案相關時間戳
### 最後建立
`op.ctime()`
### 最後修改
`op.mtime()`
### 最後存取
`op.getatime()` 

## 檢查是否為資料夾
`op.isdir()`

## 檢查檔案或資料夾是否存在
`op.exists()`

## 檢查是否為絕對路徑
`op.isabs()`
