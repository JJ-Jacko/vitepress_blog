# Git 基本使用
* 📅 `2025/12/11 00:05` 
* 📍 `东莞`
* 🏷️ `原创` `Git`

## 初次使用
### 设置用户名
```sh
git config --global user.name "用户名"
```
### 设置邮箱
```sh
git config --global user.email "邮箱"
```

## 新项目
### 初始化
```sh
git init
```
### 选中需要提交的文件
```sh
git add [文件名]
```
### 提交
```sh
git commit -m "[备注内容]"
```

## 查看提交记录
### 所有提交大致内容
* commit id
* 分支
* 作者名称
* 作者邮箱
* 日期
* 备注
```sh
git log
```
### 所有提交详细内容
相比 `git log` 额外多
* 被增删改的文件名
* 被增删改的文件行数或大小
```sh
git log --stat
```
### 指定的提交具体修改内容
```sh
git diff [commit_id]
```

## 回溯
### 常规
```sh
git checkout [commit_id]
```
### 强制
当 `git log` 看不到有记录时使用
```sh
git reset --hard [commit_id]
```

## 分支
### 查看分支
```sh
git branch
```
### 创建分支
```sh
git checkout -b [分支名称]
```
### 切换分支
```sh
git checkout [分支名称]
```
### 合并分支
```sh
git merge [分支名称]
```

## 远端
### 查看云端
```sh
git remote
```
### 添加远端
```sh
git remote add [远端名称] [url]
```
### 推送到远端
```sh
git push [远端名称] [分支名称]
```

## 设置代理
```sh
git config --global http.proxy "socks5://127.0.0.1:10808"
git config --global https.proxy "socks5://127.0.0.1:10808"
```
