---
title: 设计模式
date: 2026/08/08 18:16
location: 东莞
tags: 学习 Python 程序设计
---

## 一般流程
```python
class DatabaseConnection:
    host: str
    port: int
    
    def __init__(
            self,
            host: str,
            port: int,
    ):
        self.host = host
        self.port = port
        
    def connect(self):
        return f"Connecting to database at {self.host}:{self.port}."
```
```python
db_dev = DatabaseConnection("localhost", 3306)
db_pdt = DatabaseConnection("192.168.6.101", 3307)

print(db_dev.connect())
print(db_pdt.connect())
```
```txt [OUTPUT]
Connecting to database at localhost:3306.
Connecting to database at 192.168.6.101:3307.
```

## 工厂模式
```python [db_configs.py]
db_configs = {
    "dev": {
        "host": "localhost",
        "port": 3306
    },
    "pdt": {
        "host": "192.168.6.101",
        "port": 3307
    }
}
```
```python
def connection_factory(db_type: str):
    from db_configs import db_configs
    
    return DatabaseConnection(**db_configs[db_type])
```
```python
db_dev = connection_factory("dev")
db_pdt = connection_factory("pdt")

print(db_dev.connect())
print(db_pdt.connect())
```
```txt [OUTPUT]
Connecting to database at localhost:3306.
Connecting to database at 192.168.6.101:3307.
```

## 构建器模式
构造方法有大量的参数
```python{9-12}
class DatabaseConnection:
    host: str
    port: int
    username: str
    password: str
    
    def __init__(
            self,
            host: str,
            port: int,
            username: str,
            password: str
    ):
        self.host = host
        self.port = port
        
        if username in ("admin", "root"):
            print((
                f"Using high-level account, {username}, is DANGEROUS. "
                "It is recommended not to use them."
            ))
        self.username = username
        
        if username == password:
            raise ValueError("DO NOT make your username and password same.")
        self.password = password
        
    def connect(self):
        return (
            f"Connecting to database at {self.host}:{self.port} "
            f"with username '{self.username}'."
        )
```
```python
db = DatabaseConnection("localhost", 3306, "jacko", "pwd")
```
使用 `builder pattern` 代替
```python
class DatabaseConnection:
    host: str
    port: int
    username: str
    password: str
    
    def __init__(
            self,
            host: str,
            port: int,
            username: str,
            password: str
    ):
        self.host = host
        self.port = port
        self.username = username
        self.password = password
        
    def connect(self):
        return (
            f"Connecting to database at {self.host}:{self.port} "
            f"with username '{self.username}'."
        )
```
```python
from typing import Any
from typing import Dict


class DatabaseConnectionBuilder:
    _config: Dict[str, Any]
    
    def __init__(
            self,
            host: str,
            port: int
    ):
        self._config = {
            "host": host,
            "port": port
        }
    
    def set_username(self, username: str):
        if username in ("admin", "root"):
            print((
                f"Using high-level account, {username}, is DANGEROUS. "
                "It is recommended not to use them."
            ))
        
        self._config["username"] = username
        return self
        
    def set_password(self, password: str):
        if self._config["username"] == password:
            raise ValueError("DO NOT make your username and password same.")
        
        self._config["password"] = password
        return self
    
    def build(self):
        return DatabaseConnection(**self._config)
```
```python
db = (
    DatabaseConnectionBuilder("localhost", 3306)
    .set_username("jacko")
    .set_password("pwd")
    .build()
)

print(db.connect())
```
```txt [OUTPUT]
Connecting to database at localhost:3306 with username 'jacko'.
```

## 单例模式
```python
class DatabaseConnection:
    _instance: DatabaseConnection = None
    
    host: str
    port: int

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)

        return cls._instance
    
    def __init__(
            self,
            host: str,
            port: int,
    ):
        self.host = host
        self.port = port
        
    def connect(self):
        return f"Connecting to database at {self.host}:{self.port}."
```
魔法方法 `__new__` 魔法方法 `__init__` 运行之前将会执行。
我们可以将单例保存到私有类变量 `_instance` 中。
```python
db1 = DatabaseConnection("localhost", 3306)
db2 = DatabaseConnection("localhost", 3306)
print(db1 is db2)
```
```txt [OUTPUT]
True
```
