<template>
    <div class="Blog">
        <PageTitle>Blog</PageTitle>
        <div>
            <BlogBox class="BlogBlox" v-for="blog in articles" :title="blog.title" :tags='blog.tags' :date="blog.date"
                :synopsis="blog.context" :imgPath="blog.imageurl" :url="blog.blogurl" altStr="ブログ画像" />
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
})
const articles = data.value?.items
// console.log(articles);
</script>

<style scoped>
@import "./index.css";
</style>