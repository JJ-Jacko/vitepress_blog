## 設定 Swap
```
TODO
```

## 設定 GRUB
加入以下參數
```properties [/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="resume=UUID=a1b2c3d4-5678-90ab-cdef-1234567890ab"
```
```sh
update-grub
update-initramfs -u
```

## 設定 Resume
```properties [/etc/initramfs-tools/conf.d/resume]
RESUME=UUID=a1b2c3d4-5678-90ab-cdef-1234567890ab
```
```sh
update-initramfs -u
```

## 設定電源掣為休眠（可選）
```properties [/etc/systemd/logind.conf]
HandlePowerKey=hibernate
```
```sh
systemctl restart systemd-logind
```
