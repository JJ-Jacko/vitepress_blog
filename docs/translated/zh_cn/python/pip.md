# pip
* 📅 `2024/05/04 13:03` 
* 📍 `东莞`
* 🏷️ `原创` `Python`

## 配置
临时
```sh
pip install -i http://mirrors.tencent.com/pypi/simple some-package
```
长期
```ini [~/pip/pip.ini]
[global]
index-url = http://mirrors.tencent.com/pypi/simple/

[install]
trusted-host=mirrors.tencent.com
```

## 更新
```sh
python -m pip install --upgrade pip
```
