# Nginx 配置 TLS
* 📅 `2025/06/11 16:40` 
* 📍 `深圳`
* 🏷️ `原创` `Linux` `Nginx`

## 挂载
```nginx [/etc/nginx/sites-enabled/mysite]
server {
    listen <port>;
    root /var/www/blog/public;
}
```

## TLS
```nginx [/etc/nginx/sites-enabled/mysite]
# TLS
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name example.com;
    ssl_certificate /etc/nginx/cert/mysite.pem;
    ssl_certificate_key /etc/nginx/cert/mysite.key;
    location / {
        proxy_pass http://localhost:<port>;
    }
}
```

## 重定向无TLS的访问
```nginx [/etc/nginx/sites-enabled/mysite]
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    return 301 https://$host$request_uri;
}
```
