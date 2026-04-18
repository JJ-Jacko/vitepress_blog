---
title: 网页挂载
date: 2025/06/10 23:00
location: 深圳
tags: 原创 Linux Nginx Apache
---

## Python
仅适合临时使用
```sh
screen -S mysite
```
```sh
python -m http.server 8001 --directory /var/www/mysite
```

## Nginx
```nginx [/etc/nginx/sites-available/mysite]
server {
    listen 8001;
    root /var/www/mysite;
}
```

## Apache
### 设置网站根目录
```xml [/etc/apache2/site-available/000-default.conf]
<VirtualHost *:8001>
    DocumentRoot /var/www/mysite
</VirtualHost>
```
### 监听 8001 端口
```properties [/etc/apache2/apache2.conf]
Listen 8001
```
