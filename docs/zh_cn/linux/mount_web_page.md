# 网页挂载
* 📅 `2025/06/10 23:00` 
* 📍 `深圳`
* 🏷️ `原创` `Linux` `Nginx` `Apache`

## Nginx
```nginx [/etc/nginx/sites-available/mysite]
server {
    listen 8001;
    root /var/www/mysite;
}
```
## Apache
### 设置跟网站根目录
```xml [/etc/apache2/site-available/000-default.conf]
<VirtualHost *:8001>
    DocumentRoot /var/www/mysite
</VirtualHost>
```
### 监听 8001 端口
```properties [/etc/apache2/apache2.conf]
Listen 8001
```
