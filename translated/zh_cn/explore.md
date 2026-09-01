---
layout: page
---

<div class="explore-message">正为你挑选页面......</div>

<script>
const pages = [
    '/translated/zh_cn/python',
    '/translated/zh_cn/linux',
    '/translated/zh_cn/java',
    '/translated/zh_cn/c',
    '/translated/zh_cn/back-end',
    '/translated/zh_cn/front-end',
    '/translated/zh_cn/other'
]

const target = pages[Math.floor(Math.random() * pages.length)]
if (typeof window !== 'undefined') {
    window.location.href = target
}
</script>
