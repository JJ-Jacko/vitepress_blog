## 初次使用
### 設定用戶名稱
```sh
git config --global user.name "用戶名稱"
```
### 設定電郵
```sh
git config --global user.email "電郵"
```

## 新項目
### 初始化
```sh
git init
```
### 揀選需要提交嘅檔案
```sh
git add [檔案名稱]
```
### 提交
```sh
git commit -m "[備註內容]"
```

## 查看提交記錄
### 所有提交嘅大致內容
* commit id
* 分支
* 作者名稱
* 作者電郵
* 日期
* 備註
```sh
git log
```
### 所有提交嘅詳細內容
相比 `git log` 額外多
* 被新增、刪除、修改嘅檔案名稱
* 被新增、刪除、修改嘅檔案行數或者大小
```sh
git log --stat
```
### 指定提交嘅具體修改內容
```sh
git diff [commit_id]
```

## 回溯
### 常規
```sh
git checkout [commit_id]
```
### 強制
當 `git log` 睇唔到有記錄時使用
```sh
git reset --hard [commit_id]
```

## 分支
### 查看分支
```sh
git branch
```
### 建立分支
```sh
git checkout -b [分支名稱]
```
### 切換分支
```sh
git checkout [分支名稱]
```
### 合併分支
```sh
git merge [分支名稱]
```

## 遠端
### 查看雲端
```sh
git remote
```
### 新增遠端
```sh
git remote add [遠端名稱] [url]
```
### 推送到遠端
```sh
git push [遠端名稱] [分支名稱]
```

## 設定代理
```sh
git config --global http.proxy "socks5://127.0.0.1:10808"
git config --global https.proxy "socks5://127.0.0.1:10808"
```
