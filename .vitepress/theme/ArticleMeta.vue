<script setup lang="ts">
    import { computed } from 'vue';
    import { useData } from 'vitepress';

    import { getPost, getLocation, getTag } from "../tools";


    const { page, lang } = useData();
    const post = computed(() => {
        const filePathsItems = page.value.relativePath.split('/');
        const fileNameItems = filePathsItems.at(-1)?.split('.');
        let postID;
        if (filePathsItems.at(-1) === "index.md") {
            postID = `${filePathsItems?.at(-2)}.index`;
        } else {
            postID = fileNameItems?.at(0) ?? '';
        }
        return getPost(postID);
    });

    let title;
    let location;
    let tags;
    if (lang.value === "en-US") {
        title = computed(() => post.value?.nameEN ?? '');
        location = computed(() => {
            const code = post.value?.location;
            return code ? getLocation(code)?.nameEN ?? '' : '';
        });
        tags = computed(() => {
            let res = '';
            post.value?.tags?.forEach((code) => {
                const tag = getTag(code);
                res = `${res}${tag?.nameEN} `;
            });
            return res;
        });
    }
    else if (lang.value === "zh-CN") {
        title = computed(() => post.value?.nameCN ?? '');
        location = computed(() => {
            const code = post.value?.location;
            return code ? getLocation(code)?.nameCN ?? '' : '';
        });
        tags = computed(() => {
            let res = '';
            post.value?.tags?.forEach((code) => {
                const tag = getTag(code);
                res = `${res}${tag?.nameCN} `;
            });
            return res;
        });
    }
    else if (lang.value === "zh-HK") {
        title = computed(() => post.value?.nameHK ?? '');
        location = computed(() => {
            const code = post.value?.location;
            return code ? getLocation(code)?.nameHK ?? '' : '';
        });
        tags = computed(() => {
            let res = '';
            post.value?.tags?.forEach((code) => {
                const tag = getTag(code);
                res = `${res}${tag?.nameHK} `;
            });
            return res;
        });
    }

    const date = computed(() => post.value?.date?.toLocaleString());

</script>

<template>
    <div v-if="post">
        <h1 class="article-meta-title" v-if="title">{{ title }}</h1>
        <div v-if="date">📅 {{ date }}</div>
        <div v-if="location">📍 {{ location }}</div>
        <div v-if="tags">🏷️ {{ tags }}</div>
    </div>
</template>