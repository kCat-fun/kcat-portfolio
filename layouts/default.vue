<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/practice">Practice</NuxtLink>
      <NuxtLink to="/practice/counter">Counter</NuxtLink>
    </nav>
    <slot />
  </div>
</template>

<style scoped>
nav * {
  margin: auto 10px;
}

nav {
  width: 100%;
  background: gray;
}
</style>