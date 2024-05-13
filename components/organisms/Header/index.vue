<template>
    <div id="warap">
        <HeaderMargin />
        <header v-if="windowWidth < breakPoint">
            <MobileTitleAndLogo class="mobileTitleAndLogo" />
            <HamburgerMenu />
        </header>
        <header v-else>
            <TitleAndLogo class="titleAndLogo" />
            <HeaderNav class="headerNav" />
        </header>
    </div>
</template>

<script>
import Constant from '~/assets/script/constant.json';

export default {
    name: 'Header',

    data: () => {
        return {
            windowWidth: '',
            breakPoint: Constant.BREAK_POINT,
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeWindow);
        this.windowWidth = window.innerWidth;
    },
    methods: {  
        resizeWindow() {
            this.windowWidth = window.innerWidth;
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>