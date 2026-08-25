import { DefaultTheme } from "vitepress";


export const sidebar: DefaultTheme.Sidebar = {
  '/translated/zh_cn/python': [
    {
      text: '语言',
      collapsed: false,
      items: [
        { text: 'Python 数据类型', link: '/translated/zh_cn/python/data_types' },
        { text: '包管理', link: '/translated/zh_cn/python/packages_management' },
        { text: 're 正则库', link: '/translated/zh_cn/python/module_re' },
        { text: 'shutil 模块', link: '/translated/zh_cn/python/module_shutil' },
        { text: '正则表达式', link: '/translated/zh_cn/python/regular_expression' },
        { text: '文件路径相关', link: '/translated/zh_cn/python/file_path' },
        { text: '文件', link: '/translated/zh_cn/python/file' },
        { text: '从源码构建 Cpython', link: '/translated/zh_cn/python/build_cpython' },
      ]
    },
    {
      text: '设计',
      collapsed: false,
      items: [
        { text: '策略模式', link: '/translated/zh_cn/python/strategy_pattern' },
        { text: '设计模式', link: '/translated/zh_cn/python/design_pattern' },
      ]
    },
    {
      text: '第三方库或工具',
      collapsed: false,
      items: [
        { text: 'Python 连接数据库', link: '/translated/zh_cn/python/connect_database' },
        { text: 'OpenAI SDK', link: '/translated/zh_cn/python/openai_sdk' },
        { text: 'yt-dlp 基本使用', link: '/translated/zh_cn/python/yt-dlp' },
      ]
    }
  ],
  '/translated/zh_cn/linux': [
    {
      text: '系统',
      collapsed: false,
      items: [
        { text: 'SSH', link: '/translated/zh_cn/linux/ssh' },
        { text: 'Linux 配置休眠', link: '/translated/zh_cn/linux/hibernate' },
        { text: 'Linux 系统备份还原', link: '/translated/zh_cn/linux/system_backup_restore' },
        { text: '英伟达驱动', link: '/translated/zh_cn/linux/nvidia_driver' },
        { text: 'Shell 命令别名', link: '/translated/zh_cn/linux/shell_alias' },
        { text: '环境变量', link: '/translated/zh_cn/linux/env_var' },
        { text: 'zsh', link: '/translated/zh_cn/linux/zsh' },
        { text: '代理', link: '/translated/zh_cn/linux/proxy' },
        { text: '编译安装', link: '/translated/zh_cn/linux/make_install' },
        { text: '更新 kernel 及 headers', link: '/translated/zh_cn/linux/upgrade_kernel&headers' },
        { text: '恢复 root 密码', link: '/translated/zh_cn/linux/recovery_root_passwd' },
        { text: '安装 Arch Linux', link: '/translated/zh_cn/linux/archlinux' },
        { text: 'Debian 清理', link: '/translated/zh_cn/linux/debian_clean' },
        { text: 'yum', link: '/translated/zh_cn/linux/yum' },
      ]
    },
    {
      text: '工具使用',
      collapsed: false,
      items: [
        { text: 'Neovim', link: '/translated/zh_cn/linux/nvim' },
        { text: 'Kali 嗅探 Wi-Fi', link: '/translated/zh_cn/linux/kali_wifi' },
        { text: '破解压缩包', link: '/translated/zh_cn/linux/crack_archive' },
        { text: '安卓监听', link: '/translated/zh_cn/linux/crack_android' },
      ]
    },
    {
      text: '部署服务',
      collapsed: false,
      items: [
        { text: 'Nginx 反向代理', link: '/translated/zh_cn/linux/nginx_reverse_proxy' },
        { text: 'Nginx 配置 TLS', link: '/translated/zh_cn/linux/nginx_tls' },
        { text: 'Samba 服务器', link: '/translated/zh_cn/linux/samba_server' },
        { text: '网页挂载', link: '/translated/zh_cn/linux/mount_web_page' },
        { text: 'Gitlab', link: '/translated/zh_cn/linux/gitlab' },
        { text: '服务配置', link: '/translated/zh_cn/linux/service_configuration' },
        { text: '内网穿透 frp', link: '/translated/zh_cn/linux/intranet_penetration_frp' },
        { text: '我的世界服务器', link: '/translated/zh_cn/linux/minecraft_server' },
      ]
    }
  ],
  '/translated/zh_cn/java': [
    {
      text: 'Java☕',
      items: [
        { text: 'Java 数据类型', link: '/translated/zh_cn/java/data_types' },
        { text: 'Java 日期时间', link: '/translated/zh_cn/java/date_time' },
        { text: 'Jar 打包', link: '/translated/zh_cn/java/pack_jar' },
        { text: '访问修饰符', link: '/translated/zh_cn/java/access_modifier' },
      ]
    }
  ],
  '/translated/zh_cn/c': [
    {
      text: 'C',
      items: [
        { text: '环境搭建', link: '/translated/zh_cn/c/env' },
        { text: '数据单位', link: '/translated/zh_cn/c/data_unit' },
        { text: '数据类型', link: '/translated/zh_cn/c/data_types' },
        { text: '运算符', link: '/translated/zh_cn/c/operator' },
      ]
    }
  ],
  '/translated/zh_cn/back-end': [
    {
      text: 'MySQL',
      link: '/translated/zh_cn/back-end/mysql'
    },
    {
      text: 'Redis',
      link: '/translated/zh_cn/back-end/redis',
      collapsed: false,
      items: [
        { text: '数据类型', link: '/translated/zh_cn/back-end/redis/data_types' },
      ]
    }
  ],
  '/translated/zh_cn/front-end': [
    {
      text: '前端✨',
      items: [
        { text: '微信小程序', link: '/translated/zh_cn/front-end/wechat_mini_program' },
      ]
    }
  ],
  '/translated/zh_cn/other': [
    {
      text: '其他💻',
      items: [
        { text: 'Git 基本使用', link: '/translated/zh_cn/other/git' },
        { text: 'Git 提交规范', link: '/translated/zh_cn/other/git_commit_rule' },
        { text: 'VirtualBox 虚拟机磁盘释放空间', link: '/translated/zh_cn/other/vbox_disk_free' },
        { text: 'VSCode 配置及插件', link: '/translated/zh_cn/other/vscode' },
        { text: 'Windows 配置休眠', link: '/translated/zh_cn/other/windows_hibernate' },
        { text: 'Windows 停止更新', link: '/translated/zh_cn/other/windows_stop_update' },
        { text: 'Legacy 无损转 UEFI', link: '/translated/zh_cn/other/legacy_to_uefi' },
        { text: '自建代理', link: '/translated/zh_cn/other/diy_proxy' },
      ]
    }
  ],
}
