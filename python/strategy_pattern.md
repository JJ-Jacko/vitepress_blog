---
title: Strategy Pattern
date: 2026/07/12 21:26
location: Dongguan
tags: Original Python Programming-Design
---

## Example
### Define the abstract class
```python
class DiscountStrategy(ABC):
    @abstractmethod
    def calc(self, price: float) -> float:
        """Return the price after the discount."""
        ...
```
### Implement the abstract method
```python
class NoDiscount(DiscountStrategy):
    def calc(self, price: float):
        return price


class VipDiscount(DiscountStrategy):
    def calc(self, price: float):
        return 0.5 * price
```
### Call
```python
NoDiscount().calc(100.0)
VipDiscount().calc(100.0)
```
```txt[OUTPUT]
100.0
50.0
```