## Python
淨係適合臨時使用
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
### 設定網站根目錄
```xml [/etc/apache2/site-available/000-default.conf]
<VirtualHost *:8001>
    DocumentRoot /var/www/mysite
</VirtualHost>
```
### 監聽 8001 埠
```properties [/etc/apache2/apache2.conf]
Listen 8001
```
