---
title: Nginx 反向代理
date: 2025/06/11 16:30
location: 深圳
tags: 原创 Linux Nginx
---

## 在 Nginx 上的项目
```nginx [/etc/nginx/sites-enabled/mysite]
server {
    listen 80;
    listen [::]:80;
    server_name example.com;

    root /var/www/mysite;
}
```

## 不在 Nginx 上的项目
```nginx [/etc/nginx/sites-enabled/mysite]
server {
    listen 80;
    listen [::]:80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:<port>;
    }
}
```

