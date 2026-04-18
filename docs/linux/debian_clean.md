---
title: Debian Clean
date: 2026/04/18 12:42
location: Dongguan
tags: Original Linux
---

## Clean orphaned packages
```sh
sudo apt autoremove --purge
```

## Clean residual packages
```sh
sudo apt purge $(dpkg -l | awk '/^rc/ {print $2}')
```

## List non-repository packages
```sh
apt list --installed | grep '\[installed,local\]'
```

## List packages not matching the current Debian version
```sh
apt list --installed | grep -v stable | grep installed
```
