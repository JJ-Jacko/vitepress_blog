---
title: Pack Jar
date: 2025/12/12 11:55
location: Dongguan
tags: Original Java
---

## Compile
```sh
javac -d out --source-path src
```
## Packing
```sh
jar -c -v -f test.jar -e Mian -C .\out .
```
