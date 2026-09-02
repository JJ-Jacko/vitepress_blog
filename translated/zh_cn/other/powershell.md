---
title: PowerShell
date: 2026/09/02 15:25
location: 东莞
tags: 原创 Windows PowerShell shell
---

[PowerShell](https://github.com/powershell/powershell)
为 Windows 用户打造类似 Unix 的命令行体验。

## 运行策略
以**管理员**身份运行 PowerShell 并执行如下命令。
```powershell
Set-ExecutionPolicy RemoteSigned
```

## 文件路径
配置文件的路径一般在 `~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`。

## Shell 布局
在日常开发中，用户一般在 Shell 里输入较长的命令。
但是对于 PowerShell 的默认布局来说，单行的信息太多了。
```powershell
PS C:\Users\l2982\Desktop> get-ComputerInfo
```
我们可以让路径和其他信息在首行，
并让命令输入框在第二行。
与此同时，让命令和路径的颜色有别于程序的输出。
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

## 命令别名
```powershell [Microsoft.PowerShell_profile.ps1]
Set-Alias ip ipconfig
Set-Alias python "python3.14"
```

## 环境变量
::: warning
环境变量**仅在 PowerShell 实例中**生效。
如果你想要为程序配置环境变量以访问，
请使用[传统方法](/translated/zh_cn/linux/env_var#传统方法)。
:::
### 程序根文件夹
```powershell [Microsoft.PowerShell_profile.ps1]
$env:UserHome = "C:\Users\Jacko"
$env:UserPrograms = "$env:UserHome\AppData\Local\Programs"
```
### 程序家文件夹
```powershell [Microsoft.PowerShell_profile.ps1]
$env:JAVA_HOME = "$env:ProgramFiles\Java\jdk-25"
```
### 自定义文件夹
```powershell [Microsoft.PowerShell_profile.ps1]
$my_paths = @(
    "$env:JAVA_HOME\bin",
    "$env:UserPrograms\node"
)
```
### 添加至环境变量
```powershell [Microsoft.PowerShell_profile.ps1]
$env:PATH += ";"
foreach ($path in $my_paths) {
    if (Test-Path $path) {
        $env:PATH += "$path;"
    }
}
```

## 函数
PowerShell 函数一般被用作短命令。
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
然后你可以直接使用命令 `rmssh` 和 `oplist`。
