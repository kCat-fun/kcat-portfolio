<template>
    <div>
        <h2>
            <a :href="url" class="link" target="_blank"><slot /></a>
        </h2>
        <p v-html="context" />
    </div>
</template>

<script>
export default {
    name: "SlideBox",
    props: {
        url: {
            type: String,
            required: true,
        },
        context: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped>
@import "./index.css";
</style>