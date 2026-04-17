<script setup lang="ts">
    import { computed } from 'vue'
    import { useData } from 'vitepress'


    const { frontmatter } = useData()
    const title = computed(() => frontmatter.value.title as string | undefined)
    const date = computed(() => frontmatter.value.date as string | undefined)
    const location = computed(() => frontmatter.value.location as string | undefined)
    const tags = computed(() => frontmatter.value.tags as string | undefined)
    const hasMeta = computed(() => Boolean(title.value || date.value || location.value || tags.value))
</script>

<template>
    <div v-if="hasMeta">
        <h1 class="article-meta-title" v-if="title">{{ title }}</h1>
        <div v-if="date">📅 {{ date }}</div>
        <div v-if="location">📍 {{ location }}</div>
        <div v-if="tags">🏷️ {{ tags }}</div>
    </div>
</template>