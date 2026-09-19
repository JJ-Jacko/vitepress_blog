<script setup lang="ts">
    import { computed } from 'vue';
    import { useData } from 'vitepress';

    import { getPost } from "../tools";


    const { page, lang } = useData();
    const post = computed(() => {
        const fileName = page.value.relativePath.split('/').pop();
        const postID = fileName?.replace(/\.md$/, '') ?? '';
        return getPost(postID);
    });

    let title;
    if (lang.value === "en-US") {
        title = computed(() => post.value?.nameEN ?? '');
    }
    else if (lang.value === "zh-CN") {
        title = computed(() => post.value?.nameCN ?? '');
    }
    else if (lang.value === "zh-HK") {
        title = computed(() => post.value?.nameHK ?? '');
    }

</script>

<template>
    <div v-if="post">
        <h1 class="article-meta-title" v-if="title">{{ title }}</h1>
    </div>
</template>