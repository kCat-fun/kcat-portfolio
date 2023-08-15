<template>
    <div>
        <p>- <slot></slot> -</p>
        <div id="buttons-area">
            <TriangleButton class="trig-button" @click="test">◀</TriangleButton>
            <TriangleButton class="trig-button" @click="test">▶</TriangleButton>
        </div>
        <div id="content-area">
            <TopicBox tag="tag" date="2023/7/31">説明文をここに表示します。説明文をここに表示します。説明文をここに表示します。</TopicBox>
            <TopicBox tag="tag" date="2023/7/31">説明文をここに表示します。説明文をここに表示します。説明文をここに表示します。</TopicBox>
            <TopicBox tag="tag" date="2023/7/31">説明文をここに表示します。説明文をここに表示します。説明文をここに表示します。</TopicBox>
            <TopicBox tag="tag" date="2023/7/31">説明文をここに表示します。説明文をここに表示します。説明文をここに表示します。</TopicBox>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HorizontalTopic',
    methods : {
        test() {
            console.log("click");
        },
    }
}
</script>

<style src="./index.css" scoped></style>