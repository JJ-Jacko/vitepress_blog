::: tip 推荐
* WSL
* IDE: VSCode
* 插件: [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
:::

## Linux (Debian / Ubuntu)
### 安装 JDK
```sh
sudo apt install openjdk-21-jdk
```
```sh
sudo apt install openjdk-25-jdk
```
### 切换 Java 版本
```sh
sudo update-alternatives --config java
```
```txt [OUTPUT] 
There are 2 choices for the alternative java (providing /usr/bin/java).

  Selection    Path                                         Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-25-openjdk-amd64/bin/java   2511      auto mode
  1            /usr/lib/jvm/java-21-openjdk-amd64/bin/java   2111      manual mode
  2            /usr/lib/jvm/java-25-openjdk-amd64/bin/java   2511      manual mode

Press <enter> to keep the current choice[*], or type selection number: 1
update-alternatives: using /usr/lib/jvm/java-21-openjdk-amd64/bin/java to provide /usr/bin/java (java) in manual mode
```

## Windows
### 安装 JDK
从 [Adoptium](https://adoptium.net/temurin/releases) 下载 *Temurin JDK*。
### 配置环境变量
[详情](/translated/zh_cn/other/powershell#环境变量)
```powershell
$env:JAVA_HOME = "$env:ProgramFiles\Java\jdk-25"

$my_paths = @(
    ...
    
    "$env:JAVA_HOME\bin",
)
```
