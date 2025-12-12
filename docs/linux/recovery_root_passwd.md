# 恢复 root 密码
* 📅 `2024/05/12 12:20` 
* 📍 `东莞`
* 🏷️ `原创` `Linux`

## 进入 grub 编辑模式
持续按 `方向键` 停在此界面

按 `e` 编辑
![](/images/recovery_root_passwd/grub.png)

## 临时编辑启动模式
追加 `init=/bin/sh`
![](/images/recovery_root_passwd/grub_edit.png)

## 进入 shell
挂载根目录
```sh
mount -o remount,rw /
```
改 root 用户的密码
```sh
passwd
```
创建 `/.autorelabel` 文件
```sh
touch /.autorelabel
```
执行init
```sh
exec /sbin/init
```
![](/images/recovery_root_passwd/shell.png)

## 等待重启进系统
![](/images/recovery_root_passwd/reboot.png)
