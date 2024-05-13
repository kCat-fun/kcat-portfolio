<template>
    <div>
        <div :class="[isClick ? 'cross-button' : 'hambuger-button', 'button']" @click="isClick = !isClick">
            <div class="bar"></div>
            <div :class="isClick ? 'dammy-bar' : 'bar2'"></div>
            <div class="bar"></div>
        </div>
    </div>
    <div :class="[isClick ? 'menu-open' : 'menu-close', 'menu']" v-if="isClick" @click="isClick = false">
        <ul>
            <li>
                <NuxtLink to="/"><span class="link">Top</span></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/About"><span class="link">About</span></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/Activity"><span class="link">Activity</span></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/Blog"><span class="link">Blog</span></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/Contact"><span class="link">Contact</span></NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HamburgerMenu',
    data: () => {
        return {
            isClick: false,
        }
    }
}
</script>

<style scoped>
@import "./index.css";
</style>