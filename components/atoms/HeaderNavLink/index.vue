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
        },
        width: {
            type: String,
            required: false,
            default: "150px",
        },
    },
    computed: {
        bgColor() {
            return {
                '--color': this.color,
                '--textColor': this.textColor,
                '--width': this.width,
            }
        },
    }
}
</script>

<style src="./index.css" scoped></style>