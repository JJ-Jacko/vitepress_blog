---
layout: page
---

<div class="explore-message">正為閣下揀緊頁面......</div>

<script>
const pages = [
    '/translated/zh_hk/python',
    '/translated/zh_hk/linux',
    '/translated/zh_hk/java',
    '/translated/zh_hk/c',
    '/translated/zh_hk/back-end',
    '/translated/zh_hk/front-end',
    '/translated/zh_hk/other'
]

const target = pages[Math.floor(Math.random() * pages.length)]
if (typeof window !== 'undefined') {
    window.location.href = target
}
</script>
