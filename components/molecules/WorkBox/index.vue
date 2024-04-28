<template>
    <a href="#">
        <img :src=imgPath :alg=altStr>
        <div>
            <div class="info">
                <div><span>{{ tag }}</span>|</div>
                <div>{{ data }}</div>
            </div>
            <div class="title">
                <slot></slot>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'WorkBox',
    props: {
        tag: {
            type: String,
            require: true,
        },
        data: {
            type: String,
            require: true,
        },
        imgPath: {
            type: String,
            require: true,
        },
        altStr: {
            type: String,
            require: false,
            default: "Image"
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>