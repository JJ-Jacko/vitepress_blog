## 入 BIOS 改為 UEFI 模式
## DiskGenius 建立 UEFI 樣式分區
### 建立 300 MB 嘅 ESP/MSR 分區
### 設定此分區為 A 磁碟機
## 移植啟動檔案為 UEFI 樣式
```sh
mkdir -p A:\EFI\Microsoft\Boot
```
```sh
cp C:\Windows\Boot\EFI\* A:\EFI\Microsoft\Boot
```
```sh
cp A:\EFI\Microsoft\Boot\bootmgfw.efi A:\EFI\boot\bootX64.efi
```
## Bootice 編輯引導檔案
![](/assets/other/legacy_to_uefi/settings.png)
### BCD編輯 > 新建BCD > `A:\EFI\Microsoft\Boot` > 智能編輯模式
### 添加 > 新建 > Windows 7 / 8 / 8.1 啟動項
### 啟動裝置（啟動磁碟、啟動分區）
* 裝置類型: 分區
* 啟動磁碟:
* 啟動分區:
### 設定
* 選單標題: Windows
* 啟動檔案: `\Windows\system32\winload.efi`
