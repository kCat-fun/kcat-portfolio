<template>
    <NuxtLink :to="path" id="nav-link" :style="bgColor">
        <slot />
    </NuxtLink>
</template>

<script>
export default {
    name: 'HeaderNavLink',
    props: {
        path: {
            type: String,
            required: true,
            default: "/",
        },
        color: {
            type: String,
            required: false,
            default: "#0000"
        },
        textColor: {
            type: String,
            required: false,
            default: "#000"
        }
    },
    computed: {
        bgColor() {
            return {
                '--color': this.color,
                '--textColor': this.textColor,
            }
        },
    }
}
</script>

<style src="./index.css" scoped></style>