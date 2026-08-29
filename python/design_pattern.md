---
title: Design Pattern
date: 2026/08/08 18:16
location: Dongguan
tags: Learn Python Programming-Design
---

## General Process
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

## Factory pattern
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

## Builder Pattern
There are too many arguments in a class constructing.
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
Using `builder pattern` instead.
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

## Singleton pattern
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
The special method `__new__` will execute before running the special method `__init__`.
We can save the singleton in the private class attribute `_instance`.
```python
db1 = DatabaseConnection("localhost", 3306)
db2 = DatabaseConnection("localhost", 3306)
print(db1 is db2)
```
```txt [OUTPUT]
True
```
