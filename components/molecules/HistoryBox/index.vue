<template>
    <div class="history">
        <div class="date"><span>-</span> {{ date }}</div>
        <div class="context">
            <h2>{{ title }}</h2>
            <div v-html="content" />
        </div>
    </div>
</template>

<script>
export default {
    name: "History",
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>