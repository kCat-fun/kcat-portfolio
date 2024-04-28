<template>
    <div id="IntroBox">
        <p>{{ title }}</p>
        <TitleBar class="TitleBar"></TitleBar>
        <div id="contents">
            <slot></slot>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'IntroBox',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
@import "./index.css";
</style>