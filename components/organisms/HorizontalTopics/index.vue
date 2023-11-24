<template>
    <div>
        <p>- <slot></slot> -</p>
        <SliderBox idName="newContentId">
            <TopicBox tag="tag1" :date="'2023/11/'+(i+1)" v-for="i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]" style="margin-left: 20px;flex-shrink: 0;">説明文をここに表示します。説明文をここに表示します。説明文をここに表示します。</TopicBox>
        </SliderBox>
    </div>
</template>

<script>
export default {
    name: 'HorizontalTopic',
    methods : {
        onClick() {
            console.log("click");
        },
    }
}
</script>

<style src="./index.css" scoped></style>