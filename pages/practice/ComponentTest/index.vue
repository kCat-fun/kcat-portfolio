<template>
    <div id="ComponentTest">
        <TriangleButton>◆</TriangleButton>
        <TitleBar class="titleBar"></TitleBar>
    </div>
</template>

<script>
export default {
    name: 'ComponentTest',
}
</script>

<style scoped>
#ComponentTest {
    width: 100%;
    min-height: 1000px;
}
.titleBar {
    width: 80%;
}
</style>