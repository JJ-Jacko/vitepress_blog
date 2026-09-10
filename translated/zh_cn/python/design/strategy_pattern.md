---
title: 策略模式
date: 2026/07/12 21:26
location: 东莞
tags: 原创 Python 程序设计
---

## 示例
### 定义抽象类
```python
class DiscountStrategy(ABC):
    @abstractmethod
    def calc(self, price: float) -> float:
        """Return the price after the discount."""
        ...
```
### 实现抽象方法
```python
class NoDiscount(DiscountStrategy):
    def calc(self, price: float):
        return price


class VipDiscount(DiscountStrategy):
    def calc(self, price: float):
        return 0.5 * price
```
### 调用
```python
NoDiscount().calc(100.0)
VipDiscount().calc(100.0)
```
```txt[OUTPUT]
100.0
50.0
```