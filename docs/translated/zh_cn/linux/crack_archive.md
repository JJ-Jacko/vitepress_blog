# 破解压缩包
* 📅 `2024/08/04 11:56` 
* 📍 `东莞`
* 🏷️ `原创` `Linux`

## 安装
john the ripper
```sh
sudo apt install john
```
hashcat
```sh
sudo apt install hashcat
```


## 获取哈希
获取指定压缩包的哈希值
```sh
zip2john test.zip
```
输出
```
ver 2.0 test.zip/test.txt PKZIP Encr: cmplen=29, decmplen=17, crc=F462895B ts=5B4C cs=f462 type=0
test.zip/test.txt:$pkzip$1*1*2*0*1d*11*f462895b*0*26*0*1d*f462*beff1035c30f31b09c7831de970b3e76e48e63985da3ffc1804786c2bd*$/pkzip$:test.txt:test.zip::test.zip
```
哈希值则为: `$pkzip$1*1*2*0*1d*11*f462895b*0*26*0*1d*f462*beff1035c30f31b09c7831de970b3e76e48e63985da3ffc1804786c2bd*`

## 破解
* 单个哈希
```sh
hashcat -a 3 -m 17225 '$pkzip$1*1*2*0*1d*11*f462895b*0*26*0*1d*f462*beff1035c30f31b09c7831de970b3e76e48e63985da3ffc1804786c2bd*'
```
* 哈希值列表文件
```sh
hashcat -a 3 -m 17225 [哈希值列表文件]
```
