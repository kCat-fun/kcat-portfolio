<template>
    <div>
        <p>- <slot></slot> -</p>
        <SliderBox idName="recentPostId">
            <TweetBox v-for="_id in ids" :id="_id" style="margin: 0 10px;flex-shrink: 0;"></TweetBox>
        </SliderBox>
    </div>
</template>

<script>
export default {
    name: 'RecentPost',
    data: () => {
        return {
            ctx: useRuntimeConfig().public,
            ids: [],
        }
    },
    mounted() {
        // this.doGet();
    },
    methods: {
        doGet() {
            fetch(
                this.ctx.twitterIds, {
                method: "GET",
                header: {
                    "Content-Type": "application/json",
                    "charset": "UTF-8",
                },
            }
            ).then((response) => response.json())
                .then((data) => {
                    this.ids = data;
                    for (let i = 0; i < this.ids.length; i++) {
                        this.ids[i] = String(this.ids[i].id);
                    }
                    // console.log(this.ids);
                });
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>