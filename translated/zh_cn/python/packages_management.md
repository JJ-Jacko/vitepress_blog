---
title: 包管理
date: 2024/05/04 13:03
location: 东莞
tags: 原创 Python
---

## uv (✨ 推荐)
### 配置
::: code-group
```ini [(Linux) ~/.config/uv/uv.toml]
[[index]]
url = "https://mirrors.tencent.com/pypi/simple/"
default = true
```
```ini [(Windows) %APPDATA%\uv\uv.toml]
[[index]]
url = "https://mirrors.tencent.com/pypi/simple/"
default = true
```
:::
### 更新
```sh
uv self update
```

## pip
### 配置
```ini [(Linux / Windows) ~/pip/pip.ini]
[global]
index-url = https://mirrors.tencent.com/pypi/simple/

[install]
trusted-host=mirrors.tencent.com
```
### 更新
```sh
python -m pip install --upgrade pip
```
