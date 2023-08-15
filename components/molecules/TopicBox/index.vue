<template>
    <div>
        <img src="~/assets/image/testCaseImg.jpg" alt="説明画像">
        <TopicInfo :tag=tag :date=date>
            <slot></slot>
        </TopicInfo>
    </div>
</template>

<script>
export default {
    name: 'TopicBox',
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