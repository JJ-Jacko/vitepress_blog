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
Finding content for you......