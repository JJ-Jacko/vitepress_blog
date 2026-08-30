---
title: VSCode Configuration and Extensions
date: 2024/04/20 12:02
location: Dongguan
tags: Original VSCode IDE
---

## ⚙️ Configuration
```json
{
    // 主题
    "window.autoDetectColorScheme": true,
    "workbench.preferredLightColorTheme": "Ayu Light Bordered",
    "workbench.preferredDarkColorTheme": "Ayu Dark Bordered",
    "workbench.iconTheme": "material-icon-theme",

    // 字体
    "editor.fontSize": 13,
    "terminal.integrated.fontSize": 13,
    "markdown.preview.fontSize": 11,

    // 缩放
    "window.zoomLevel": 1,

    // 布局
    "window.menuBarVisibility": "compact",
    "workbench.activityBar.location": "top",
    "workbench.panel.showLabels": false,
    "workbench.sideBar.location": "right",
    "terminal.integrated.tabs.enabled": false,

    // 平滑
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.smoothScrolling": true,
    "terminal.integrated.smoothScrolling": true,
    "workbench.list.smoothScrolling": true,

    // 跟随滚轮调整字体大小
    "editor.mouseWheelZoom": true,
    "terminal.integrated.mouseWheelZoom": true,

    // 括号高光线
    "editor.guides.bracketPairs": "active",
    "editor.bracketPairColorization.enabled": true,

    // 自动保存
    "files.autoSave": "afterDelay",

    // 用猜测的编码方式打开文件
    "files.autoGuessEncoding": true,

    // 删除文件不弹窗确定
    "explorer.confirmDelete": false,

    // 启动 VSCode 不打开任何窗口
    "workbench.startupEditor": "none",
}
```

## 🧩 Extensions
### Themes
* Ayu
* Tokyo Night
* Bearded Theme
* One Dark Pro
### Icons
* Material Icon Theme
### Features
* Live Preview for real-time front-end preview
* Live Server for real-time browser preview
* WSL Linux sub system
* Remote - SSH for remote development
* Git Graph for list-based version control visualization
* Database Client for database management
* CodeSnap for code screenshots
### Languages
#### Python
* Python Extension Pack
* Jupyter
* Black Formatter
#### Java
* Extension Pack for Java
