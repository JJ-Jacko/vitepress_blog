<script setup lang="ts">
    import { computed } from 'vue';
    import { useData } from 'vitepress';

    import { getPost, getLocation, getTag } from "../tools";
    import { Language, lanLocalizedNameMap } from "../datas";


    const { page, lang } = useData();
    const post = computed(() => getPost(page.value.relativePath));
    const currentLanguage = lang.value as Language;
    const localizedName = lanLocalizedNameMap[currentLanguage];

    let title;
    let location;
    let tags;
    
    title = computed(() => post.value?.[localizedName] ?? '');
    location = computed(() => {
        const code = post.value?.location;
        return code ? getLocation(code)?.[localizedName] ?? '' : '';
    });
    tags = computed(() => {
        let res = '';
        post.value?.tags?.forEach((code) => {
            const tag = getTag(code);
            res = `${res}${tag?.[localizedName]} `;
        });
        return res;
    });

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