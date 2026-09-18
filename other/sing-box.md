---
title: sing-box
date: 2026/09/18 08:33
location: Guangzhou
tags: Original proxy
---

[sing-box](https://github.com/SagerNet/sing-box) is a open source project
about proxy server and client 

## Server
[DIY proxy in this part](/other/diy_proxy)

## Client
Due to the relatively aggressive update pace of official sing-box,
many sing-box configuration files distributed by airports through subscriptions are in fact outdated,
and contain many improper settings, making them hard to meet the needs of using the efficient proxy tool sing-box in normal operation and across different usage scenarios.
The project [sb_cfg_gen](https://github.com/JJ-Jacko/sb_cfg_gen) automatically fetches or imports node data, and combines it with highly customizable templates to generate sing-box configuration files,
suitable for a variety of scenarios such as clients, servers, and crawler proxying.

### App (Recommended)
Support for `Windows`, `Android`, `Mac`, `iOS` GUI client.

URL:
```
example.com/sb_cfg
```

### Core
Support for `Linux`, `Windows` CLI client.

URL:
```
example.com/sb_cfg?client=cli-win
example.com/sb_cfg?client=cli-linux
```
#### Service for Linux
TODO
