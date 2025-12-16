---
title: random
---

<script>
const pages = [
    '/python',
    '/linux',
    '/java',
    '/other'
]

const target = pages[Math.floor(Math.random() * pages.length)]
if (typeof window !== 'undefined') {
    window.location.href = target
}
</script>
正为你挑选页面......