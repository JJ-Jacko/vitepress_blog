---
title: sing-box
date: 2026/09/18 08:33
location: 广州
tags: 原创 节点
---

[sing-box](https://github.com/SagerNet/sing-box) 是一款有关代理服务端和客户端的开源项目


## 服务端
[DIY proxy in this part](/translated/zh_cn/other/diy_proxy)

## 客户端
由于 sing-box 官方更新比较激进，
很多机场通过订阅下发的 sing-box 配置文件实质上过于陈旧，
有许多配置不得当的地方，难以满足正常使用高效代理工具 sing-box 及在不同使用场景的需求。
项目 [sb_cfg_gen](https://github.com/JJ-Jacko/sb_cfg_gen) 通过自动获取或导入节点数据，并结合高度可定制的模板生成 `sing-box` 配置文件，
适用于客户端、服务器及爬虫代理等多种场景。

### App (推荐)
Support for `Windows`, `Android`, `Mac`, `iOS` GUI client.

URL:
```
example.com/sb_cfg
```

### 内核
Support for `Linux`, `Windows` CLI client.

URL:
```
example.com/sb_cfg?client=cli-win
example.com/sb_cfg?client=cli-linux
```
#### 面向 Linux 的服务
TODO
