<template>
    <div id="TitleAndLogo">
        <NuxtLink to="/" id="home-link">
            <div id="title-logo">
                <img src="~/assets/image/iconCircle.png" alt="アイコン">
                <div id="title">kCat's Portfolio</div>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'TitleAndLogo',
}
</script>

<style scoped>
@import "./index.css";
</style>