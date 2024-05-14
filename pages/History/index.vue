<template>
    <div class="History">
        <PageTitle>History</PageTitle>
        <div v-for="history in histories" class="history-box">
            <client-only>
                <HistoryBox :title="history.title" :date="history.date" :content="history.content" />
            </client-only>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { History } from '~/types/history'

const { data } = await useAsyncData('histories', async () => {
    const { $newtClient } = useNuxtApp()
    return await $newtClient.getContents<History>({
        appUid: 'history',
        modelUid: 'history',
        query: {
            select: ['_id', 'title', 'date', 'content']
        }
    })
});
const histories = data.value?.items;
if(histories !== undefined)
    histories.sort((a, b) =>
        (a.date).replace('年', '').replace('月', '') < (b.date).replace('年', '').replace('月', '') ? 1 : -1
    );
// console.log((histories[0].date).replace('年','').replace('月',''));
</script>

<style scoped>
@import "./index.css";
</style>