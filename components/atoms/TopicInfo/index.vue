<template>
    <div id="topic-info">
        <div id="info">
            <div id="tag">{{ tag }}</div>
            <div id="date">{{ date }}</div>
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

<style src="./index.css" scoped></style>