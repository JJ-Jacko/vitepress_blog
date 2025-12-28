# pip
* 📅 `2024/05/04 13:03` 
* 📍 `Dongguan`
* 🏷️ `Original` `Python`

## Configure
Temporary
```sh
pip install -i http://mirrors.tencent.com/pypi/simple some-package
```
Persistent
```ini [~/pip/pip.ini]
[global]
index-url = http://mirrors.tencent.com/pypi/simple/

[install]
trusted-host=mirrors.tencent.com
```

## Upgrade
```sh
python -m pip install --upgrade pip
```
