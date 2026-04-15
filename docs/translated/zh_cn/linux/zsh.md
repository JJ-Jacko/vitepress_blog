# zsh
* 📅 `2024/08/31 00:25` 
* 📍 `东莞`
* 🏷️ `原创` `Linux`


## 安装
::: code-group
```sh [Arch]
sudo pacman -S zsh zsh-completions
```
```sh [Debian / Ubuntu]
sudo apt install zsh
```
:::

## 配置
查看当前 shell
```sh
echo $SHELL
```
改变用户默认 shell
```sh
chsh -s /bin/zsh [用户名]
```
安装 `oh-my-zsh`
```sh
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
## 插件
获取插件代码
```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
增加相应插件名称
```sh [~/.zshrc]
plugins=(zsh-syntax-highlighting)
```
