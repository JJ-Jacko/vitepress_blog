---
title: File path related
date: 2024/08/15 14:22
location: Dongguan
tags: Original Python
---

## Import
```py
import os
import os.path as op
```

## Make directory
### Make directory
`os.mkdir()`
```py
os.mkdir("a")
```
### Make directory recursively
`os.makedirs()`
```py
os.makedirs("a/b/c")
```

## Delete
### File
`os.remove()`
```py
os.remove("a.txt")
```
### Empty directory
`os.rmdir()`
```py
os.rmdir("a/b/c")
```
### Empty directory recursively
`os.removedirs()`
```py
os.removedirs("a/b/c")
```

## Rename
`os.rename()`
### File
```py
os.rename("a.txt", "b.txt")
```
### Directory
```py
os.rename("a", "b")
```
`os.renames()`
### File recursively
```py
os.renames("1/a.txt", "2/b.txt")
```
### Directory recursively
```py
os.renames("a/b", "c/d")
```

## Change working directory
`os.chdir()`

## Get current working directory
`os.getcwd()`

## Get directory content
`op.listdir()`

## Get spliced path
`op.join()`
```py
p1 = "a"
p2 = "b"
print(op.john(p1, p2))
```
```
a/b
```

## Get splited path
### Split path and file 
`op.split()`
```py
p = "a/1.txt"
print(op.split(p))
```
```
("a", "1.txt")
```
### Split path file and suffix
`op.splitext()`
```py
p = "a/1.txt"
print(op.splitext(p))
```
```
("a", ".txt")
```

## Get file size
`op.getsize()`
单位: 字节

## Get file path
`op.dirname()`

## Get absolute path of file or directory
`op.abspath()`

## Get file name
`op.basename()`
```py
print(op.basename("a.txt"))
```
```
a.txt
```

## Get timestamp associated with file
### Last created
`op.ctime()`
### Last modified
`op.mtime()`
### Last accessed
`op.getatime()` 

## Check whether it is directory
`op.isdir()`

## Check whether file or directory exists
`op.exists()`

## Check whether it is absolute path
`op.isabs()`
