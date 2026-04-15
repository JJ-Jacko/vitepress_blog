# Crack archive
* 📅 `2024/08/04 11:56` 
* 📍 `Dongguan`
* 🏷️ `Original` `Linux`

## Install
john the ripper
```sh
sudo apt install john
```
hashcat
```sh
sudo apt install hashcat
```


## Get hash value
Get the hash value of the specified compressed file
```sh
zip2john test.zip
```
Output
```
ver 2.0 test.zip/test.txt PKZIP Encr: cmplen=29, decmplen=17, crc=F462895B ts=5B4C cs=f462 type=0
test.zip/test.txt:$pkzip$1*1*2*0*1d*11*f462895b*0*26*0*1d*f462*beff1035c30f31b09c7831de970b3e76e48e63985da3ffc1804786c2bd*$/pkzip$:test.txt:test.zip::test.zip
```
The hash value is: `$pkzip$1*1*2*0*1d*11*f462895b*0*26*0*1d*f462*beff1035c30f31b09c7831de970b3e76e48e63985da3ffc1804786c2bd*`

## Crack
* Single hash value
```sh
hashcat -a 3 -m 17225 '$pkzip$1*1*2*0*1d*11*f462895b*0*26*0*1d*f462*beff1035c30f31b09c7831de970b3e76e48e63985da3ffc1804786c2bd*'
```
* Hash value list file
```sh
hashcat -a 3 -m 17225 [hash value list file]
```
