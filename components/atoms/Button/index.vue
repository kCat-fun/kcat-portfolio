<template>
    <button :style="bgColor">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        color: {
            type: String,
            required: true,
            default: "#0000",
        },
        hoverColor: {
            type: String,
            required: true,
            default: "#0000",
        }
    },
    computed: {
        bgColor() {
            return {
                '--color': this.color,
                '--hoverColor': this.hoverColor,
            }
        },
    }
}
</script>

<style scoped>
@import "./index.css";
</style>