<template>
    <div>
        <a :href="link" target="blank">
            <slot />
        </a>
    </div>
</template>

<script>
export default {
    name: 'ImgLink',
    props: {
        link: {
            type: String,
            required: false,
            default: "#",
        },
    }
}
</script>
