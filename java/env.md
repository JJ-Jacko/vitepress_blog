::: tip Recommend
* WSL
* IDE: VSCode
* Extension: [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
:::

## Linux (Debian / Ubuntu)
### Install JDK
```sh
sudo apt install openjdk-21-jdk
```
```sh
sudo apt install openjdk-25-jdk
```
### Switch Java version
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
### Install JDK
Download *Temurin JDK* from [Adoptium](https://adoptium.net/temurin/releases).
### Configure environment veriables
[Details](/other/powershell#environment-variables)
```powershell
$env:JAVA_HOME = "$env:ProgramFiles\Java\jdk-25"

$my_paths = @(
    ...
    
    "$env:JAVA_HOME\bin",
)
```
