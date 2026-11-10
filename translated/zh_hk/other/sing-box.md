[sing-box](https://github.com/SagerNet/sing-box) 係一個關於代理伺服器同客戶端嘅開源項目


## 伺服器端
[呢部分嘅 DIY proxy](/translated/zh_hk/other/diy_proxy)

## 客戶端
由於 sing-box 官方更新比較激進，
好多機場透過訂閱派發嘅 sing-box 設定檔，實際上已經太過陳舊，
有唔少設定唔恰當嘅地方，難以滿足正常使用高效代理工具 sing-box，同埋應付唔同使用場景嘅需求。
項目 [sb_cfg_gen](https://github.com/JJ-Jacko/sb_cfg_gen) 透過自動取得或者匯入節點資料，再配合高度可自訂嘅模板生成 `sing-box` 設定檔，
適用於客戶端、伺服器同爬蟲代理等多種場景。

### App (推薦)
Support for `Windows`, `Android`, `Mac`, `iOS` GUI client.

URL:
```
example.com/sb_cfg
```

### 內核
Support for `Linux`, `Windows` CLI client.

URL:
```
example.com/sb_cfg?client=cli-win
example.com/sb_cfg?client=cli-linux
```
#### 針對 Linux 嘅服務
TODO
