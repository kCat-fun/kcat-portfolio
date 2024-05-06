<template>
    <div>
        <PageTitle>Activity</PageTitle>
        <div>
            <WorkBox v-for="activity in activities.contents" class="WorkBox" @click="moveContent(activity.id)" :tag="activity.tag" :data="activity.data"
                :imgPath="activity.image.url" altStr="サムネイル">
                {{ activity.title }}
            </WorkBox>
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
    methods: {
        moveContent(prop) {
            this.$router.push({ path: '/Activity/Content' , query :{ id: prop}});
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>