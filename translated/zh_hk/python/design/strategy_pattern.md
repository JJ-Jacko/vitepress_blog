## 示例
### 定義抽象類別
```python
class DiscountStrategy(ABC):
    @abstractmethod
    def calc(self, price: float) -> float:
        """Return the price after the discount."""
        ...
```
### 實現抽象方法
```python
class NoDiscount(DiscountStrategy):
    def calc(self, price: float):
        return price


class VipDiscount(DiscountStrategy):
    def calc(self, price: float):
        return 0.5 * price
```
### 調用
```python
NoDiscount().calc(100.0)
VipDiscount().calc(100.0)
```
```txt[OUTPUT]
100.0
50.0
```