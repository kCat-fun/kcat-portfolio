<template>
    <div>
        <PageTitle>Activity</PageTitle>
        <div class="activities-area">
            <nuxt-link v-for="(activity, i) in activities.contents" :to="'/Activity/Content?id=' + activity.id"
                class="work-box-link">
                <div>
                    <WorkBox class="WorkBox" :tag="activity.tag" :data="activity.data" :imgPath="activity.image.url"
                        altStr="サムネイル">
                        {{ activity.title }}
                    </WorkBox>
                </div>
            </nuxt-link>
            <WorkBoxDammy class="dammy" />
            <WorkBoxDammy class="dammy" />
            <WorkBoxDammy class="dammy" />
        </div>
        <div class="button-area">
            <button @click="getCMS(Math.max(0, --pageNum))" :class="pageNum > 0 ? 'view' : 'fade'"><</button>
            <span>{{ pageNum + 1 }}/{{ Math.floor((totalCount-1) / limit) + 1 }}</span>
            <button @click="getCMS(Math.min(++pageNum, Math.floor((totalCount-1) / limit)))" :class="pageNum < Math.floor((totalCount-1) / limit) ? 'view' : 'fade'">></button>
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
            limit: 12,
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
            this.returnTop();
        },
        returnTop() {
            window.scrollTo({
                top: 0,
            })
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>