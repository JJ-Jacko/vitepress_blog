# Git
* 📅 `2024/08/31 00:09` 
* 📍 `Dongguan`
* 🏷️ `Original` `Git`

## First-time setup
### Set username
```sh
git config --global user.name "username"
```
### Set email
```sh
git config --global user.email "email"
```

## New project
### Initialize
```sh
git init
```
### Stage files to commit
```sh
git add [file_name]
```
### Commit
```sh
git commit -m "[message]"
```

## View commit history
### Summary of all commits
* commit id
* branch
* author name
* author email
* date
* message
```sh
git log
```
### Detailed commit history
Compared with `git log`, this also shows:
* changed file names
* changed line counts or file sizes
```sh
git log --stat
```
### Show changes for a specific commit
```sh
git diff [commit_id]
```

## Rollback
### Normal
```sh
git checkout [commit_id]
```
### Force reset
Use this when `git log` does not show the expected history.
```sh
git reset --hard [commit_id]
```

## Branches
### List branches
```sh
git branch
```
### Create a branch
```sh
git checkout -b [branch_name]
```
### Switch branch
```sh
git checkout [branch_name]
```
### Merge branch
```sh
git merge [branch_name]
```

## Remote
### List remotes
```sh
git remote
```
### Add a remote
```sh
git remote add [remote_name] [url]
```
### Push to remote
```sh
git push [remote_name] [branch_name]
```

## Configure proxy
```sh
git config --global http.proxy "socks5://127.0.0.1:10808"
git config --global https.proxy "socks5://127.0.0.1:10808"
```
