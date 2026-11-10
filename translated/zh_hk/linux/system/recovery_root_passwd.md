## 進入 GRUB 編輯模式
長按方向鍵 <kbd>↑</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>，停留喺呢個畫面

按 <kbd>E</kbd> 鍵編輯
![](/assets/linux/recovery_root_passwd/grub.png)

## 暫時編輯啟動模式
加入 `init=/bin/sh`
![](/assets/linux/recovery_root_passwd/grub_edit.png)

## 進入 shell
掛載根目錄
```sh
mount -o remount,rw /
```
更改 root 用戶嘅密碼
```sh
passwd
```
建立 `/.autorelabel` 檔案
```sh
touch /.autorelabel
```
執行 init
```sh
exec /sbin/init
```
![](/assets/linux/recovery_root_passwd/shell.png)

## 等候系統重新開機
![](/assets/linux/recovery_root_passwd/reboot.png)
