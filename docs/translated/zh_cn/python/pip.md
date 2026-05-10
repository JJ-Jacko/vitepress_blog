---
title: pip
date: 2024/05/04 13:03
location: 东莞
tags: 原创 Python
---

## 原版
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

## UV
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
