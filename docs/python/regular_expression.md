---
title: Regular expression
date: 2024/05/07 16:22
location: Dongguan
tags: Original Python
---

## Meta characters
* `.` Any characters except line break
* `\w` Letters, numbers and underscores
* `\s` Blank characters
* `\d` Numbers
* `\n` Line break
* `\t` Tabulator
* `^` Start of string
* `$` Eng of string
* `\W` Not Letters, numbers and underscores
* `\S` Not blank characters
* `\D` Not numbers
* `a|b` Letter a or letter b
* `()` Set
* `[...]` Characters in a characters set
    * [abcde123] Matching a, b, c, d, e, 1, 2, 3
    * [a-zA-Z0-9] Matching lowercase a to z, uppercase A to Z and numbers 0 to 9
* `[^...]` Characters not in a characters set
    * [^abcde123] Matching characters not in a, b, c, d, e, 1, 2, 3

## Measure word
* `*` Repeat 0 or more times
* `+` Repeat 1 or more times
* `?` Repeat 0 or 1 times
* `{n}` Repeat n times
* `{n,}` Repeat n or more times
* `{n,m}` Repeat n times to m times

## Greedy match, lazy match
Play PUBG game. Let's play game at night. What's going on? Just play game.
### `.*` Greedy match
#### Expression
```
Play .* game
```
#### Result
Play `PUBG game. Let's play game at night. What's going on? Just play` game

### `.*?` Lazy match
#### Expression
```
Play .*? game
```
#### Result
Play `PUBG` game
