## 工具
* 整合開發環境: [VSCode](https://code.visualstudio.com) (唯一推薦)
    * ~~Live preview~~ (唔推薦，而家用 Vite 代替)
* JavaScrpit 執行環境: [Node.js](https://nodejs.org)
* 套件管理: [pnpm](https://pnpm.io) (Recommended) / npm
* 建置系統: [Vite](https://vite.dev)

## Vite
### 建立一個前端 project
[官方文件](https://vite.dev/guide)
```sh
pnpm add -D vite
```
推薦初學者用 **Vanilla + Typescript**。

## VSCode 啟動設定
```json {4} [.vscode/launch.json]
{
    "version": "0.2.0",
    "configurations": [
        // 喺呢度插入設定
    ]
}
```
### 內置瀏覽器
用嚟 debug **瀏覽器** 嘅 TypeScript/JavaScript 代碼。
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
用嚟 debug **node** 嘅 TypeScript/JavaScript 代碼。
```json [.vscode/launch.json]
{
    "type": "node",
    "request": "launch",
    "name": "Test",
    "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/tsx",
    "program": "${workspaceFolder}/.vitepress/config.mts"
},
```
