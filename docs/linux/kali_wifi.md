# Kali 嗅探 Wi-Fi
* 📅 `2025/12/12 14:13` 
* 📍 `东莞`
* 🏷️ `原创` `Linux` `Kali`

## 安装 kernel 对应 headers
```sh
uname -r
apt list --installed |grep linux-image
apt search linux-image
apt install linux-headers-*
```

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
