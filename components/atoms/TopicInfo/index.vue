<template>
    <div id="topic-info">
        <div id="info">
            <Tag>{{ tag }}</Tag>
            <Date>{{ date }}</Date>
        </div>
        <p id="context">
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: 'TopicInfo',
    props: {
        tag: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
@import "./index.css";
</style>