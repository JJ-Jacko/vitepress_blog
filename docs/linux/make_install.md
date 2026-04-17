---
title: Make install
date: 2024/07/26 23:46
location: Dongguan
tags: Original Linux gcc make
---

## General Process
Configuration
```sh
./configure --prefix=/usr/local/<PATH> --without-<MODULE.> 
```
Make
```sh
make
```
Install
```sh
make install
```
## Example of building gcc
### Dependence
```sh
sudo apt install build-essential libgmp-dev libmpfr-dev libmpc-dev libisl-dev texinfo zlib1g-dev
```
### Configuration
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
### Build
```sh
make -j$(nproc)
sudo make install
```
### Envronment variables
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
