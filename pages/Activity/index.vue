<template>
    <div>
        <PageTitle>Activity</PageTitle>
        <div>
            <nuxt-link v-for="activity in activities.contents" :to="'/Activity/Content?id=' + activity.id"
                class="work-box-link">
                <div>
                    <WorkBox class="WorkBox" :tag="activity.tag" :data="activity.data" :imgPath="activity.image.url"
                        altStr="サムネイル">
                        {{ activity.title }}
                    </WorkBox>
                </div>
            </nuxt-link>
            <WorkBoxDammy class="WorkBox dammy" />
            <WorkBoxDammy class="WorkBox dammy" />
            <WorkBoxDammy class="WorkBox dammy" />
        </div>
        <div class="button-area">
            <button @click="getCMS(Math.max(0, --pageNum))" :class="pageNum > 0 ? '' : 'fade'"><</button>
            <span>{{ pageNum+1 }}/{{ Math.floor(totalCount / limit)+1 }}</span>
            <button @click="getCMS(Math.min(++pageNum, Math.floor(totalCount / limit)))" :class="pageNum < Math.floor(totalCount / limit) ? '' : 'fade'">></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Activity',
    data: () => {
        return {
            ctx: useRuntimeConfig().public,
            activities: {},
            pageNum: 0,
            totalCount: 0,
            limit: 8,
        }
    },
    mounted() {
        // console.log(this.ctx);
        this.getCMS(this.pageNum);
    },
    methods: {
        getCMS(offset) {
            this.pageNum = offset;
            fetch((this.ctx.baseURL + "?limit=" + this.limit + "&offset=" + (offset * this.limit)), {
                headers: {
                    "X-MICROCMS-API-KEY": this.ctx.apiKey,
                },
            }).then(res => res.json())
                .then(json => {
                    // console.log(json);
                    // console.log(json.totalCount);
                    this.activities = json;
                    this.totalCount = json.totalCount;
                });
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>