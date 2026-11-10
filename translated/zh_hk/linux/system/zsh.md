## 安裝
::: code-group
```sh [Arch]
sudo pacman -S zsh zsh-completions
```
```sh [Debian / Ubuntu]
sudo apt install zsh
```
:::

## 設定
查看目前嘅 shell
```sh
echo $SHELL
```
更改用戶嘅預設 shell
```sh
chsh -s /bin/zsh [用户名]
```
安裝 `oh-my-zsh`
```sh
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
## Plugin
取得 plugin 嘅程式碼
```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
加入對應嘅 plugin 名稱
```sh [~/.zshrc]
plugins=(zsh-syntax-highlighting)
```
