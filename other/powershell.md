---
title: PowerShell
date: 2026/09/02 15:25
location: Dongguan
tags: Original Windows PowerShell shell
---

[PowerShell](https://github.com/powershell/powershell)
make up unix-like command experience for Windows users.

## Execution policy
Run the PowerShell as **administrator** and execute following command.
```powershell
Set-ExecutionPolicy RemoteSigned
```

## File path
Configuration file path is also in `~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`.

## Shell layout
In daily development, user also type a longer command in the Shell.
But there are too many information in single line for the PowerShell default layout.
```powershell
PS C:\Users\l2982\Desktop> get-ComputerInfo
```
We can let the path and other information in first line
and let command input box in second line.
At the same time, let the commands and path color different about the program outs.
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

## Command alias
```powershell [Microsoft.PowerShell_profile.ps1]
Set-Alias ip ipconfig
Set-Alias python "python3.14"
```

## Environment variables
::: warning
The environment variables will be active **ONLY in PowerShell session**.
If you want to configure environment variables for programs to access,
please using [traditional method](/linux/env_var#traditional-method).
:::
### Programs root DIR
```powershell [Microsoft.PowerShell_profile.ps1]
$env:UserHome = "C:\Users\Jacko"
$env:UserPrograms = "$env:UserHome\AppData\Local\Programs"
```
### Programs home DIR
```powershell [Microsoft.PowerShell_profile.ps1]
$env:JAVA_HOME = "$env:ProgramFiles\Java\jdk-25"
```
### Custom DIR
```powershell [Microsoft.PowerShell_profile.ps1]
$my_paths = @(
    "$env:JAVA_HOME\bin",
    "$env:UserPrograms\node"
)
```
### Add to Env variables
```powershell [Microsoft.PowerShell_profile.ps1]
$env:PATH += ";"
foreach ($path in $my_paths) {
    if (Test-Path $path) {
        $env:PATH += "$path;"
    }
}
```

## Function
PowerShell functions also are used to the short command.
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
Then you can use command `rmssh` and `oplist` directly.
