## 安装 kernel 对应 headers
[详情](/translated/zh_cn/linux/system/upgrade_kernel&headers)

## 安装驱动
```sh
apt install realtek-rtl88xxau-dkms
```

## 查看能否监听
```sh
airmon-ng start wlan0
```

## 扫描
```sh
airodump-ng wlan0
```

## 抓包
```sh
airodump-ng -c [CH] --bssid [BSSID] -w <PATH/handshake> wlan0
```
