# yt-dlp basic usage
* 📅 `2024/04/20 10:51` 
* 📍 `Dongguan`
* 🏷️ `Original` `Python`

## Ready to use
```sh
yt-dlp --cookies .\cookie.txt [url]
```

## Param details
### Video formate
List all audio and video information
```sh
-F
```
Specify audio id or video id
```sh
-f[audio-id]+[vidio-id]
```
### Cookies
From file
```sh
--cookies .\cookies.txt
```
From browser
```sh
--cookies-from-browser edge
```
### Subtitle
List all information of subtitle
```sh
--list-subs
```
Download subtitle file
```sh
--skip-download --write-auto-subs --sub-langs "zh-Hans" --convert-sub srt
```

### List all information of thumbnails
```sh
--list-thumbnails
```

### Proxy
```sh
--proxy socks5://localhost:10808
```
