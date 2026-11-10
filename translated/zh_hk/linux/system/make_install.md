## 一般流程
設定
```sh
./configure --prefix=/usr/local/<PATH> --without-<MODULE.> 
```
編譯
```sh
make
```
安裝
```sh
make install
```
## 編譯 GCC 嘅例子
### 依賴
```sh
sudo apt install build-essential libgmp-dev libmpfr-dev libmpc-dev libisl-dev texinfo zlib1g-dev
```
### 設定
```sh
../configure --prefix=/usr/local/gcc \
    --with-pkgversion='glibc gcc V14.1.0' \
    --enable-checking=release \
    --enable-languages=c,c++ \
    --disable-multilib \
    --enable-bootstrap \
    --enable-threads=posix \
    --with-system-zlib \
    --with-gmp=$GMP_HOME \
    --with-mpfr=$MPFR_HOME \
    --with-mpc=$MPC_HOME
```
### 編譯
```sh
make -j$(nproc)
sudo make install
```
### 環境變數
```sh [~/.bashrc]
export GCC14_HOME=/usr/local/gcc
export PATH=$GCC14_HOME/bin:$PATH
export LD_LIBRARY_PATH=$GCC14_HOME/lib64:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=$GCC14_HOME/lib:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH=$GCC14_HOME/libexec:$LD_LIBRARY_PATH
export CPATH=$GCC14_HOME/include:$CPATH
export CC=$GCC14_HOME/bin/gcc
export CXX=$GCC14_HOME/bin/g++
```
