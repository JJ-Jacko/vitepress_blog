## 設定 Windows Update 最大暫停日數
```powershell
Set-ItemProperty `
    -Path "HKLM:\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" `
    -Name "FlightSettingsMaxPauseDays" `
    -Value 3600 `
    -Type DWord
```

## 設定 Windows Update 暫停日數
設定 > Windows Update > 暫停更新

你可以設定一個夠長嘅日數嚟暫停更新。
有需要嘅話，可以隨時恢復更新。
![](/assets/other/windows_stop_update/settings.jpg)