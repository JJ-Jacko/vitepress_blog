# Python 连接数据库
* 📅 `2025/06/10 16:00` 
* 📍 `深圳`
* 🏷️ `原创` `Python` `MySQL`

## pymysql 直接查询
### 依赖
```sh
pip install pymysql
```
### 使用
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
* `Class` 类 -> `Table` 表
* `Object` 对象 -> `Row` 行 / `Record` 记录
### 依赖
```sh
pip install sqlmodel
```
### 使用
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
