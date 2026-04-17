---
title: Operator
date: 2025/12/25 13:41
location: Dongguan
tags: Original C
---


## Bitwise AND `&`
Convert to binary, elign each bit, and only assign a value of 1 if both bits are 1; otherwise, assign a value of 0.
```txt{4}
5: 1 0 1
6: 1 1 0
---------
4: 1 0 0
```
5 & 6 = 4

## Bitwise OR `|`
Convert to binary, elign each bit, and assign a value of 1 if any bit is 1; otherwise, assign a value of 0
```txt{4}
5: 1 0 1
6: 1 1 0
---------
4: 1 1 1
```
5 | 6 = 7

## Bitwise XOR `^`
Convert to binary, elign each bit, and assign a value of 1 if two bits is same; otherwise, assign a value of 0
```txt{4}
5: 1 0 1
6: 1 1 0
---------
4: 0 1 1
```
5 ^ 6 = 3 

## Left Shift `<<` Right Shift `>>`
Convert to binary, shift the bit towards the higher or lower bits according to the shift number, where the shift number is a positive integer. Shifts to the right past 0 bits are ignored
```txt{3}
5: 1 0 1
-----------
3: 1 0 1 0
```
5 << 1 = 3

```txt{3}
5: 1 0 1
-----------
3: 1 0
```
5 >> 1 = 2
