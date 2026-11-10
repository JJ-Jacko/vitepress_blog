## 由 Nginx 提供嘅 Project
```nginx [/etc/nginx/sites-enabled/mysite]
server {
    listen 80;
    listen [::]:80;
    server_name example.com;

    root /var/www/mysite;
}
```

## 唔係由 Nginx 提供嘅 Project
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

