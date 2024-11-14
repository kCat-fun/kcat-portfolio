<template>
    <div class="main">
        <div v-html="activitie.content" />
    </div>
</template>

<script lang="ts">
export default {
    name: "Content",
    data: () => {
        return {
            ctx: useRuntimeConfig().public,
            activitie: {},
        }
    },
    async mounted() {
        try {
            const response = await fetch((this.ctx.baseURL + "?ids=" + this.$route.query.id), {
                headers: {
                    "X-MICROCMS-API-KEY": this.ctx.apiKey,
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            // console.log(data);
            this.activitie = data.contents[0];
            if (!this.activitie) {
                throw new Error("Activity not found");
            }
        } catch (error) {
            console.error('Failed to fetch Activity:', error);
        }
    },
}
</script>

<style scoped>
@import "./index.css";
</style>