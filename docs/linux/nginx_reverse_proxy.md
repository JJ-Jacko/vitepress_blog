# Nginx Reverse Proxy
* 📅 `2025/06/11 16:30` 
* 📍 `Shenzhen`
* 🏷️ `Original` `Linux` `Nginx`
  
## Project on Nginx
```nginx [/etc/nginx/sites-enabled/mysite]
server {
    listen 80;
    listen [::]:80;
    server_name example.com;

    root /var/www/mysite;
}
```

## Project not on Nginx
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
