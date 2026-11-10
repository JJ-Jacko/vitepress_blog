[靈感來源](/translated/zh_hk/linux/service/service_configuration)

[參考資料](https://jellyfin.org/downloads/linux)：官方文件。

[Jellyfin](https://github.com/jellyfin/jellyfin) 係一個用嚟託管個人電影同音樂嘅開源項目。


## 安裝
### 顯示卡驅動程式
* [Nvidia](/translated/zh_hk/linux/system/nvidia_driver) 顯示卡驅動程式安裝。
### FFmpeg
解碼同編碼都需要 [FFmpeg](https://ffmpeg.org)。
```sh
sudo apt install ffmpeg
```
### Jellyfin
```sh
curl -s https://repo.jellyfin.org/install-debuntu.sh | sudo bash
```
