## 安裝對應 Kernel 嘅 Headers
[詳情](/translated/zh_hk/linux/system/upgrade_kernel&headers)

## 安裝驅動程式
```sh
apt install realtek-rtl88xxau-dkms
```

## 檢查可唔可以監聽
```sh
airmon-ng start wlan0
```

## 掃描
```sh
airodump-ng wlan0
```

## Packet Capture
```sh
airodump-ng -c [CH] --bssid [BSSID] -w <PATH/handshake> wlan0
```
