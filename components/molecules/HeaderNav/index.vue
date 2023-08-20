<template>
    <nav>
        <HeaderNavLink path="/About">About</HeaderNavLink>
        <HeaderNavLink path="/Activity">Activity</HeaderNavLink>
        <HeaderNavLink path="/Blog">Blog</HeaderNavLink>
        <HeaderNavLink path="/Contact" color="#52B5A3" textColor="#FBFBFB" textHoverColor="#DDD" width="200px">Contact</HeaderNavLink>
    </nav>
</template>

<script>
export default {
    name: 'HeaderNav',
}
</script>

<style src="./index.css" scoped></style>