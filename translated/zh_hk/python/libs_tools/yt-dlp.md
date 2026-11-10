## 一鍵使用
```sh
yt-dlp --cookies .\cookie.txt [url]
```

## 參數詳解
### 影片格式
列出所有音訊及影片資訊
```sh
-F
```
指定音訊 id 或影片 id
```sh
-f[音訊id]+[影片id]
```
### Cookies
從檔案取得
```sh
--cookies .\cookies.txt
```
從瀏覽器取得
```sh
--cookies-from-browser edge
```
### 字幕
列出所有字幕資訊
```sh
--list-subs
```
下載字幕檔案
```sh
--skip-download --write-auto-subs --sub-langs "zh-Hans" --convert-sub srt
```

### 列出所有縮圖資訊
```sh
--list-thumbnails
```

### 使用代理
```sh
--proxy socks5://localhost:10808
```
