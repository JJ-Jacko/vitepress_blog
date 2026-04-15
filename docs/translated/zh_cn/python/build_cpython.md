# 从源码构建 Cpython
* 📅 `2024/11/22 12:42` 
* 📍 `东莞`
* 🏷️ `原创` `Python`

## 获取 Cpython 源码
```sh
git clone https://github.com/python/cpython.git
```
根据自身情况切换到想要的版本
```sh
git checkout [commit_id]
```

## 依赖
一键安装
```sh
sudo apt install pkg-config libbz2-dev libdb-dev libffi-dev libncurses5-dev libgdbm-dev liblzma-dev tk-dev uuid-dev libreadline-dev zlib1g-dev libssl-dev
```
### 缺少详情
1. `pkg-config`
```
configure: WARNING: pkg-config is missing. Some dependencies may not be detected correctly.
```
2. `libssl-dev`
```
Could not build the ssl module!
Python requires a OpenSSL 1.1.1 or newer
```
3. 
| 库 | 软件包 |
| :-: | :-: |
| _bz2 | libbz2-dev |
| _dbm | libdb-dev |
| _ctypes | libffi-dev |
| _ctypes_test | |
| _curses | libncurses5-dev |
| _curses_panel | |
| _gdbm | libgdbm-dev |
| _lzma | liblzma-dev |
| _tkinter | tk-dev |
| _uuid | uuid-dev |
| readline | libreadline-dev |
| zlib | zlib1g-dev |
| _ssl | libssl-dev |
| _hashlib | |
```
The necessary bits to build these optional modules were not found:
_bz2                  _ctypes               _ctypes_test
_curses               _curses_panel         _dbm
_gdbm                 _lzma                 _tkinter
_uuid                 readline              zlib
```

## 配置
```sh
./configure
    --prefix=/usr/local/python \
    --enable-optimizations \
    --with-lto \
    --enable-shared
```
* 安装路径: `--prefix`
* 性能优化: `--enable-optimizations` `--with-lto`
* 共用库链接: `--enable-shared`

## 构建
```sh
make
```

## 安装
```sh
make install
```
`~/.zshrc`
```sh
# Python
export	PATH=$PATH:/usr/local/python/bin
export	PATH=$PATH:~/.local/bin 
```
