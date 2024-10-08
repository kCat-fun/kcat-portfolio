<template>
    <div class="Slide">
        <PageTitle>スライド置き場</PageTitle>
        <ul class="slide-area">
            <li v-for="slide in reverseItem(slides ? slides : [])">
                <client-only>
                    <SlideBox :url="slide.url" :context="slide.context">{{ slide.slidename }}</SlideBox>
                </client-only>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { Slide } from '~/types/slide'

const slides = ref<Slide[]>();

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
slides.value = data.value?.items;

const reverseItem = (items: Array<Slide>): Slide => {
    let retArray: Array<Slide> = [];
    for (let i = items.length - 1; i >= 0; i--) {
        retArray.push(items[i]);
    }
    return retArray;
}
</script>

<style scoped>
@import "./index.css";
</style>