---
title: Windows 停止更新
date: 2026/04/18 11:40
location: 东莞
tags: 原创 Windows
---

## 设置 Windows 更新最大暂停天数
```powershell
Set-ItemProperty `
    -Path "HKLM:\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" `
    -Name "FlightSettingsMaxPauseDays" `
    -Value 3600 `
    -Type DWord
```

## 设置 Windows 更新暂停天数
设置 > Windows 更新 > 暂停更新

你可以设置一个足够长的天数来暂停更新。
如果需要，你可以随时恢复更新。
![](/assets/other/windows_stop_update/settings.jpg)