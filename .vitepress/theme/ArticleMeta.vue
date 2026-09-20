<script setup lang="ts">
    import { computed } from 'vue';
    import { useData } from 'vitepress';

    import { getPost, getLocation } from "../tools";


    const { page, lang } = useData();
    const post = computed(() => {
        const fileName = page.value.relativePath.split('/').pop();
        const postID = fileName?.replace(/\.md$/, '') ?? '';
        return getPost(postID);
    });

    let title;
    let location;
    if (lang.value === "en-US") {
        title = computed(() => post.value?.nameEN ?? '');
        location = computed(() => {
            const code = post.value?.location;
            return code ? getLocation(code)?.nameEN ?? '' : '';
        });
    }
    else if (lang.value === "zh-CN") {
        title = computed(() => post.value?.nameCN ?? '');
        location = computed(() => {
            const code = post.value?.location;
            return code ? getLocation(code)?.nameCN ?? '' : '';
        });
    }
    else if (lang.value === "zh-HK") {
        title = computed(() => post.value?.nameHK ?? '');
        location = computed(() => {
            const code = post.value?.location;
            return code ? getLocation(code)?.nameHK ?? '' : '';
        });
    }

    const date = computed(() => post.value?.date?.toLocaleString());

</script>

<template>
    <div v-if="post">
        <h1 class="article-meta-title" v-if="title">{{ title }}</h1>
        <div v-if="date">📅 {{ date }}</div>
        <div v-if="location">📍 {{ location }}</div>
    </div>
</template>