<template>
    <div class="main">
        <div v-html="activitie.content" />
    </div>
</template>

<script>
export default {
    name: "Content",
    data: () => {
        return {
            ctx: useRuntimeConfig().public,
            activitie: {},
        }
    },
    mounted() {
        const n = this.$route.query.n;
        // console.log(this.ctx);
        fetch(this.ctx.baseURL + "?limit=" + 1 + "&offset=" + n, {
            headers: {
                "X-MICROCMS-API-KEY": this.ctx.apiKey
            }
        }).then(res => res.json())
            .then(json => {
                for(let item of json.contents) {
                    // console.log(item.id, this.$route.query.id);
                    if(item.id == this.$route.query.id) {
                        this.activitie = item;
                        // console.log(this.activitie);
                        break;
                    }
                }
            });
    },
}
</script>

<style scoped>
@import "./index.css";
</style>