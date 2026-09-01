---
layout: page
---

<div class="explore-message">Finding content for you......</div>

<script>
const pages = [
    '/python',
    '/linux',
    '/java',
    '/c',
    '/back-end',
    '/front-end',
    '/other'
]

const target = pages[Math.floor(Math.random() * pages.length)]
if (typeof window !== 'undefined') {
    window.location.href = target
}
</script>
