[PowerShell](https://github.com/powershell/powershell)
為 Windows 用戶打造類似 Unix 嘅命令行體驗。

## 執行原則
以**管理員**身分執行 PowerShell，並執行以下命令。
```powershell
Set-ExecutionPolicy RemoteSigned
```

## 檔案路徑
設定檔嘅路徑通常喺 `~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`。

## Shell 佈局
日常開發嘅時候，用戶通常會喺 Shell 入面輸入比較長嘅命令。
但係 PowerShell 嘅預設佈局，單行嘅資訊實在太多。
```powershell
PS C:\Users\l2982\Desktop> get-ComputerInfo
```
我哋可以將路徑同其他資訊放喺第一行，
再將命令輸入框放喺第二行。
同時，令命令同路徑嘅顏色同程式輸出有分別。
```powershell [Microsoft.PowerShell_profile.ps1]
$env:VIRTUAL_ENV_DISABLE_PROMPT = 1
function prompt {
    $venv = if ($env:VIRTUAL_ENV) { "($env:VIRTUAL_ENV_PROMPT) " } else { "" }
    Write-Host $venv -ForegroundColor Yellow -NoNewline
    Write-Host $PWD.Path -ForegroundColor Green
    "> "
}
```
```powershell
C:\Users\l2982\Desktop
> Get-ComputerInfo
```

## 命令別名
```powershell [Microsoft.PowerShell_profile.ps1]
Set-Alias ip ipconfig
Set-Alias python "python3.14"
```

## 環境變數
::: warning 警告
環境變數**只會喺 PowerShell 實例入面**生效。
如果你想為程式設定環境變數以便存取，
請使用[傳統方法](/translated/zh_hk/linux/system/env_var#傳統方法)。
:::
### 程式根資料夾
```powershell [Microsoft.PowerShell_profile.ps1]
$env:UserHome = "C:\Users\Jacko"
$env:UserPrograms = "$env:UserHome\AppData\Local\Programs"
```
### 程式家資料夾
```powershell [Microsoft.PowerShell_profile.ps1]
$env:JAVA_HOME = "$env:ProgramFiles\Java\jdk-25"
```
### 自訂資料夾
```powershell [Microsoft.PowerShell_profile.ps1]
$my_paths = @(
    "$env:JAVA_HOME\bin",
    "$env:UserPrograms\node"
)
```
### 加入環境變數
```powershell [Microsoft.PowerShell_profile.ps1]
$env:PATH += ";"
foreach ($path in $my_paths) {
    if (Test-Path $path) {
        $env:PATH += "$path;"
    }
}
```

## 函數
PowerShell 函數通常用嚟做短命令。
```powershell [Microsoft.PowerShell_profile.ps1]
function rmssh {
    rm "~\.ssh\known_hosts"
    rm "~\.ssh\known_hosts.old"
    echo "ssh hosts file removed!"
}
```
```powershell [Microsoft.PowerShell_profile.ps1]
function oplist {
    Push-Location "$env:UserPrograms\oplist"
    try {
        .\openlist server
    }
    finally {
        Pop-Location
    }
}
```
之後你就可以直接使用命令 `rmssh` 同 `oplist`。
