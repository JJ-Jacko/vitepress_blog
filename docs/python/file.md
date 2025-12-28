# File
* 📅 `2024/05/28 10:22` 
* 📍 `Dongguan`
* 🏷️ `Original` `Python`

## Mode
`r` / `w` / `a` / `x` + `t` / `b`
### Read
* `r` (Default)
### Write
* `w` Overwrite file content
* `a` Appended at the end
* `x` Create a new file to write content, raise error when the file exists
### File type
* `t` Palin text (Default)
* `b` Binary
### Example
`rt` `rb` `at` `ab`

## Read
### Plain text
#### Legacy writting
Open file
```py
f = open("text.txt")
```
Read the file content and assign them to text
```py
text = f.read()
```
Close file
```py
f.close()
```
#### `with` structure writting
```py
with open("text.txt") as f:
    text = f.read()
```
### Not plain text
```py
with open("photo.png", "rb") as f:
    data = f.read()
```

## Write
### Palin text
#### Write by binary mode
```py
with open("text.txt", "wb") as f:
    f.write("Hello".encode())
```
#### Write by text mode
```py
with open("text.txt", "wt") as f:
    f.write("Hello")
```

### Not palin text
Equivalent to copy `photo_1.jpg` to `photo_2.jpg`
```py
with open("photo_1.jpg", "rb") as f:
    data = f.read()

with open("photo_2.jpg", "wb") as f:
    f.write(data)
```
