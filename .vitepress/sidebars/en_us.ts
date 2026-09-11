import { DefaultTheme } from "vitepress";
import {
  pathPython,
  pathPythonLanguage,
  pathPythonDesign,
  pathPythonLibsTools,

  postsPythonLanguage,
  postsPythonDesign,
  postsPythonLibsTools
} from "../constant";


export const sidebar: DefaultTheme.Sidebar = {
  [pathPython]: [
    {
      text: 'Language',
      link: pathPython,
      collapsed: false,
      items: postsPythonLanguage
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathPythonLanguage}/${post.id}`
        }))
    },
    {
      text: 'Design',
      collapsed: false,
      items: postsPythonDesign
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathPythonDesign}/${post.id}`
        }))
    },
    {
      text: 'Third-Party Libraries or Tools',
      collapsed: false,
      items: postsPythonLibsTools
        .filter((post) => post.nameEN !== undefined)
        .map((post) => ({
          text: post.nameEN,
          link: `${pathPythonLibsTools}/${post.id}`
        }))
    }
  ],
  '/linux': [
    {
      text: 'System',
      collapsed: false,
      items: [
        { text: 'SSH', link: '/linux/ssh' },
        { text: 'Linux Hibernate Configuration', link: '/linux/hibernate' },
        { text: 'Linux System Backup & Restore', link: '/linux/system_backup_restore' },
        { text: 'Nvidia Driver', link: '/linux/nvidia_driver' },
        { text: 'Shell Alias', link: '/linux/shell_alias' },
        { text: 'Environment variables', link: '/linux/env_var' },
        { text: 'zsh', link: '/linux/zsh' },
        { text: 'Proxy', link: '/linux/proxy' },
        { text: 'Make install', link: '/linux/make_install' },
        { text: 'Update kernel & headers', link: '/linux/upgrade_kernel&headers' },
        { text: 'Recovery root password', link: '/linux/recovery_root_passwd' },
        { text: 'Install Arch Linux', link: '/linux/archlinux' },
        { text: 'Debian Clean', link: '/linux/debian_clean' },
        { text: 'yum', link: '/linux/yum' },
      ]
    },
    {
      text: 'Tools Usage',
      collapsed: false,
      items: [
        { text: 'Neovim', link: '/linux/nvim' },
        { text: 'Kali sniffs Wi-Fi', link: '/linux/kali_wifi' },
        { text: 'Crack archive', link: '/linux/crack_archive' },
        { text: 'Crack Android', link: '/linux/crack_android' },
      ]
    },
    {
      text: 'Service Deployment',
      collapsed: false,
      items: [
        { text: 'Nginx Reverse Proxy', link: '/linux/nginx_reverse_proxy' },
        { text: 'Nginx Configure TLS', link: '/linux/nginx_tls' },
        { text: 'Samba Server', link: '/linux/samba_server' },
        { text: 'Mount Web Page', link: '/linux/mount_web_page' },
        { text: 'Gitlab', link: '/linux/gitlab' },
        { text: 'Gitea', link: '/linux/gitea' },
        { text: 'Jellyfin', link: '/linux/jellyfin' },
        { text: 'OpenList', link: '/linux/openlist' },
        { text: 'qBittorrent', link: '/linux/qbittorrent' },
        { text: 'Service Configuration', link: '/linux/service_configuration' },
        { text: 'Intranet Penetration frp', link: '/linux/intranet_penetration_frp' },
        { text: 'Minecraft Server', link: '/linux/minecraft_server' },
      ]
    }
  ],
  '/java': [
    {
      text: 'Java☕',
      items: [
        { text: 'Java Data Types', link: '/java/data_types' },
        { text: 'Java Date Time', link: '/java/date_time' },
        { text: 'Pack Jar', link: '/java/pack_jar' },
        { text: 'Access Modifier', link: '/java/access_modifier' },
      ]
    }
  ],
  '/c': [
    {
      text: 'C',
      items: [
        { text: 'Setup Environment', link: '/c/env' },
        { text: 'Unit of Data', link: '/c/data_unit' },
        { text: 'C Data Type', link: '/c/data_types' },
        { text: 'Operator', link: '/c/operator' },
      ]
    }
  ],
  '/back-end': [
    {
      text: 'MySQL',
      link: '/back-end/mysql'
    },
    {
      text: 'Redis',
      link: '/back-end/redis',
      collapsed: false,
      items: [
        { text: 'Data Types', link: '/back-end/redis/data_types' },
      ]
    }
  ],
  '/front-end': [
    {
      text: 'Fontend✨',
      items: [
        { text: 'WeChat Mini Program', link: '/front-end/wechat_mini_program' },
      ]
    }
  ],
  '/other': [
    {
      text: 'Other💻',
      items: [
        { text: 'Git', link: '/other/git' },
        { text: 'Git Commit rule', link: '/other/git_commit_rule' },
        { text: 'PowerShell', link: '/other/powershell' },
        { text: 'VirtualBox Disk Free', link: '/other/vbox_disk_free' },
        { text: 'VSCode', link: '/other/vscode' },
        { text: 'Windows Configure Hibernate', link: '/other/windows_hibernate' },
        { text: 'Windows Stop Update', link: '/other/windows_stop_update' },
        { text: 'Legacy to UEFI', link: '/other/legacy_to_uefi' },
        { text: 'DIY Proxy', link: '/other/diy_proxy' },
      ]
    }
  ],
}
