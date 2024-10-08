<template>
    <div class="Slide">
        <PageTitle>スライド置き場</PageTitle>
        <ul class="slide-area">
            <li v-for="slide in slides">
                <client-only>
                    <SlideBox :url="slide.url" :context="slide.context">{{ slide.slidename }}</SlideBox>
                </client-only>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { Slide } from '~/types/slide'

const { data } = await useAsyncData('slides', async () => {
    const { $newtClient } = useNuxtApp()
    return await $newtClient.getContents<Slide>({
        appUid: 'history',
        modelUid: 'slide',
        query: {
            select: ['_id', 'slidename', 'url', 'context'],
            order: ['_sys.customOrder']
        }
    })
});
const slides = data.value?.items;
console.log(slides);
</script>

<style scoped>
@import "./index.css";
</style>