---
title: random
---

<script>
const pages = [
    '/translated/zh_cn/python',
    '/translated/zh_cn/linux',
    '/translated/zh_cn/java',
    '/translated/zh_cn/other'
]

const target = pages[Math.floor(Math.random() * pages.length)]
if (typeof window !== 'undefined') {
    window.location.href = target
}
</script>
正为你挑选页面......