<template>
    <div>
        <div :class="[isClick ? 'cross-button' : 'hambuger-button', 'button']" @click="isClick = !isClick">
            <div class="bar"></div>
            <div :class="isClick ? 'dammy-bar' : 'bar2'"></div>
            <div class="bar"></div>
        </div>
    </div>
    <div class="menu" v-if="isClick" @click="isClick = false">
        <ul>
            <li>
                <NuxtLink class="link" to="/">Top</NuxtLink>
            </li>
            <li>
                <NuxtLink class="link" to="/About">About</NuxtLink>
            </li>
            <li>
                <NuxtLink class="link" to="/Activity">Activity</NuxtLink>
            </li>
            <li>
                <NuxtLink class="link" to="/Blog">Blog</NuxtLink>
            </li>
            <li>
                <NuxtLink class="link" to="/Contact">Contact</NuxtLink>
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