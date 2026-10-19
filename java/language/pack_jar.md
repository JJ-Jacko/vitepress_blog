## Compile
```sh
javac -d out --source-path src
```
## Packing
```sh
jar -c -v -f test.jar -e Mian -C .\out .
```
