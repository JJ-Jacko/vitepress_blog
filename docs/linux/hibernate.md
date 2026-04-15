# Linux Hibernate Configuration
* 📅 `2025/07/18` 
* 📍 `Shenzhen`
* 🏷️ `Original` `Linux`

## Configure swap
```
TODO
```

## Configure grub
加上一下参数
```properties [/etc/default/grub]
GRUB_CMDLINE_LINUX_DEFAULT="resume=UUID=a1b2c3d4-5678-90ab-cdef-1234567890ab"
```
```sh
update-grub
update-initramfs -u
```

## Configure resume
```properties [/etc/initramfs-tools/conf.d/resume]
RESUME=UUID=a1b2c3d4-5678-90ab-cdef-1234567890ab
```
```sh
update-initramfs -u
```

## Configure the power button to hibernate (optional)
```properties [/etc/systemd/logind.conf]
HandlePowerKey=hibernate
```
```sh
systemctl restart systemd-logind
```
