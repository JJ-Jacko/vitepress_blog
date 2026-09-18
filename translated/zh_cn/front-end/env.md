---
title: 环境
date: 2026/09/18 14:34
location: 广州
tags: 原创
---

## 工具
* 集成开放环境: [VSCode](https://code.visualstudio.com) (唯一推荐)
    * ~~Live preview~~ (不推荐, 如今用 Vite 替代)
* JavaScrpit 运行时: [Node.js](https://nodejs.org)
* 包管理: [pnpm](https://pnpm.io) (Recommended) / npm
* 构建系统: [Vite](https://vite.dev)

## Vite
### 创建一个前端项目
[官方文档](https://vite.dev/guide)
```sh
pnpm add -D vite
```
面向初学者推荐 **Vanilla + Typescript** 。

## VSCode 启动配置
```json {4} [.vscode/launch.json]
{
    "version": "0.2.0",
    "configurations": [
        // 在此处插入配置
    ]
}
```
### 内置浏览器
调试 **浏览器** TypeScript/JavaScript 代码。
```json [.vscode/launch.json]
{
    "type": "editor-browser",
    "request": "launch",
    "name": "Browser",
    "url": "http://localhost:5173",
    "webRoot": "${workspaceFolder}"
}
```
### Node backend
调试 **node** TypeScript/JavaScript 代码.
```json [.vscode/launch.json]
{
    "type": "node",
    "request": "launch",
    "name": "Test",
    "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/tsx",
    "program": "${workspaceFolder}/.vitepress/config.mts"
},
```
