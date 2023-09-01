<template>
    <div id="button">
        <div v-for="i in 3" :key="n" class="bar"></div>
    </div>
</template>

<script>
export default {
    name: 'HamburgerMenu',

}
</script>

<style src="./index.css" scoped></style>