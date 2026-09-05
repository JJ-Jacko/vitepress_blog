---
title: Jellyfin
date: 2026/09/05 19:12
location: 东莞
tags: 原创 Linux
---

[灵感来源](/linux/service_configuration)

[引用](https://jellyfin.org/downloads/linux): 官方文档。

[Jellyfin](https://github.com/jellyfin/jellyfin) 是一个有关个人电影、音乐托管的开源项目。


## 安装
### 显卡驱动
* [英伟达](/translated/zh_cn/linux/nvidia_driver) 显卡安装。
### FFmpeg
解码和编码需要 [FFmpeg](https://ffmpeg.org)。
```sh
sudo apt install ffmpeg
```
### Jellyfin
```sh
curl -s https://repo.jellyfin.org/install-debuntu.sh | sudo bash
```
