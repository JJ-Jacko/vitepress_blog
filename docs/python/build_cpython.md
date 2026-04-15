# Build Cpython from source code
* 📅 `2024/11/22 12:42` 
* 📍 `Dongguan`
* 🏷️ `Original` `Python`

## Get Cpython source code
```sh
git clone https://github.com/python/cpython.git
```
Switch to the version you are in need of, based on your situation
```sh
git checkout [commit_id]
```

## Dependence
Ready to install
```sh
sudo apt install pkg-config libbz2-dev libdb-dev libffi-dev libncurses5-dev libgdbm-dev liblzma-dev tk-dev uuid-dev libreadline-dev zlib1g-dev libssl-dev
```
### Missing details
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
| Lib | Package |
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

## Configure
```sh
./configure
    --prefix=/usr/local/python \
    --enable-optimizations \
    --with-lto \
    --enable-shared
```
* Install path: `--prefix`
* Performance optimization: `--enable-optimizations` `--with-lto`
* Common libs connection: `--enable-shared`

## Build
```sh
make
```

## Install
```sh
make install
```
`~/.zshrc`
```sh
# Python
export	PATH=$PATH:/usr/local/python/bin
export	PATH=$PATH:~/.local/bin 
```
