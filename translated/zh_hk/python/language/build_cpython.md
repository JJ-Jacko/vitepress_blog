## 取得 Cpython 源碼
```sh
git clone https://github.com/python/cpython.git
```
按需要切換到合適版本
```sh
git checkout [commit_id]
```

## 依賴
一鍵安裝
```sh
sudo apt install pkg-config libbz2-dev libdb-dev libffi-dev libncurses5-dev libgdbm-dev liblzma-dev tk-dev uuid-dev libreadline-dev zlib1g-dev libssl-dev
```
### 缺少依賴項詳情
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
| 函式庫 | 套件 |
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

## 設定
```sh
./configure
    --prefix=/usr/local/python \
    --enable-optimizations \
    --with-lto \
    --enable-shared
```
* 安裝路徑：`--prefix`
* 效能優化：`--enable-optimizations` `--with-lto`
* 共用函式庫連結：`--enable-shared`

## 建置
```sh
make
```

## 安裝
```sh
make install
```
`~/.zshrc`
```sh
# Python
export	PATH=$PATH:/usr/local/python/bin
export	PATH=$PATH:~/.local/bin 
```
