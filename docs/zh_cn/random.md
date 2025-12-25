---
title: random
---

<script>
const pages = [
    '/zh_cn/python',
    '/zh_cn/linux',
    '/zh_cn/java',
    '/zh_cn/other'
]

const target = pages[Math.floor(Math.random() * pages.length)]
if (typeof window !== 'undefined') {
    window.location.href = target
}
</script>
正为你挑选页面......