# Nginx 反向代理
* 📅 `2025/06/11 16:30` 
* 📍 `深圳`
* 🏷️ `原创` `Linux` `Nginx`
  
`/etc/nginx/sites-enabled/mysite`

* 在 Nginx 上的项目
```conf
server {
    listen 80;
    listen [::]:80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:<port>;
    }
}
```

* 不在 Nginx 上的项目
```conf
server {
    listen 80;
    listen [::]:80;
    server_name example.com;

    root /var/www/mysite;
}
```
