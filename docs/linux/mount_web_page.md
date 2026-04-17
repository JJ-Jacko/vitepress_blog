---
title: Mount Web Page
date: 2025/06/10 23:00
location: Shenzhen
tags: Original Linux Nginx Apache
---

## Nginx
```nginx [/etc/nginx/sites-available/mysite]
server {
    listen 8001;
    root /var/www/mysite;
}
```
## Apache
### Set the website root directory
```xml [/etc/apache2/site-available/000-default.conf]
<VirtualHost *:8001>
    DocumentRoot /var/www/mysite
</VirtualHost>
```
### Listen 8001 port
```properties [/etc/apache2/apache2.conf]
Listen 8001
```
