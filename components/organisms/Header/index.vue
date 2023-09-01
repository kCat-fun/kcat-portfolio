<template>
    <div id="warap">
        <HeaderMargin id="headerMargin"></HeaderMargin>
        <header v-if="windowWidth < 800">
            <MobileTitleAndLogo id="TitleAndLogo" />
            <HamburgerMenu class="HamburgerMenu" />
        </header>
        <header v-else>
            <TitleAndLogo id="TitleAndLogo" />
            <HeaderNav id="HeaderNav" />
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',

    data: () => {
        return {
            windowWidth: ''
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeWindow)
        this.windowWidth = window.innerWidth
    },
    methods: {  
        resizeWindow() {
            this.windowWidth = window.innerWidth
        }
    }
}
</script>

<style src="./index.css" scoped></style>