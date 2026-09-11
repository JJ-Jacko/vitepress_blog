---
title: Jellyfin
date: 2026/09/05 19:12
location: Dongguan
tags: Original Linux
---

[Inspiration](/linux/service_configuration)

[Reference](https://jellyfin.org/downloads/linux): Official document.

[Jellyfin](https://github.com/jellyfin/jellyfin) is a open source project
about personal movies, musics hosting.

## Installation
### GPU driver
* [Nvidia](/linux/nvidia_driver) GPU driver installation.
### FFmpeg
Decode and encode require [FFmpeg](https://ffmpeg.org).
```sh
sudo apt install ffmpeg
```
### Jellyfin
```sh
curl -s https://repo.jellyfin.org/install-debuntu.sh | sudo bash
```
