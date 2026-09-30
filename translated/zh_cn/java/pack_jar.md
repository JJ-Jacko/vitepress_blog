## 编译
```sh
javac -d out --source-path src
```
## 打包
```sh
jar -c -v -f test.jar -e Mian -C .\out .
```
