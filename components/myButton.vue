<template>
    <button id="myButton" :style="bgColor">
        <slot></slot>
    </button>
</template>

<style scoped>
#myButton {
    background-color: var(--color);
}

#myButton:hover {
    cursor: pointer;
    background-color: var(--hoverColor);
}

#myButton {
    font-size: 20px;
}
</style>

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
                text: this.text,
            }
        },
    }
}
</script>