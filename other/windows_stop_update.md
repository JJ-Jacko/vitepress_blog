---
title: Windows Stop Update
date: 2026/04/18 11:40
location: Dongguan
tags: Original Windows
---

## Set Windows update max pause days
```powershell
Set-ItemProperty `
    -Path "HKLM:\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" `
    -Name "FlightSettingsMaxPauseDays" `
    -Value 3600 `
    -Type DWord
```

## Set Windows update pause days
Settings > Windows Update > Pause updates

You can set a enough long day to pause updates.
You can resume updates at any time if needed.
![](/assets/other/windows_stop_update/settings.jpg)