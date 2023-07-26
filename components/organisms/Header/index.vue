<template>
    <header>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/practice">Practice</NuxtLink>
            <NuxtLink to="/practice/counter">Counter</NuxtLink>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style src="./index.css" scoped></style>