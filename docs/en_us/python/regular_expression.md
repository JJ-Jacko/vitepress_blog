# Regular expression
* 📅 `2024/05/07 16:22` 
* 📍 `Dongguan`
* 🏷️ `Original` `Python`

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
* `.*` Greedy match
* `.*?` lazy match

文本: 玩吃鸡<u>游戏</u>，晚上一起上<u>游戏</u>，干嘛呢？打<u>游戏</u>啊

表达式: 玩.*?游戏

结果：玩吃鸡游戏

表达式: 玩.*游戏

结果：玩吃鸡游戏，晚上一起上游戏，干嘛呢？打游戏
