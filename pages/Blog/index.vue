<template>
    <div class="Blog">
        <PageTitle>Blog</PageTitle>
        <div class="BlogBlox" v-for="blog in articles" :key="blog._id">
            <BlogBox :title="blog.title" :tags='blog.tags' :date="blog.date" :synopsis="blog.context"
                :imgPath="blog.imageurl" :url="blog.blogurl" altStr="ブログ画像" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Article } from '~/types/article'

const { data } = await useAsyncData('articles', async () => {
    const { $newtClient } = useNuxtApp()
    return await $newtClient.getContents<Article>({
        appUid: 'blog',
        modelUid: 'blog',
        query: {
            select: ['_id', 'title', 'tags', 'date', 'context', 'imageurl', 'blogurl']
        }
    })
});
// console.log(data);
const articles = data.value?.items;
// console.log(articles);
</script>

<style scoped>
@import "./index.css";
</style>