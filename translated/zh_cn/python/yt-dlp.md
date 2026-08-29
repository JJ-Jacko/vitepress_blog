---
title: yt-dlp 基本使用
date: 2024/04/20 10:51
location: 东莞
tags: 原创 Python
---

## 一键使用
```sh
yt-dlp --cookies .\cookie.txt [url]
```

## 参数详解
### 视频格式
列出所有的音频和视频信息
```sh
-F
```
指定音频、视频 id
```sh
-f[音频id]+[视频id]
```
### Cookies
从文件获取
```sh
--cookies .\cookies.txt
```
从浏览器获取
```sh
--cookies-from-browser edge
```
### 字幕
列出所有字幕信息
```sh
--list-subs
```
下载字幕文件
```sh
--skip-download --write-auto-subs --sub-langs "zh-Hans" --convert-sub srt
```

### 列出所有的缩略图信息
```sh
--list-thumbnails
```

### 使用代理
```sh
--proxy socks5://localhost:10808
```
