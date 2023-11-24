<template>
    <div>
        <p>- <slot></slot> -</p>
        <SliderBox idName="recentPostId">
            <TweetBox v-for="_id in ids" :id="_id" style="margin-left: 20px;flex-shrink: 0;"></TweetBox>
        </SliderBox>
    </div>
</template>

<script>
export default {
    name: 'RecentPost',
    data: () => {
        return {
            ids: [],
        }
    },
    mounted() {
        this.doGet();
    },
    methods: {
        doGet() {
            fetch(
                "https://script.google.com/macros/s/AKfycby_JXJTBTazUIr9x-eqKeN2_Ws1vUnsBd_mA1MxNtxXUzfaSaFCPALQlkyvjYfw_BtFMw/exec?p=Post", {
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
                    console.log(this.ids);
                });
        }
    }
}
</script>

<style src="./index.css" scoped></style>