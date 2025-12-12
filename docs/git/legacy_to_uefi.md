# Legacy 无损转 UEFI
* 📅 `2025/12/12 11:50` 
* 📍 `东莞`
* 🏷️ `原创` `Windows`

## 进 BIOS 改为 UEFI 模式
## DiskGenius 建立 UEFI 样式分区
### 建立 300 MB 的 ESP/MSR 分区
### 设置此分区为 A 盘
## 移植启动文件为 UEFI 样式
```sh
mkdir -p A:\EFI\Microsoft\Boot
```
```sh
cp C:\Windows\Boot\EFI\* A:\EFI\Microsoft\Boot
```
```sh
cp A:\EFI\Microsoft\Boot\bootmgfw.efi A:\EFI\boot\bootX64.efi
```
## Bootice 编辑引导文件
![](/images/legacy_to_uefi.png)
### BCD编辑 > 新建BCD > `A:\EFI\Microsoft\Boot` > 智能编辑模式
### 添加 > 新建 > Windows 7 / 8 / 8.1 启动项
### 启动设备（启动磁盘、启动分区）
* 设备类型: 分区
* 启动磁盘:
* 启动分区:
### 设置
* 菜单标题: Windows
* 启动文件: `\Windows\system32\winload.efi`
