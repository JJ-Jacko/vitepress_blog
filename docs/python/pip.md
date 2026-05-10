---
title: pip
date: 2024/05/04 13:03
location: Dongguan
tags: Original Python
---

## Vanilla
### Configuration
```ini [(Linux / Windows) ~/pip/pip.ini]
[global]
index-url = https://mirrors.tencent.com/pypi/simple/

[install]
trusted-host=mirrors.tencent.com
```
### Upgrade
```sh
python -m pip install --upgrade pip
```

## UV
### Configuration
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
### Upgrade
```sh
uv self update
```
