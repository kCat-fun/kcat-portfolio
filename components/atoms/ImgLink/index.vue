<template>
    <a :href=link target="blank">
        <slot />
    </a>
</template>

<script>
export default {
    name: 'ImgLink',
    props: {
        link: {
            type: String,
            required: false,
            default: "#",
        }
    }
}
</script>

<style src="./index.css" scoped />