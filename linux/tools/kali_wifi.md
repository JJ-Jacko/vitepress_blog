## Install kernel headers
[Details](/linux/system/upgrade_kernel&headers)

## Install driver
```sh
apt install realtek-rtl88xxau-dkms
```

## Check if it can listening
```sh
airmon-ng start wlan0
```

## Scan
```sh
airodump-ng wlan0
```

## Packet capture
```sh
airodump-ng -c [CH] --bssid [BSSID] -w <PATH/handshake> wlan0
```
