---
title: Connect database in Python
date: 2025/06/10 16:00
location: ShenZhen
tags: Original Python MySQL
---

## Go Straight to query in pymysql
### Dependence
```sh
pip install pymysql
```
### Usage
```py
import pymysql
from typing import List, TypedDict

connection = pymysql.connect(
    host='jd',
    user='root',
    password='root',
    database='book_reading_platform',
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor
)

cursor = connection.cursor()
query = "SELECT * FROM book_info"
cursor.execute(query)

class Book(TypedDict):
    id: int
    name: str
    author: str
    score: int
    image: bytes

books: List[Book] = cursor.fetchall()
```

## sqlmodel ORM(Object Relationship Mapping)
* `Class` -> `Table`
* `Object` -> `Row` / `Record`
### Dependence
```sh
pip install sqlmodel
```
### Usage
```py
from sqlmodel import SQLModel, Field, create_engine, Session, select

engine = create_engine("mysql+pymysql://root:root@jd:3306/book_reading_platform")

class Book(SQLModel, table=True):
    __tablename__ = "books"

    id: int = Field(default=None, primary_key=True)
    name: str
    author: str
    score: int
    image: bytes

with Session(engine) as session:
    statement = select(Book)
    books = session.exec(statement).all()
```
