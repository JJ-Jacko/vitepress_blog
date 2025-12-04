# Linux 配置休眠
* 📅 `2025/07/18` 
* 📍 `深圳`
* 🏷️ `原创` `Linux`

## 配置 swap
```
TODO
```

## 配置 grub
`/etc/default/grub` 加上一下参数
```conf
GRUB_CMDLINE_LINUX_DEFAULT="resume=UUID=a1b2c3d4-5678-90ab-cdef-1234567890ab"
```
```sh
update-grub
update-initramfs -u
```

## 配置 resume
`/etc/initramfs-tools/conf.d/resume`
```conf
RESUME=UUID=a1b2c3d4-5678-90ab-cdef-1234567890ab
```
```sh
update-initramfs -u
```

## 配置 关机键为休眠（可选）
`/etc/systemd/logind.conf`
```conf
HandlePowerKey=hibernate
```
```sh
systemctl restart systemd-logind
```
