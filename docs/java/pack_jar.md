# Jar 打包
* 📅 `2025/12/12 11:55` 
* 📍 `东莞`
* 🏷️ `原创` `Java`

## 编译
```sh
javac -d out --source-path src
```
## 打包
```sh
jar -c -v -f test.jar -e Mian -C .\out .
```
