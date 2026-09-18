---
title: Environment
date: 2026/09/18 14:34
location: Guangzhou
tags: Original
---

## Tools
* IDE: [VSCode](https://code.visualstudio.com) (ONLY Recommended)
    * ~~Live preview~~ (NOT Recommended, now using Vite instead)
* JavaScrpit Runtime: [Node.js](https://nodejs.org)
* Package manager: [pnpm](https://pnpm.io) (Recommended) / npm
* Build system: [Vite](https://vite.dev)

## Vite
### Create a frontend project
[Official document](https://vite.dev/guide)
```sh
pnpm add -D vite
```
Recommend **Vanilla + Typescript** for beginners.

## VSCode launch configurations
```json {4} [.vscode/launch.json]
{
    "version": "0.2.0",
    "configurations": [
        // Insert configuration in this place
    ]
}
```
### Integrated browser
Debug **broswer** TypeScript/JavaScript code.
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
Debug **node** TypeScript/JavaScript code.
```json [.vscode/launch.json]
{
    "type": "node",
    "request": "launch",
    "name": "Test",
    "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/tsx",
    "program": "${workspaceFolder}/.vitepress/config.mts"
},
```
