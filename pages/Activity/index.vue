<template>
    <div>
        <PageTitle>Activity</PageTitle>
        <div>
            <nuxt-link v-for="activity in activities.contents" :to="'/Activity/Content?id='+activity.id">
                <WorkBox class="WorkBox"
                    :tag="activity.tag" :data="activity.data" :imgPath="activity.image.url" altStr="サムネイル">
                    {{ activity.title }}
                </WorkBox>
            </nuxt-link>
            <WorkBoxDammy class="WorkBox" />
            <WorkBoxDammy class="WorkBox" />
            <WorkBoxDammy class="WorkBox" />
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
        }
    },
    mounted() {
        // console.log(this.ctx);
        fetch(this.ctx.baseURL, {
            headers: {
                "X-MICROCMS-API-KEY": this.ctx.apiKey
            }
        }).then(res => res.json())
            .then(json => {
                console.log(json);
                this.activities = json;
            });
    },
}
</script>

<style scoped>
@import "./index.css";
</style>